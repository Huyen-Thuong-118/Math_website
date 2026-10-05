import Link from "next/link";
import { Lock, Target } from "lucide-react";

export function ReviewHero({ totalQuestions }: { totalQuestions?: number }) {
  return (
    <header className="rounded-3xl bg-linear-to-br from-white to-pastel-100 p-6 sm:p-10">
      <span className="ds-chip">Ôn theo chương chuẩn cấu trúc Bộ GD&amp;ĐT</span>
      <h1 className="mt-4 max-w-2xl">
        Luyện từng dạng, <span className="text-navy-300">chắc từng chương</span>
      </h1>
      <p className="mt-3 max-w-2xl text-navy-400">
        Câu hỏi trắc nghiệm phân hóa từ Nhận biết đến Vận dụng cao, đầy đủ lời
        giải chi tiết từng bước và video phân tích bẫy do Thầy BQD biên soạn.
        {totalQuestions ? ` Hiện bạn được giao ${totalQuestions} câu.` : ""}
      </p>
    </header>
  );
}

// TODO: wire real data — gắn với bài kiểm tra chẩn đoán khi backend có.
export function DiagnosticBanner() {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-navy-100 bg-pastel-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-500">
          <Target className="size-6" aria-hidden />
        </span>
        <div>
          <h3>Bạn đang bị mất điểm ở chuyên đề nào?</h3>
          <p className="mt-1 text-sm text-navy-400">
            Làm bài kiểm tra chẩn đoán lỗ hổng kiến thức 15 phút hoàn toàn miễn
            phí để biết chính xác phần cần ôn lại.
          </p>
        </div>
      </div>
      <Link
        href="/thi-thu"
        className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-navy-500 px-6 text-sm font-semibold text-pastel-50 transition-colors hover:bg-navy-600"
      >
        Kiểm tra năng lực ngay
      </Link>
    </section>
  );
}

// TODO: wire real data — tier "Nâng cao (9+)" theo lớp của học sinh.
export function AdvancedTierNotice({ signedIn = true }: { signedIn?: boolean }) {
  return (
    <section className="rounded-3xl border border-dashed border-navy-200 bg-white p-6 text-center">
      <Lock className="mx-auto size-6 text-navy-300" aria-hidden />
      <h3 className="mt-2">Chuyên đề Nâng cao (9+)</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-navy-400">
        Câu hỏi vận dụng cao dành riêng cho học viên lớp Nâng cao đã được duyệt.
      </p>
      {!signedIn && (
        <Link href="/dang-nhap" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-navy-500 px-6 text-sm font-semibold text-pastel-50">
          Đăng nhập để xem
        </Link>
      )}
    </section>
  );
}
