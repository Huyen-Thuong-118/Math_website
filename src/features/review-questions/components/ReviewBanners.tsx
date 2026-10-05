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
