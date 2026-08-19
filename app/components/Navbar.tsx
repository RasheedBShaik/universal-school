"use client"
import { useState } from "react";
import {
  Phone,
  Calendar,
  GraduationCap,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import school from "../data/school";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Student Life", href: "#student-life" },
  { name: "Admissions", href: "#admissions" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const whatsappUrl =
    `https://wa.me/${school.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hi, I'd like to enquire about admissions."
    )}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <GraduationCap
              size={30}
              strokeWidth={1.8}
              className="shrink-0 sm:h-8 sm:w-8"
            />

            <div className="leading-tight">
              <div className="text-sm font-bold sm:text-base md:text-lg">
                {school.name}
              </div>

              <div className="text-[10px] text-gray-600 sm:text-xs">
                {school.classes} · India
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium transition-colors hover:text-red-500"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 xl:flex">
            <a
              href={`tel:${school.phone}`}
              className="flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-sm font-medium"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-green-600 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            <a
              href="#visit"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-red-600 text-red-700 px-4 py-2 text-sm font-semibold transition hover:bg-red-50"
            >
              <Calendar size={16} />
              <span>Book a Visit</span>
            </a>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${school.phone}`}
              aria-label="Call school"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
            >
              <Phone size={17} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp school"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700"
            >
              <MessageCircle size={18} />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-black/10 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-red-50"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#visit"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-red-300 px-4 py-3 text-sm font-semibold"
              >
                <Calendar size={17} />
                Book a Visit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;