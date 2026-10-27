import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import school from "../data/school";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fff7ed] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="hero-glow-secondary pointer-events-none absolute -bottom-48 -left-40 -z-10 h-87.5 w-87.5 rounded-full bg-red-200/30 blur-3xl sm:h-112.5 sm:w-112.5"
      />

      {/* Animated decorative SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 500"
        fill="none"
        className="hero-svg pointer-events-none absolute -right-22.5 -top-7.5 -z-10 w-105 sm:-right-12.5 sm:top-0 sm:w-145"
      >
        <circle
          className="svg-ring svg-ring-one"
          cx="320"
          cy="245"
          r="155"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeDasharray="975"
          strokeDashoffset="975"
          opacity="0.7"
        />

        <circle
          className="svg-ring svg-ring-two"
          cx="320"
          cy="245"
          r="205"
          stroke="#FCA5A5"
          strokeWidth="1.5"
          strokeDasharray="1290"
          strokeDashoffset="1290"
          opacity="0.7"
        />

        <path
          className="svg-line"
          d="M40 320 C140 180 220 410 340 270 S490 150 560 220"
          stroke="#F87171"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="700"
          strokeDashoffset="700"
        />

        <path
          className="svg-line svg-line-two"
          d="M110 100 C200 40 260 140 360 100 S470 60 520 110"
          stroke="#EAB308"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="500"
          strokeDashoffset="500"
        />

        <circle
          className="svg-spark"
          cx="475"
          cy="155"
          r="5"
          fill="#F87171"
        />

        <circle
          className="svg-spark svg-spark-two"
          cx="125"
          cy="335"
          r="4"
          fill="#EAB308"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Hero content */}
        <div>
          <div className="hero-item hero-delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-black bg-white px-4 py-2 text-xs font-semibold shadow-[3px_3px_0px_#000]">
            <CalendarDays size={15} />
            Admissions & Enquiries
          </div>

          <h1 className="hero-item hero-delay-2 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {school.tagline}
          </h1>

          <p className="hero-item hero-delay-3 mt-6 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
            {school.description}
          </p>

          <div className="hero-item hero-delay-4 mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <div className="rounded-full bg-yellow-200 px-4 py-2">
              {school.classes}
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <MapPin size={15} />
              {school.location}
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="hero-item hero-delay-5 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Enquire About Admissions

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 font-semibold transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Discover Our School
            </a>
          </div>
        </div>

        {/* School building image */}
        <div className="hero-image relative">
          <div className="overflow-hidden rounded-4xl border-2 border-black bg-white shadow-[8px_8px_0px_#000]">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
              alt="School campus building"
              fetchPriority="high"
              className="hero-photo h-90 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-112.5"
            />
          </div>

          <div className="hero-label absolute -bottom-5 left-3 rounded-2xl border-2 border-black bg-yellow-200 px-5 py-4 font-bold shadow-[5px_5px_0px_#000] sm:left-5">
            A foundation for lifelong learning.
          </div>
        </div>
      </div>

      <style>{`
        /* Text entrance */
        .hero-item {
          opacity: 0;
          animation: heroEnter 550ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-delay-1 { animation-delay: 0ms; }
        .hero-delay-2 { animation-delay: 80ms; }
        .hero-delay-3 { animation-delay: 160ms; }
        .hero-delay-4 { animation-delay: 240ms; }
        .hero-delay-5 { animation-delay: 320ms; }

        /* Image entrance */
        .hero-image {
          opacity: 0;
          animation: imageReveal 850ms cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards;
        }

        .hero-photo {
          animation: imageSettle 1100ms cubic-bezier(0.16, 1, 0.36, 1) 150ms both;
        }

        /* Floating label */
        .hero-label {
          opacity: 0;
          animation: heroEnter 500ms ease-out 650ms forwards;
        }

        /* Background glow */
        .hero-glow-secondary {
          opacity: 0;
          animation: glowReveal 1400ms ease-out 300ms forwards;
        }

        /*
         * SVG visibility:
         * Mobile and tablet: subtle background.
         * Desktop: original visibility.
         */
        .hero-svg {
          --svg-opacity: 0.25;
          opacity: 0;
          animation: svgReveal 700ms ease-out 150ms forwards;
        }

        .hero-svg circle,
        .hero-svg path {
          opacity: var(--svg-opacity);
        }

        @media (min-width: 1024px) {
          .hero-svg {
            --svg-opacity: 1;
          }
        }

        /* SVG drawing animation */
        .svg-ring {
          animation: drawRing 1800ms cubic-bezier(0.22, 1, 0.36, 1) 250ms forwards;
        }

        .svg-ring-two {
          animation-delay: 450ms;
        }

        .svg-line {
          animation: drawLine 1600ms cubic-bezier(0.22, 1, 0.36, 1) 450ms forwards;
        }

        .svg-line-two {
          animation-delay: 650ms;
        }

        .svg-spark {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: sparkAppear 500ms ease-out 1200ms forwards;
        }

        .svg-spark-two {
          animation-delay: 1500ms;
        }

        /* Keyframes */
        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageSettle {
          from {
            transform: scale(0.96);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes glowReveal {
          to {
            opacity: 1;
          }
        }

        @keyframes svgReveal {
          to {
            opacity: 1;
          }
        }

        @keyframes drawRing {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes sparkAppear {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          to {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        /* Accessibility: respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .hero-item,
          .hero-image,
          .hero-photo,
          .hero-label,
          .hero-glow-secondary,
          .hero-svg,
          .svg-ring,
          .svg-line,
          .svg-spark {
            opacity: 1;
            animation: none;
            transform: none;
            stroke-dashoffset: 0;
          }

          .hero-svg circle,
          .hero-svg path {
            opacity: var(--svg-opacity);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
