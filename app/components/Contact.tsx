import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import school from "../data/school";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#fff7ed] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-500">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Come see the school for yourself.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              A visit can tell you more than a brochure. Get in touch with the
              school team to ask questions or schedule a visit.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0" />

                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-gray-600">
                    {school.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0" />

                <div>
                  <p className="font-bold">Phone</p>

                  <a
                    href={`tel:${school.phone}`}
                    className="text-gray-600 hover:text-black"
                  >
                    {school.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0" />

                <div>
                  <p className="font-bold">Email</p>

                  <a
                    href={`mailto:${school.email}`}
                    className="text-gray-600 hover:text-black"
                  >
                    {school.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border-2 border-black bg-white p-5">
              <p className="font-bold">School Hours</p>
              <p className="mt-1 text-sm text-gray-600">
                {school.hours}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[6px_6px_0px_#000] sm:p-8">
            <h3 className="text-2xl font-black">
              Admission Enquiry
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Leave your details and the school team can get in touch.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Parent / Guardian Name"
                className="w-full rounded-xl border-2 border-black px-4 py-3 outline-none focus:bg-yellow-50"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border-2 border-black px-4 py-3 outline-none focus:bg-yellow-50"
              />

              <select
                className="w-full rounded-xl border-2 border-black px-4 py-3 outline-none focus:bg-yellow-50"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Class
                </option>

                <option>Classes 1–5</option>
                <option>Classes 6–8</option>
                <option>Classes 9–10</option>
              </select>

              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full resize-none rounded-xl border-2 border-black px-4 py-3 outline-none focus:bg-yellow-50"
              />

              <button
                type="button"
                className="w-full rounded-full bg-black px-6 py-3 font-bold text-white transition hover:bg-gray-800"
              >
                Send Enquiry
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              Demo form — no information is submitted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;