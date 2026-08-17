interface Approach {
  number: string;
  title: string;
  text: string;
}

const approaches: Approach[] = [
  {
    number: "01",
    title: "Teaching that listens",
    text: "Teachers encourage questions, participation and individual progress.",
  },
  {
    number: "02",
    title: "Activities that open up",
    text: "Art, sports, projects and cultural activities give students opportunities to discover their interests.",
  },
  {
    number: "03",
    title: "An environment of calm",
    text: "A supportive environment helps students feel comfortable, focused and ready to learn.",
  },
];

const LearningApproach = () => {
  return (
    <section className="bg-[#fff7ed] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-widest text-red-500">
          Our Approach
        </p>

        <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">
          Three simple ideas behind everyday learning.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {approaches.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border-2 border-black bg-white p-7 shadow-[5px_5px_0px_#000]"
            >
              <div className="text-4xl font-black text-red-400">
                {item.number}
              </div>

              <h3 className="mt-8 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningApproach;