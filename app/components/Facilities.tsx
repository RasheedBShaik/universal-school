const facilities: string[] = [
  "Library & Reading",
  "Computer Learning",
  "Sports & Games",
  "Creative Activities",
  "Science Learning",
  "Outdoor Play",
];

const Facilities = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-500">
              Facilities
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Spaces that support learning and play.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              A balanced school experience needs spaces where students can
              learn, experiment, play and express themselves.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {facilities.map((facility) => (
              <div
                key={facility}
                className="rounded-2xl border-2 border-black bg-yellow-100 p-5 font-bold shadow-[4px_4px_0px_#000]"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Sample facility content for demonstration purposes.
        </p>
      </div>
    </section>
  );
};

export default Facilities;