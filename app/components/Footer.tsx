
import { GraduationCap } from "lucide-react";
import school from "../data/school";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label={`${school.name} home`}
            >
              <GraduationCap
                size={32}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <div className="min-w-0">
                <p className="wrap-break-word font-bold">
                  {school.name}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {school.classes}
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              {school.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-bold">Explore</p>

            <nav
              aria-label="Footer navigation"
              className="mt-4 space-y-3 text-sm text-gray-400"
            >
              <a
                href="#about"
                className="block transition-colors hover:text-white"
              >
                About Us
              </a>

              <a
                href="#academics"
                className="block transition-colors hover:text-white"
              >
                Academics
              </a>

              <a
                href="#student-life"
                className="block transition-colors hover:text-white"
              >
                Student Life
              </a>

              <a
                href="#facilities"
                className="block transition-colors hover:text-white"
              >
                Facilities
              </a>

              <a
                href="#gallery"
                className="block transition-colors hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#admissions"
                className="block transition-colors hover:text-white"
              >
                Admissions
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold">Get in Touch</p>

            <div className="mt-4 space-y-4 text-sm leading-6 text-gray-400">
              <p className="wrap-break-word">
                {school.address}
              </p>

              <a
                href={`tel:${school.phone}`}
                className="block wrap-break-word transition-colors hover:text-white"
              >
                {school.displayPhone}
              </a>

              <a
                href={`mailto:${school.email}`}
                className="block wrap-break-word transition-colors hover:text-white"
              >
                {school.email}
              </a>

              <a
                href="#contact"
                className="inline-block font-semibold text-yellow-300 transition-colors hover:text-yellow-200"
              >
                Contact the School →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {school.name}.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="transition-colors hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
