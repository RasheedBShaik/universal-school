import {
  Heart,
  Lightbulb,
  Users,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Caring Environment",
    text: "A supportive atmosphere where every student feels valued and encouraged.",
  },
  {
    icon: Lightbulb,
    title: "Curious Minds",
    text: "Learning experiences that encourage students to ask questions and explore.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    text: "Teachers who understand that every child learns differently.",
  },
  {
    icon: Sparkles,
    title: "Holistic Growth",
    text: "Academic learning balanced with creativity, confidence and activities.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-500">
            About Us
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Learning that goes beyond the classroom.
          </h2>

          <p className="mt-5 text-gray-600 sm:text-lg">
            We believe education is about more than marks. Our approach
            encourages students to build strong academic foundations while
            developing confidence, creativity, communication and character.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border-2 border-black bg-white p-6 shadow-[5px_5px_0px_#000]"
              >
                <Icon size={28} />

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;