import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";
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
      className="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          id="visit"
          className="overflow-hidden rounded-4xl border-2 border-black bg-yellow-200 p-7 shadow-[8px_8px_0px_#000] sm:p-10 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">
                Admissions
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Admissions Open for {school.academicYear}
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-700">
                Take the first step toward discovering a supportive learning
                environment for your child.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white"
                >
                  Start Admission Enquiry
                  <ArrowRight size={18} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-black bg-white px-6 py-3 text-center font-bold"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-center gap-4 rounded-2xl border-2 border-black bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle
                      size={18}
                      className="shrink-0 text-green-600"
                    />
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;