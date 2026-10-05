import Link from "next/link";
import { Download, Eye, FileText, FolderOpen, RefreshCw } from "lucide-react";

export type DocumentCardItem = {
  id: string;
  title: string;
  fileName: string;
  updateCount: number;
  allowDownload: boolean;
  hasAnswer: boolean;
  folderPath: string;
  classNames: string[];
};

/** Card tài liệu theo Stitch "Tài liệu": chip trên cùng, tiêu đề, meta, nút Xem trước + Tải. */
export function DocumentCard({ item }: { item: DocumentCardItem }) {
  return (
    <article className="flex flex-col rounded-3xl border border-navy-100 bg-white p-5 shadow-[0_12px_32px_-8px_rgba(27,42,74,0.07)]">
      <div className="flex flex-wrap items-center gap-2">
        {item.updateCount > 0 && (
          <span className="ds-chip ds-chip-warn gap-1">
            <RefreshCw className="size-3" aria-hidden />
            Cập nhật {item.updateCount} lần
          </span>
        )}
        {item.hasAnswer && <span className="ds-chip ds-chip-ok">Có đáp án</span>}
      </div>
      <div className="mt-4 flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
          <FileText className="size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <h2 className="font-semibold leading-snug text-navy-600">{item.title}</h2>
          <p className="mt-1 truncate text-xs text-navy-300">{item.fileName}</p>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-navy-300">
        <FolderOpen className="size-3.5 shrink-0" aria-hidden />
        <span className="truncate">{item.folderPath}</span>
      </p>
      {item.classNames.length > 0 && (
        <p className="mt-1 text-xs text-navy-300">Lớp: {item.classNames.join(", ")}</p>
      )}
      <div className="mt-5 flex items-center gap-2 pt-1">
        <Link
          href={`/tai-lieu/${item.id}`}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-navy-500 px-5 text-sm font-semibold text-pastel-50 transition-colors hover:bg-navy-600"
        >
          <Eye className="size-4" aria-hidden />
          Xem trước
        </Link>
        {item.allowDownload && (
          <a
            href={`/api/documents/${item.id}/file?download=1`}
            aria-label={`Tải xuống ${item.title}`}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-navy-200/60 bg-white text-navy-500 transition-colors hover:bg-pastel-50"
          >
            <Download className="size-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
