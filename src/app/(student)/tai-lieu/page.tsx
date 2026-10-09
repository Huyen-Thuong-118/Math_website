import { DocumentCard, type DocumentCardItem } from "@/features/documents/components/DocumentCard";
import { DocumentsHero } from "@/features/documents/components/DocumentsBanners";
import {
  StudentDocumentFilters,
  StudentDocumentPagination,
} from "@/features/documents/components/StudentDocumentFilters";
import { parseStudentDocumentFilters } from "@/features/documents/filters";
import { getDocumentsForCurrentStudent } from "@/features/documents/queries";

export const dynamic = "force-dynamic";

export default async function DocumentsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const filters = parseStudentDocumentFilters(await searchParams);
  const { documents, filterOptions, pagination, hasAnyDocuments } =
    await getDocumentsForCurrentStudent(filters);
  const items: DocumentCardItem[] = documents.map((item) => ({
    id: item.id,
    title: item.title,
    fileName: item.fileName,
    updateCount: item.updateCount,
    allowDownload: item.allowDownload,
    hasAnswer: Boolean(item.answerUrl && item.showAnswer),
    folderPath:
      [item.folder?.parent?.parent?.name, item.folder?.parent?.name, item.folder?.name]
        .filter(Boolean)
        .join(" / ") || "Thư mục gốc",
    classNames: item.classLinks.map((link) => link.class.name),
  }));
  return (
    <section className="space-y-8">
      <DocumentsHero />
      <StudentDocumentFilters filters={filters} options={filterOptions} total={pagination.total} />
      {items.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <DocumentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-navy-200 bg-white p-12 text-center text-sm text-navy-400">
          {hasAnyDocuments ? "Không có tài liệu phù hợp với bộ lọc." : "Chưa có tài liệu nào được giao."}
        </div>
      )}
      <StudentDocumentPagination filters={filters} page={pagination.page} totalPages={pagination.totalPages} />
    </section>
  );
}
