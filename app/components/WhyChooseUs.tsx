const reasons: string[] = [
  "Caring learning environment",
  "Strong academic foundation",
  "Activity-based learning",
  "Individual encouragement",
  "Communication and confidence",
  "Overall child development",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            A school experience built around the child.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-300">
            We aim to create an environment where students feel supported,
            challenged and confident enough to become active learners.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="rounded-2xl border border-white/20 bg-white/10 p-5"
            >
              <span className="text-sm text-yellow-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-2 font-semibold">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;