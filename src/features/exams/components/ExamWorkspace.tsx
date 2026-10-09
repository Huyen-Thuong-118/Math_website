"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";

import { submitExam } from "../actions";
import { useAnswerBuffer, type SaveStatus } from "../hooks/useAnswerBuffer";
import type { TakingAttempt } from "../types";
import { AnswerSheet, isCompleteAnswer } from "./AnswerSheet";
import { ExamTimer } from "./ExamTimer";
import { PdfViewer } from "./PdfViewer";

const SAVE_LABEL: Record<SaveStatus, string> = {
  saved: "Đã lưu",
  saving: "Đang lưu…",
  unsaved: "Chưa lưu",
  error: "Lỗi lưu — sẽ thử lại",
};

export function ExamWorkspace({ attempt }: { attempt: TakingAttempt }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [mobilePane, setMobilePane] = useState<"answers" | "pdf">("answers");
  const submittingRef = useRef(false);
  const [tabSwitches, setTabSwitches] = useState(0);
  const { answers, selectAnswer, flushNow, saveStatus } = useAnswerBuffer(
    attempt.id,
    attempt.initialAnswers,
    attempt.initialHistory,
  );
  const answeredCount = attempt.questions.filter((question) =>
    isCompleteAnswer(question, answers[question.number]),
  ).length;

  // Chống gian lận (UI): đếm số lần rời tab. Chỉ cảnh báo, không tự nộp bài.
  useEffect(() => {
    function onVisibility() {
      if (document.visibilityState === "hidden") setTabSwitches((count) => count + 1);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const handleSubmit = useCallback(async (automatic = false) => {
    if (submittingRef.current) return;
    const unanswered = attempt.questions.length - answeredCount;
    if (!automatic && unanswered > 0 && !window.confirm(`Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?`)) return;
    submittingRef.current = true;
    setIsSubmitting(true);
    setError(undefined);

    const saved = await flushNow();
    if (!saved) {
      setError("Chưa lưu được đáp án. Kiểm tra mạng rồi bấm nộp lại.");
      setIsSubmitting(false);
      submittingRef.current = false;
      return;
    }

    const result = await submitExam(attempt.id);
    if (!result.success) {
      setError(result.error);
      setIsSubmitting(false);
      submittingRef.current = false;
      return;
    }
    router.replace(`/thi-thu/${attempt.examId}/result?attemptId=${attempt.id}`);
    router.refresh();
  }, [answeredCount, attempt.examId, attempt.id, attempt.questions.length, flushNow, router]);

  return (
    <div className="space-y-6">
      <header className="sticky top-2 z-20 rounded-3xl bg-navy-600 p-4 text-white shadow-[0_20px_40px_-12px_rgba(27,42,74,0.35)] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wide text-pastel-300 uppercase">
              {attempt.mode === "MOCK" ? "Thi thử" : "Luyện tập"}
            </p>
            <h1 className="mt-1 truncate text-lg font-semibold text-white sm:text-xl">
              {attempt.examTitle}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className={saveStatus === "error" ? "text-red-300" : "text-pastel-200"}>
              {saveStatus === "saved" && <CheckCircle2 className="mr-1 inline size-4" />}
              {SAVE_LABEL[saveStatus]}
            </span>
            {attempt.mode === "MOCK" && (
              <span className="rounded-2xl bg-white px-4 py-2">
                <ExamTimer expiresAt={attempt.expiresAt} onExpire={() => void handleSubmit(true)} />
              </span>
            )}
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => void handleSubmit()}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-bold text-white transition-colors hover:bg-emerald-600 disabled:opacity-70"
            >
              {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
              Nộp bài
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xs text-pastel-200">Tiến độ</span>
          <div className="ds-ribbon flex-1" role="progressbar" aria-valuemin={0} aria-valuemax={attempt.questions.length} aria-valuenow={answeredCount} aria-label="Tiến độ làm bài">
            <span style={{ width: `${attempt.questions.length ? (answeredCount / attempt.questions.length) * 100 : 0}%` }} />
          </div>
          <span className="text-xs font-semibold text-white">
            {answeredCount}/{attempt.questions.length} câu
          </span>
        </div>
      </header>
      {tabSwitches > 3 && (
        <p role="alert" className="flex items-center gap-2 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
          <AlertTriangle className="size-4 shrink-0" aria-hidden />
          Bạn đã rời khỏi tab thi {tabSwitches} lần. Vui lòng giữ tập trung và không chuyển tab khi đang làm bài.
        </p>
      )}

      {attempt.hasExamFile && (
        <div className="sticky top-[8.5rem] z-10 grid grid-cols-2 rounded-2xl border border-navy-100 bg-white p-1 shadow-sm xl:hidden" role="tablist" aria-label="Nội dung bài thi">
          <button type="button" role="tab" aria-selected={mobilePane === "answers"} aria-controls="exam-answer-pane" onClick={() => setMobilePane("answers")} className={`min-h-11 rounded-xl px-3 text-sm font-semibold ${mobilePane === "answers" ? "bg-navy-600 text-white" : "text-navy-400"}`}>Bài làm</button>
          <button type="button" role="tab" aria-selected={mobilePane === "pdf"} aria-controls="exam-pdf-pane" onClick={() => setMobilePane("pdf")} className={`min-h-11 rounded-xl px-3 text-sm font-semibold ${mobilePane === "pdf" ? "bg-navy-600 text-white" : "text-navy-400"}`}>Xem PDF</button>
        </div>
      )}

      <div className={attempt.hasExamFile ? "grid min-w-0 items-start gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(24rem,0.75fr)]" : "mx-auto max-w-4xl"}>
        {attempt.hasExamFile && <div id="exam-pdf-pane" role="tabpanel" className={mobilePane === "pdf" ? "min-w-0" : "hidden min-w-0 xl:block"}><PdfViewer title="Đề thi" fileUrl={`/api/exams/${attempt.examId}/file/exam`} allowDownload={attempt.allowDownload} watermark={attempt.examTitle} unavailableMessage="Không thể mở file đề." /></div>}
        <div id="exam-answer-pane" role={attempt.hasExamFile ? "tabpanel" : undefined} className={`${attempt.hasExamFile && mobilePane === "pdf" ? "hidden xl:block" : ""} min-w-0 ${attempt.hasExamFile ? "xl:sticky xl:top-40" : ""}`}><AnswerSheet questions={attempt.questions} answers={answers} disabled={isSubmitting} onAnswer={selectAnswer} marked={marked} onToggleMarked={(number) => setMarked((current) => { const next = new Set(current); if (next.has(number)) next.delete(number); else next.add(number); return next; })} /><p className="mt-2 px-2 text-xs text-navy-300">Màu vàng là câu đã đánh dấu xem lại. Lời giải chỉ xuất hiện sau khi nộp nếu giáo viên cho phép.</p></div>
      </div>

      {error && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}
      <div className="flex flex-col items-center gap-2 rounded-3xl bg-navy-600 p-5 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold">Đã trả lời {answeredCount}/{attempt.questions.length} câu</p>
          <p className="text-xs text-pastel-200">Có thể nộp khi chưa trả lời hết.</p>
          <div className="ds-ribbon mt-2 w-48 max-w-full" role="progressbar" aria-valuemin={0} aria-valuemax={attempt.questions.length} aria-valuenow={answeredCount} aria-label="Tiến độ làm bài"><span style={{ width: `${attempt.questions.length ? (answeredCount / attempt.questions.length) * 100 : 0}%` }} /></div>
        </div>
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => void handleSubmit()}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-600 disabled:opacity-70"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Send className="size-4" aria-hidden />
          )}
          Nộp bài
        </button>
      </div>
    </div>
  );
}
