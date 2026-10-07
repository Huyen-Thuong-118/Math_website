import Link from "next/link";
import { Archive, ArrowRight, BookOpen, CalendarDays, FileQuestion, FolderOpen, Lock, Users } from "lucide-react";

export type ClassCardItem = {
  id: string;
  name: string;
  code: string;
  level: "ADVANCED" | "BASIC" | string;
  archived: boolean;
  schedule: string;
  description: string | null;
  students: number;
  documents: number;
  questions: number;
  exams: number;
};

export function ClassHero() {
  return (
    <header>
      <h1>Lớp học của tôi</h1>
    </header>
  );
}

export function ClassCard({ item }: { item: ClassCardItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_12px_32px_-8px_rgba(27,42,74,0.07)]">
      <div className="bg-linear-to-br from-navy-500 to-navy-300 px-5 pb-4 pt-5 text-pastel-50">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            {item.level === "ADVANCED" ? "Nâng cao" : "Cơ bản"}
          </span>
          {item.archived && (
            <span className="inline-flex items-center gap-1 text-xs"><Archive className="size-3.5" aria-hidden />Đã lưu trữ</span>
          )}
        </div>
        <p className="mt-6 text-xs tracking-wide text-pastel-200">Mã lớp: {item.code}</p>
        <h2 className="text-xl text-white">{item.name}</h2>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="inline-flex items-center gap-1.5 text-sm text-navy-400">
          <CalendarDays className="size-4 shrink-0" aria-hidden />
          {item.schedule}
        </p>
        {item.description && <p className="line-clamp-2 text-sm text-navy-300">{item.description}</p>}
        <div className="flex flex-wrap gap-3 text-xs text-navy-400">
          <span className="inline-flex items-center gap-1"><Users className="size-3.5" aria-hidden />{item.students} HS</span>
          <span className="inline-flex items-center gap-1"><FolderOpen className="size-3.5" aria-hidden />{item.documents} tài liệu</span>
          <span className="inline-flex items-center gap-1"><BookOpen className="size-3.5" aria-hidden />{item.questions} câu ôn</span>
          <span className="inline-flex items-center gap-1"><FileQuestion className="size-3.5" aria-hidden />{item.exams} đề</span>
        </div>
        <Link
          href={`/lop-hoc/${item.id}`}
          className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy-500 px-5 text-sm font-semibold text-pastel-50 transition-colors hover:bg-navy-600"
        >
          Vào lớp học <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function LockedClassCard() {
  return (
    <article className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-navy-200 bg-white/70 p-8 text-center">
      <Lock className="size-6 text-navy-300" aria-hidden />
      <h2 className="mt-3 !text-lg">Chuyên đề VDC Oxyz</h2>
      <p className="mt-1 text-sm text-navy-400">
        Lớp học chỉ dành cho học viên được phê duyệt. Vui lòng liên hệ giáo viên để được thêm vào lớp.
      </p>
      <Link href="/lien-he" className="mt-4 inline-flex min-h-11 items-center rounded-full border border-navy-200/60 bg-white px-5 text-sm font-semibold text-navy-500">
        Gửi yêu cầu tham gia
      </Link>
    </article>
  );
}

// TODO: wire real data — trích dẫn / thông tin giáo viên.
