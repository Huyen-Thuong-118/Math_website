"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, X } from "lucide-react";

/** Bấm vào địa chỉ → mở modal Google Maps embed (đóng bằng Esc / nút X / bấm nền). */
export function MapModal({ address, label }: { address: string; label?: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const query = encodeURIComponent(address);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-navy-500 px-5 text-sm font-semibold text-pastel-50 transition-colors hover:bg-navy-600"
      >
        <MapPin className="size-4" aria-hidden />
        {label ?? "Xem bản đồ chỉ đường"}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bản đồ chỉ đường"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_40px_-12px_rgba(27,42,74,0.4)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-navy-100 px-5 py-3">
              <p className="min-w-0 truncate text-sm font-semibold text-navy-600">{address}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Đóng bản đồ"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-navy-100 text-navy-500 hover:bg-pastel-50"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <iframe
              title="Bản đồ chỉ đường"
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              className="h-[60vh] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  );
}
