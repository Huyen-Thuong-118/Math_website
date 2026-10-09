import Link from "next/link";
import { BookOpen, ChartNoAxesColumnIncreasing } from "lucide-react";

import { ReviewHero } from "@/features/review-questions/components/ReviewBanners";
import { getReviewChaptersForCurrentStudent } from "@/features/review-questions/queries";

export const dynamic = "force-dynamic";

export default async function ReviewChapterListPage() {
  const chapters = await getReviewChaptersForCurrentStudent();
  const total = chapters.reduce((sum, chapter) => sum + chapter.questionCount, 0);
  return (
    <section className="space-y-8">
      <ReviewHero totalQuestions={total} />
      {chapters.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/on-tap/${chapter.id}`}
              className="rounded-3xl border border-navy-100 bg-white p-5 shadow-[0_12px_32px_-8px_rgba(27,42,74,0.07)] transition hover:-translate-y-0.5 hover:border-[rgb(59_130_246/0.4)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-pastel-100 text-navy-500">
                  <BookOpen className="size-5" aria-hidden />
                </span>
                <span className="ds-chip">{chapter.questionCount} câu</span>
              </div>
              <h2 className="mt-4 !text-lg font-semibold text-navy-600">{chapter.name}</h2>
              <div className="mt-4 ds-ribbon !bg-navy-50" aria-hidden>
                <span style={{ width: `${chapter.attemptCount ? chapter.correctRate : 0}%` }} />
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-navy-300">
                <ChartNoAxesColumnIncreasing className="size-4" aria-hidden />
                {chapter.attemptCount ? `${chapter.attemptCount} lượt · đúng ${chapter.correctRate}%` : "Chưa bắt đầu"}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-navy-200 bg-white p-12 text-center text-sm text-navy-400">
          Bạn chưa được giao câu hỏi ôn tập nào.
        </div>
      )}
    </section>
  );
}
