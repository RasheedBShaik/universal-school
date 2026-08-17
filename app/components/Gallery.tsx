interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    alt: "Students in classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    alt: "Students learning",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Students studying",
  },
  {
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&w=900&q=80",
    alt: "School activity",
  },
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=900&q=80",
    alt: "Students reading",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    alt: "Classroom activity",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            Gallery
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            A look inside school life.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-2xl border-2 border-black ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full min-h-[180px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          Sample imagery used for demonstration purposes.
        </p>
      </div>
    </section>
  );
};

export default Gallery;