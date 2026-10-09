export function ReviewHero({ totalQuestions }: { totalQuestions?: number }) {
  return (
    <header className="space-y-1">
      <h1>Câu hỏi ôn tập</h1>
      {totalQuestions ? <p className="text-navy-400">Bạn được giao {totalQuestions} câu.</p> : null}
    </header>
  );
}
