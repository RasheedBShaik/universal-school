import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import school from "../data/school";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fff7ed] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black bg-white px-4 py-2 text-xs font-semibold shadow-[3px_3px_0px_#000]">
            <CalendarDays size={15} />
            Admissions Open {school.academicYear}
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {school.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
            {school.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <div className="rounded-full bg-yellow-200 px-4 py-2">
              {school.classes}
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <MapPin size={15} />
              {school.location}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Admission Enquiry
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 font-semibold transition hover:bg-gray-100"
            >
              Explore Our School
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[8px_8px_0px_#000]">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning in a classroom"
              className="h-[360px] w-full object-cover sm:h-[450px]"
            />
          </div>

          <div className="absolute -bottom-5 left-3 rounded-2xl border-2 border-black bg-yellow-200 px-5 py-4 font-bold shadow-[5px_5px_0px_#000] sm:left-5">
            Learning with confidence.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;