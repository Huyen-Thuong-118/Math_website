import Link from "next/link";
import { Lock, ShieldCheck } from "lucide-react";

export function DocumentsHero() {
  return (
    <header className="mx-auto max-w-3xl space-y-4 text-center">
      <span className="ds-chip">Tài liệu độc quyền Thầy BQD</span>
      <h1>
        Kho tài liệu <span className="text-navy-300">luôn được cập nhật</span>
      </h1>
      <p className="text-navy-400">
        Tuyển tập giáo trình, chuyên đề trọng tâm và đề khảo sát bản quyền được
        biên soạn công phu, chia sẻ riêng cho các lớp bạn đang học.
      </p>
    </header>
  );
}

/** Giải thích watermark/bảo mật — thay cho khối PDF demo của Stitch. */
export function WatermarkNotice() {
  return (
    <section className="flex flex-col gap-3 rounded-3xl border border-navy-100 bg-white p-6 sm:flex-row sm:items-center">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-pastel-100 text-navy-500">
        <ShieldCheck className="size-6" aria-hidden />
      </span>
      <div>
        <h3>Xem PDF trực tuyến có watermark bảo mật</h3>
        <p className="mt-1 text-sm text-navy-400">
          Mỗi tài liệu hiển thị tên và mã học sinh trên nội dung để bảo vệ bản
          quyền. Một số tài liệu giáo viên không cho phép tải xuống.
        </p>
      </div>
    </section>
  );
}

// TODO: wire real data — số lượng tài liệu / điều kiện hiển thị CTA lấy từ backend.
export function UnlockBanner() {
  return (
    <section className="overflow-hidden rounded-3xl bg-linear-to-br from-navy-500 to-galaxy-800 p-8 text-pastel-50 sm:p-12">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
        <Lock className="size-3" aria-hidden />
        Học viên VIP THPTQG 2026
      </span>
      <h2 className="mt-4 max-w-2xl text-3xl text-white">
        Mở khóa toàn bộ 200+ tài liệu chuyên sâu và video bài giảng đi kèm
      </h2>
      <p className="mt-3 max-w-xl text-sm text-pastel-200">
        Trọn bộ lời giải chi tiết, sơ đồ tư duy và phòng thi thử bám sát đề thực chiến.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/dang-ky"
          className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-navy-600 transition-transform hover:-translate-y-px"
        >
          Đăng ký học viên ngay
        </Link>
        <Link
          href="/lop-hoc"
          className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white hover:bg-white/10"
        >
          Xem danh sách khóa học
        </Link>
      </div>
    </section>
  );
}
