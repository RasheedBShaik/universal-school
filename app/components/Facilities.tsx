
const facilities = [
  {
    title: "Library & Reading",
    description:
      "A welcoming space to discover books, build reading habits, and explore new ideas.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    alt: "Bookshelves in a library",
    category: "READING & RESEARCH",
  },
  {
    title: "Computer Learning",
    description:
      "Developing digital skills and building confidence with technology.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Computers and digital learning",
    category: "DIGITAL EDUCATION",
  },
  {
    title: "Sports & Games",
    description:
      "Encouraging teamwork, physical fitness, discipline, and a love of play.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    alt: "Athletes running on a sports track",
    category: "FITNESS & TEAMWORK",
  },
  {
    title: "Creative Activities",
    description:
      "Giving students opportunities to express themselves and develop their creativity.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    alt: "Art supplies and creative materials",
    category: "ART & EXPRESSION",
  },
  {
    title: "Science Learning",
    description:
      "Inspiring curiosity through observation, exploration, and hands-on learning.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    alt: "Scientific equipment in a laboratory",
    category: "SCIENCE & DISCOVERY",
  },
  {
    title: "Outdoor Play",
    description:
      "Making room for active play, friendship, and learning beyond the classroom.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    alt: "Children enjoying outdoor activities",
    category: "PLAY & DEVELOPMENT",
  },
];

const Facilities = () => {
  return (
    <section
      id="facilities"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Our Facilities
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-gray-950 sm:text-5xl">
            Spaces where young minds thrive.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From reading and discovery to creativity and sports, explore
            the spaces that support a well-rounded learning experience.
          </p>
        </div>

        {/* Facilities gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <article
              key={facility.title}
              className="group overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000]"
            >
              <div className="relative h-56 overflow-hidden sm:h-60">
                <img
                  src={facility.image}
                  alt={facility.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-gray-900">
                  {facility.category}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-gray-950">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {facility.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-red-500 transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-12 text-center">
          <p className="text-sm leading-6 text-gray-600">
            Every space is an opportunity to learn, grow, and discover
            something new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
