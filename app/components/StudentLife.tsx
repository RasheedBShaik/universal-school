
import {
  Palette,
  Trophy,
  Music,
  Trees,
  Bus,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Activity {
  icon: LucideIcon;
  title: string;
}

const activities: Activity[] = [
  { icon: Trophy, title: "Sports & Games" },
  { icon: Palette, title: "Art & Creativity" },
  { icon: Music, title: "Cultural Activities" },
  { icon: Trees, title: "Nature Activities" },
  { icon: Bus, title: "Educational Visits" },
  { icon: Users, title: "Clubs & Activities" },
];

const StudentLife = () => {
  return (
    <section
      id="student-life"
      className="bg-[#fff7ed] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Beyond the Classroom
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl">
            More than lessons. A place to discover.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Students explore their interests, build friendships, develop
            confidence and discover new talents through activities beyond
            everyday classroom learning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.title}
                className="group rounded-2xl border-2 border-black bg-white p-5 text-center shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] motion-reduce:transition-none"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-yellow-200 transition-colors duration-300 group-hover:bg-red-200">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 text-sm font-bold leading-5 text-gray-950">
                  {activity.title}
                </p>

                <span className="mx-auto mt-4 block h-1 w-8 rounded-full bg-red-400 transition-all duration-300 group-hover:w-12" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
