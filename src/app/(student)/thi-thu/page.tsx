import type { Metadata } from "next";

import { ExamList } from "@/features/exams/components/ExamList";
import { ExamHero, FeaturedExam } from "@/features/exams/components/ExamLanding";
import { getExamListForCurrentStudent } from "@/features/exams/queries";

export const metadata: Metadata = { title: "Phòng thi thử | BQD Math" };
export const dynamic = "force-dynamic";

export default async function ExamListPage() {
  const exams = await getExamListForCurrentStudent();
  return (
    <section className="space-y-8">
      <ExamHero exams={exams} />
      <FeaturedExam exams={exams} />
      <div className="space-y-4">
        <h2>Đề được giao cho lớp của bạn</h2>
        <p className="-mt-2 text-sm text-navy-400">Đáp án được tự động lưu khi làm bài.</p>
        <ExamList exams={exams} />
      </div>
    </section>
  );
}
