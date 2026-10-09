"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

/**
 * Switch kiểu iOS 44×24 đổi sáng/tối. Lần đầu theo hệ thống (xem ThemeProvider);
 * bấm một lần là lưu lựa chọn rõ ràng. Chưa mount thì render placeholder cùng kích
 * thước để không lệch layout/hydration.
 */
export function ThemeToggle({ className, label }: { className?: string; label?: string }) {
  const { theme, setTheme, ready } = useTheme();
  const isDark =
    ready &&
    (theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches));

  const control = ready ? (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Chuyển giao diện sáng/tối"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-navy-200/60 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]",
        isDark ? "bg-[#3b82f6]" : "bg-navy-100",
      )}
    >
      <span
        className={cn(
          "absolute left-0.5 flex size-5 items-center justify-center rounded-full bg-white text-navy-500 shadow-sm transition-transform duration-200",
          isDark && "translate-x-5",
        )}
      >
        {isDark ? <Moon className="size-3" aria-hidden /> : <Sun className="size-3" aria-hidden />}
      </span>
    </button>
  ) : (
    <span aria-hidden className="inline-block h-6 w-11 shrink-0" />
  );

  if (!label) return <span className={cn("inline-flex items-center", className)}>{control}</span>;
  return (
    <div className={cn("flex items-center justify-between gap-3 text-navy-500", className)}>
      <span className="text-sm font-medium">{label}</span>
      {control}
    </div>
  );
}
