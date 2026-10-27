
interface Approach {
  number: string;
  title: string;
  text: string;
}

const approaches: Approach[] = [
  {
    number: "01",
    title: "Learning with understanding",
    text: "Encouraging students to ask questions, think independently and build strong foundations in every subject.",
  },
  {
    number: "02",
    title: "Learning beyond textbooks",
    text: "Classroom projects, sports, arts and group activities help students develop creativity, teamwork and practical skills.",
  },
  {
    number: "03",
    title: "Growing with confidence",
    text: "A welcoming learning environment helps students develop confidence, responsibility and respect for others.",
  },
];

const LearningApproach = () => {
  return (
    <section className="bg-[#fff7ed] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-widest text-red-500">
          Our Approach
        </p>

        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
          Helping every student learn, grow and succeed.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-600 sm:text-lg">
          Education is about more than completing a syllabus. It is about
          building knowledge, developing skills and preparing students
          for the future.
        </p>

        <div className="mt-12 grid gap-8 border-t-2 border-black pt-8 md:grid-cols-3 md:gap-8">
          {approaches.map((item) => (
            <article key={item.number} className="group">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black tracking-tight text-red-400 transition-transform duration-300 group-hover:translate-x-1">
                  {item.number}
                </span>

                <div className="h-px flex-1 bg-gray-300" />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningApproach;
