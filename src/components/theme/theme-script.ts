// Tách khỏi ThemeProvider ("use client") để layout server component import được giá trị chuỗi.
export const STORAGE_KEY = "theme";

/** Chạy trước khi paint để gắn class `dark` đúng, tránh nháy sáng→tối. */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}")||"system";var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

