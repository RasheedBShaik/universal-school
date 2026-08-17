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
      className="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            Student Life
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Learning happens everywhere.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            From sports and creativity to cultural events and outdoor
            activities, students get opportunities to discover what they enjoy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="rounded-2xl border-2 border-black bg-white p-5 text-center shadow-[4px_4px_0px_#000]"
              >
                <Icon className="mx-auto" size={30} />

                <p className="mt-4 text-sm font-bold">
                  {activity.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;