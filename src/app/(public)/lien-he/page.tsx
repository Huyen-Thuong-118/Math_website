import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Globe, MapPin, Phone, Clock3 } from "lucide-react";

import { MapModal } from "@/features/notifications/components/MapModal";
import { CONTACT, SUPPORT_POLICIES } from "@/features/notifications/contact-mock";

export const metadata: Metadata = { title: "Liên hệ | BQD Math" };

export default function ContactPage() {
  return (
    <div className="ds space-y-10">
      <header className="rounded-3xl bg-linear-to-br from-white to-pastel-100 p-6 sm:p-10">
        <span className="ds-chip">Kết nối với thầy cô BQD</span>
        <h1 className="mt-4 max-w-2xl">
          Có câu hỏi? <span className="text-navy-300">Nhắn ngay</span> cho chúng tôi
        </h1>
        <p className="mt-3 max-w-2xl text-navy-400">
          Đội ngũ trợ giảng và giáo viên BQD Math luôn sẵn sàng hỗ trợ giải đáp
          bài tập, tư vấn xếp lớp phù hợp và đồng hành cùng học sinh bứt phá
          điểm 9+ môn Toán THPTQG.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-center">Liên hệ trực tiếp theo nhu cầu</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="flex flex-col rounded-3xl border border-navy-100 bg-white p-5">
            <Phone className="size-6 text-navy-400" aria-hidden />
            <p className="mt-3 text-xs font-semibold text-navy-300">HỖ TRỢ 24/7</p>
            <h3>Hotline &amp; Zalo</h3>
            <p className="mt-1 font-display text-lg font-bold text-navy-500">{CONTACT.phone}</p>
            <div className="mt-auto flex gap-2 pt-4">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-navy-500 px-4 text-sm font-semibold text-pastel-50">Gọi ngay</a>
              <a href={CONTACT.zaloUrl} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-navy-200/60 px-4 text-sm font-semibold text-navy-500">Nhắn Zalo</a>
            </div>
          </article>

          <article className="flex flex-col rounded-3xl border border-navy-100 bg-white p-5">
            <Globe className="size-6 text-navy-400" aria-hidden />
            <p className="mt-3 text-xs font-semibold text-navy-300">CỘNG ĐỒNG HỌC SINH</p>
            <h3>{CONTACT.facebookName}</h3>
            <p className="mt-1 text-sm text-navy-400">Cập nhật lịch livestream, đề thi và thông báo mới nhất.</p>
            <a href={CONTACT.facebookUrl} className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full border border-navy-200/60 px-4 text-sm font-semibold text-navy-500">Mở Facebook</a>
          </article>

          <article className="flex flex-col rounded-3xl border border-navy-100 bg-white p-5">
            <MapPin className="size-6 text-navy-400" aria-hidden />
            <p className="mt-3 text-xs font-semibold text-navy-300">CƠ SỞ TRỰC TIẾP</p>
            <h3>Địa chỉ trung tâm</h3>
            <p className="mt-1 text-sm text-navy-400">{CONTACT.address}</p>
            <div className="mt-auto pt-4">
              <MapModal address={CONTACT.address} />
            </div>
          </article>

          <article className="flex flex-col rounded-3xl border border-navy-100 bg-white p-5">
            <Clock3 className="size-6 text-navy-400" aria-hidden />
            <p className="mt-3 text-xs font-semibold text-navy-300">THỜI GIAN PHỤC VỤ</p>
            <h3>Lịch hỗ trợ</h3>
            <ul className="mt-2 space-y-2 text-sm text-navy-400">
              {CONTACT.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-2 rounded-2xl bg-pastel-50 px-3 py-2">
                  <span>{row.days}</span>
                  <span className="font-semibold text-navy-500">{row.time}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2>Chính sách hỗ trợ &amp; hướng dẫn đăng ký</h2>
        <div className="space-y-3">
          {SUPPORT_POLICIES.map((policy) => (
            <details key={policy.title} className="group rounded-2xl border border-navy-100 bg-white p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-navy-600">
                {policy.title}
                <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 text-sm text-navy-400">{policy.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-linear-to-br from-navy-500 to-galaxy-800 p-8 text-pastel-50 sm:p-10">
        <span className="text-xs font-semibold tracking-wide text-pastel-300 uppercase">Sẵn sàng bứt phá</span>
        <h2 className="mt-2 max-w-xl text-white">Tham gia lớp học cùng Thầy Dũng ngay tuần này</h2>
        <p className="mt-2 max-w-xl text-sm text-pastel-200">
          Đừng để những câu hỏi khó làm chậm bước chân của bạn trên hành trình chinh phục điểm 9+.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-navy-600">Gọi hotline tư vấn</a>
          <Link href="/lop-hoc" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white hover:bg-white/10">Xem thông tin lớp học</Link>
        </div>
      </section>
    </div>
  );
}
