
const reasons: string[] = [
  "A caring and supportive environment",
  "A strong academic foundation",
  "Learning through activities and exploration",
  "Encouragement for every student",
  "Communication, creativity and confidence",
  "Development beyond the classroom",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#181818] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Section introduction */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
            Why Choose Us
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            More than education. A foundation for life.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Every child deserves the opportunity to learn with confidence,
            discover their strengths, and develop the skills they need
            for the future.
          </p>

          <div className="mt-7 h-1 w-16 rounded-full bg-yellow-300" />
        </div>

        {/* Benefits list */}
        <div className="divide-y divide-white/15 border-y border-white/15">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="group flex items-center gap-5 py-5 transition-colors duration-200 hover:bg-white/4 sm:px-3"
            >
              <span className="shrink-0 font-mono text-sm font-semibold text-yellow-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="flex-1 font-medium leading-6 text-gray-100 sm:text-lg">
                {reason}
              </p>

              <span
                aria-hidden="true"
                className="text-xl text-yellow-300 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
