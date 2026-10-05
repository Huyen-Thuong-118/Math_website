import Link from "next/link";

import { DiagnosticBanner } from "@/features/review-questions/components/ReviewBanners";
import { ReviewPractice } from "@/features/review-questions/components/ReviewPractice";
import {
  ReviewQuestionPagination,
  StudentReviewQuestionFilters,
} from "@/features/review-questions/components/ReviewQuestionFilters";
import { parseReviewQuestionFilters } from "@/features/review-questions/filters";
import { getReviewQuestionsForCurrentStudent } from "@/features/review-questions/queries";

export const dynamic = "force-dynamic";

export default async function ReviewQuestionsPage({
  params,
  searchParams,
}: {
  params: Promise<{ chapterId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { chapterId } = await params;
  const filters = parseReviewQuestionFilters(await searchParams);
  const { chapter, questions, filters: filterOptions, pagination } = await getReviewQuestionsForCurrentStudent(chapterId, filters);
  return (
    <section className="space-y-5">
      <Link href="/on-tap" className="text-sm font-semibold text-navy-400">← Các chương</Link>
      <h1>{chapter.name}</h1>
      <StudentReviewQuestionFilters chapterId={chapterId} filters={filters} options={filterOptions} total={pagination.total} />
      <ReviewPractice questions={questions} />
      <ReviewQuestionPagination pathname={`/on-tap/${chapterId}`} filters={filters} page={pagination.page} totalPages={pagination.totalPages} />
      <DiagnosticBanner />
    </section>
  );
}
