
import { ArrowRight, CheckCircle } from "lucide-react";
import school from "../data/school";

interface AdmissionStep {
  title: string;
}

const steps: AdmissionStep[] = [
  { title: "Send an admission enquiry" },
  { title: "Schedule a school visit" },
  { title: "Meet the school team" },
  { title: "Complete the application process" },
];

const Admissions = () => {
  const whatsappUrl =
    `https://wa.me/${school.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hi, I'd like to enquire about admissions."
    )}`;

  return (
    <section
      id="admissions"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          id="visit"
          className="overflow-hidden rounded-3xl border border-amber-200 bg-[#FEF3C7] p-6 shadow-sm sm:p-10 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Admission information */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                Admissions
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Admissions Open for {school.academicYear}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
                Give your child the opportunity to learn, grow, and build
                a strong foundation for the future.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950"
                >
                  Admission Enquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-950 transition-colors duration-200 hover:border-gray-950 focus-visible:outline-2 focus-visible:outline-offset-4 hover:bg-green-100 focus-visible:outline-gray-950"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Admission process */}
            <div>
              <h3 className="mb-5 text-lg font-bold text-gray-950">
                How to get started
              </h3>

              <div className="divide-y divide-amber-200 rounded-2xl border border-amber-200 bg-white px-5">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-center gap-4 py-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-gray-950">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-medium leading-6 text-gray-800">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Our school team can guide you through the next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
