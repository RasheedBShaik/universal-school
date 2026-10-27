
import {
  BookOpen,
  GraduationCap,
  School,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AcademicCard {
  icon: LucideIcon;
  title: string;
  classes: string;
  text: string;
  color: string;
  accent: string;
  number: string;
}

const academics: AcademicCard[] = [
  {
    icon: School,
    title: "Primary Foundation",
    classes: "Classes 1–5",
    text: "Building strong foundations in languages, mathematics, science, and everyday learning through engaging classroom experiences.",
    color: "bg-yellow-100",
    accent: "bg-yellow-400",
    number: "01",
  },
  {
    icon: BookOpen,
    title: "Middle School",
    classes: "Classes 6–8",
    text: "Encouraging deeper understanding, independent thinking, and practical learning as students explore new ideas.",
    color: "bg-blue-50",
    accent: "bg-blue-400",
    number: "02",
  },
  {
    icon: GraduationCap,
    title: "Secondary School",
    classes: "Classes 9–10",
    text: "Supporting academic growth, subject knowledge, and confidence as students prepare for examinations and future goals.",
    color: "bg-pink-50",
    accent: "bg-pink-400",
    number: "03",
  },
];

const Academics = () => {
  return (
    <section
      id="academics"
      className="bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Academics
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-gray-950 sm:text-5xl">
              A strong foundation for every stage.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Helping students grow through every stage of their
              educational journey with knowledge, curiosity, and confidence.
            </p>
          </div>

          <p className="max-w-xs text-sm leading-6 text-gray-500">
            From foundational skills to focused secondary learning,
            every stage supports the next.
          </p>
        </div>

        {/* Academic cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {academics.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 border-black ${item.color} p-6 shadow-[5px_5px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] sm:p-8`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black ${item.accent}`}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-black tracking-widest text-gray-400">
                    {item.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-8">
                  <span className="inline-flex rounded-full border border-black/15 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
                    {item.classes}
                  </span>

                  <h3 className="mt-4 text-2xl font-black leading-tight text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-700">
                    {item.text}
                  </p>
                </div>

                {/* Decorative footer */}
                <div className="mt-auto flex items-center justify-between pt-8">
                  <div
                    className={`h-1.5 w-12 rounded-full ${item.accent} transition-all duration-300 group-hover:w-20`}
                  />

                  <ArrowUpRight
                    size={21}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 rounded-2xl border-2 border-black bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <h3 className="text-xl font-black text-gray-950">
              Learning that grows with every student.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Building knowledge, encouraging independent thinking,
              and preparing students for the opportunities ahead.
            </p>
          </div>

          <div className="mt-5 flex shrink-0 items-center gap-2 sm:mt-0">
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-blue-400" />
            <div className="h-3 w-3 rounded-full bg-pink-400" />
            <span className="ml-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              Learn · Grow · Achieve
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
