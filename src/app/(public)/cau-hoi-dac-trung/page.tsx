import type { Metadata } from "next";
import Link from "next/link";
import { Video } from "lucide-react";

import {
  FEATURED_FILTERS,
  FEATURED_STATS,
  FEATURED_TOPICS,
} from "@/features/review-questions/featured-mock";

export const metadata: Metadata = { title: "Câu hỏi đặc trưng | BQD Math" };

export default function FeaturedQuestionsPage() {
  return (
    <div className="ds space-y-10">
      <header className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="ds-chip">Tuyển chọn bởi giáo viên BQD</span>
        <h1>
          Những dạng <span className="text-navy-300">chắc chắn gặp</span> trong đề thi THPTQG
        </h1>
        <p className="text-navy-400">
          Ngân hàng câu hỏi trọng tâm, phân loại ma trận 9+ từ đề thi chính thức
          và đề thi thử các trường Chuyên toàn quốc, kèm lời giải trực quan.
        </p>
        <dl className="mx-auto grid max-w-xl grid-cols-3 gap-3 pt-2">
          {FEATURED_STATS.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-navy-100 bg-white px-2 py-3">
              <dd className="font-display text-xl font-bold text-navy-500">{stat.value}</dd>
              <dt className="mt-1 text-xs text-navy-300">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </header>

      <div className="flex flex-wrap gap-2" role="list" aria-label="Nhóm dạng bài">
        {FEATURED_FILTERS.map((label, index) => (
          <span
            key={label}
            role="listitem"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${index === 0 ? "bg-navy-500 text-pastel-50" : "border border-navy-100 bg-white text-navy-400"}`}
          >
            {label}
          </span>
        ))}
      </div>

      <section className="space-y-4">
        <h2>Các dạng bài tiêu biểu xuất hiện trong đề 2025</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED_TOPICS.map((topic) => (
            <article key={topic.id} className="flex flex-col rounded-3xl border border-navy-100 bg-white p-5 shadow-[0_12px_32px_-8px_rgba(27,42,74,0.07)]">
              <p className="text-xs font-semibold text-navy-300">{topic.group}</p>
              {topic.hot && <span className="ds-chip ds-chip-warn mt-2 w-fit">Xuất hiện thường xuyên</span>}
              <h3 className="mt-3">{topic.title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy-400">{topic.summary}</p>
              <p className="mt-4 text-xs text-navy-300">{topic.questionCount} câu tiêu biểu · {topic.level}</p>
              <Link href="/dang-nhap" className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy-500 px-5 text-sm font-semibold text-pastel-50 hover:bg-navy-600">
                <Video className="size-4" aria-hidden />
                Luyện ngay dạng này
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-navy-100 bg-white p-8 text-center">
        <span className="ds-chip">Chuyên đề độc quyền 9+</span>
        <h2 className="mt-3">Dạng bài Vận dụng cao độc quyền lớp Chuyên đề BQD</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-navy-400">
          Học sinh đăng ký khóa học hoặc xếp lớp trực tiếp để mở khóa toàn bộ lời giải và video chi tiết.
        </p>
        <Link href="/dang-nhap" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-navy-500 px-6 text-sm font-semibold text-pastel-50">
          Đăng nhập học viên
        </Link>
      </section>
    </div>
  );
}
