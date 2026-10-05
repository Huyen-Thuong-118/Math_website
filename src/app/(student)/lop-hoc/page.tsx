import {
  ClassCard,
  ClassHero,
  ClassPrincipleBanner,
  LockedClassCard,
} from "@/features/classes/components/ClassCard";
import { getClassesForCurrentStudent } from "@/features/classes/queries";
import { formatClassSchedule } from "@/features/classes/schedule";

export const dynamic = "force-dynamic";

export default async function ClassListPage() {
  const classes = await getClassesForCurrentStudent();
  return (
    <section className="space-y-8">
      <ClassHero />
      {classes.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-navy-200 bg-white p-12 text-center text-sm text-navy-400">
          Bạn chưa được xếp vào lớp nào.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {classes.map((item) => (
            <ClassCard
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                code: item.code,
                level: item.level,
                archived: item.status === "ARCHIVED",
                schedule: formatClassSchedule(item.scheduleSlots, item.schedule),
                description: item.description,
                students: item._count.enrollments,
                documents: item._count.documentLinks,
                questions: item._count.questionLinks,
                exams: item._count.examLinks,
              }}
            />
          ))}
          <LockedClassCard />
        </div>
      )}
      <ClassPrincipleBanner />
    </section>
  );
}
