import {
  BookOpen,
  GraduationCap,
  School,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AcademicCard {
  icon: LucideIcon;
  title: string;
  classes: string;
  text: string;
  color: string;
}

const academics: AcademicCard[] = [
  {
    icon: School,
    title: "Primary Foundation",
    classes: "Classes 1–5",
    text: "Building strong foundations in languages, mathematics, science and everyday learning.",
    color: "bg-yellow-200",
  },
  {
    icon: BookOpen,
    title: "Middle School",
    classes: "Classes 6–8",
    text: "Encouraging deeper understanding, independent thinking and practical learning.",
    color: "bg-blue-200",
  },
  {
    icon: GraduationCap,
    title: "Secondary School",
    classes: "Classes 9–10",
    text: "Preparing students with focused academic support and confidence for their next step.",
    color: "bg-pink-200",
  },
];

const Academics = () => {
  return (
    <section
      id="academics"
      className="bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            Academics
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            A strong foundation for every stage.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {academics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`rounded-3xl border-2 border-black ${item.color} p-7 shadow-[6px_6px_0px_#000]`}
              >
                <Icon size={34} />

                <p className="mt-8 text-sm font-bold uppercase">
                  {item.classes}
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-700">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;