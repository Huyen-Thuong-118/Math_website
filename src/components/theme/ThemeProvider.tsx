"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Thay next-themes: thư viện đó render <script> trong client component, React 19
// báo lỗi "Encountered a script tag while rendering React component". Script chống
// nháy giao diện nay nằm ở app/layout.tsx (server component) — xem THEME_INIT_SCRIPT.

import { STORAGE_KEY } from "./theme-script";

export type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void; ready: boolean }>({
  theme: "system",
  setTheme: () => {},
  ready: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  // false cho tới khi đã đọc localStorage — để ô chọn giao diện không nháy giá trị mặc định.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored === "light" || stored === "dark" || stored === "system") {
      // Đọc localStorage chỉ làm được sau khi mount (tránh hydration mismatch).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeState(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    applyTheme(next);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme, ready }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
