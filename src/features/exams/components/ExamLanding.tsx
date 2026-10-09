import { Clock3, FileQuestion } from "lucide-react";

import type { ExamListItem } from "../types";
import { StartExamButton } from "./StartExamButton";

/** Thống kê tính từ chính danh sách đề của học sinh — không dùng số liệu mẫu. */
function buildStats(exams: ExamListItem[]) {
  const best = exams.reduce<number | null>(
    (max, exam) => (exam.bestScore !== null && (max === null || exam.bestScore > max) ? exam.bestScore : max),
    null,
  );
  return [
    { value: String(exams.length), label: "Đề được giao" },
    { value: String(exams.filter((exam) => exam.available).length), label: "Đề đang mở" },
    { value: String(exams.reduce((sum, exam) => sum + exam.attemptCount, 0)), label: "Lượt bạn đã làm" },
    { value: best === null ? "—" : best.toFixed(2), label: "Điểm cao nhất của bạn" },
  ];
}

export function ExamHero({ exams }: { exams: ExamListItem[] }) {
  const stats = buildStats(exams);
  return (
    <header className="space-y-4">
      <h1>Phòng thi thử</h1>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-navy-100 bg-white px-3 py-4">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-2xl font-bold text-navy-500">{stat.value}</dd>
            <p className="mt-1 text-xs text-navy-300">{stat.label}</p>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** Đề nổi bật: đề đang mở đầu tiên (ưu tiên đề đang làm dở). */
export function FeaturedExam({ exams }: { exams: ExamListItem[] }) {
  const exam = exams.find((item) => item.openAttemptId) ?? exams.find((item) => item.available);
  if (!exam) return null;
  const limitReached =
    !exam.openAttemptId && exam.maxAttempts !== null && exam.attemptCount >= exam.maxAttempts;
  return (
    <section className="rounded-3xl border border-navy-100 bg-linear-to-br from-white to-pastel-100 p-6 shadow-[0_20px_40px_-12px_rgba(27,42,74,0.09)] sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-navy-500 px-3 py-1 text-xs font-semibold text-pastel-50">
              {exam.openAttemptId ? "Đang làm dở" : "Đang mở thi"}
            </span>
            <span className="ds-chip">{exam.mode === "MOCK" ? "Thi thử" : "Luyện tập"}</span>
          </div>
          <h2>{exam.title}</h2>
          <ul className="flex flex-wrap gap-3 text-sm text-navy-400">
            <li className="inline-flex items-center gap-1.5 rounded-2xl bg-white px-3 py-2">
              <Clock3 className="size-4" aria-hidden />
              {exam.durationMinutes ? `${exam.durationMinutes} phút` : "Không giới hạn"} | {exam.questionCount} câu
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-2xl bg-white px-3 py-2">
              <FileQuestion className="size-4" aria-hidden />
              {exam.maxAttempts === null
                ? "Không giới hạn lượt"
                : `Còn ${Math.max(exam.maxAttempts - exam.attemptCount, 0)}/${exam.maxAttempts} lượt`}
            </li>
            <li className="rounded-2xl bg-white px-3 py-2">{exam.availabilityLabel}</li>
          </ul>
        </div>
        <StartExamButton
          examId={exam.id}
          disabled={!exam.available || limitReached || exam.questionCount === 0}
          resume={Boolean(exam.openAttemptId)}
        />
      </div>
    </section>
  );
}
