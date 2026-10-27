
interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    
    src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1248&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Students learning together in a classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1709290749293-c6152a187b14?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Teacher supporting students in class",
  },
  {
    src: "https://images.unsplash.com/photo-1692269725827-699e04a11cdf?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Students engaged in classroom learning",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "School learning environment",
  },
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=900&q=80",
    alt: "Students reading and studying",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#f5f5f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-500">
            School Life
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Everyday moments. Lasting memories.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-600">
            A glimpse into the learning, friendships, and experiences
            that make school life meaningful.
          </p>
        </div>

        {/* Image gallery */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl bg-gray-200 ${
                index === 0
                  ? "col-span-2 aspect-2/1 md:col-span-1 md:row-span-2 md:aspect-auto"
                  : "aspect-4/3"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  index === 0 ? "md:absolute md:inset-0" : ""
                }`}
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
