import { GraduationCap } from "lucide-react";
import school from "../data/school";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <GraduationCap size={30} />

              <div>
                <p className="font-bold">{school.name}</p>

                <p className="text-xs text-gray-400">
                  {school.classes}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              {school.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-bold">Explore</p>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a
                href="#about"
                className="block hover:text-white"
              >
                About
              </a>

              <a
                href="#academics"
                className="block hover:text-white"
              >
                Academics
              </a>

              <a
                href="#student-life"
                className="block hover:text-white"
              >
                Student Life
              </a>

              <a
                href="#admissions"
                className="block hover:text-white"
              >
                Admissions
              </a>

              <a
                href="#gallery"
                className="block hover:text-white"
              >
                Gallery
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold">Contact</p>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>{school.address}</p>

              <a
                href={`tel:${school.phone}`}
                className="block hover:text-white"
              >
                {school.displayPhone}
              </a>

              <a
                href={`mailto:${school.email}`}
                className="block hover:text-white"
              >
                {school.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {school.name}
            </p>

            <p>
              Demo website — sample content and imagery.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;