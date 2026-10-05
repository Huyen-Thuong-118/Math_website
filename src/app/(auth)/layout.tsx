import Link from "next/link";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AuthIllustration } from "@/features/auth/components/AuthIllustration";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

// Route group (auth): Đăng nhập/Đăng ký/Quên mật khẩu — layout split-screen
// riêng, KHÔNG dùng Navbar/Footer của (public).
//
// Guard: user đã đăng nhập không được vào lại /dang-nhap, /dang-ky,
// /quen-mat-khau — tránh nhầm lẫn kiểu "đăng ký xong tưởng đã vào được tài
// khoản admin" trong khi thực ra chỉ đang thấy session cũ còn sống. Điều
// hướng đúng nơi theo role/status, giống hệt logic trong src/proxy.ts.
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user) {
    redirect("/sau-dang-nhap");
  }

  return (
    <div className="ds relative flex min-h-dvh items-center justify-center bg-white p-4 sm:p-8 lg:p-12">
      <ThemeToggle className="absolute right-4 top-4 z-20 w-32" />
      <div className="grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Panel trái — ẩn dưới lg */}
        <div className="relative hidden flex-col justify-between overflow-hidden rounded-[2rem] bg-linear-to-b from-pastel-50 to-pastel-200 p-10 lg:flex">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-navy-500 text-xl font-bold text-white">Σ</span>
            <span className="text-2xl font-semibold tracking-tight text-navy-500">BQD Math</span>
          </Link>
          <div className="space-y-3">
            <h2 className="!text-4xl text-navy-500">Chào mừng trở lại</h2>
            <p className="text-navy-400">
              Học tập thông minh và bứt phá điểm số môn Toán THPT Quốc gia.
            </p>
          </div>
          <AuthIllustration />
          <p className="text-xs text-navy-300">© 2025 BQD Math. Nền tảng học Toán THPTQG.</p>
        </div>

        {/* Panel phải — form */}
        <div className="flex items-center justify-center py-4">
          <div className="w-full max-w-md">
            <Link href="/" className="mb-6 flex items-center gap-2 lg:hidden">
              <span className="flex size-9 items-center justify-center rounded-xl bg-navy-500 text-lg font-bold text-white">Σ</span>
              <span className="text-xl font-semibold text-navy-500">BQD Math</span>
            </Link>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
