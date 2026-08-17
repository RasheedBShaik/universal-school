"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const questions: FAQItem[] = [
  {
    question: "Will my child receive individual attention?",
    answer:
      "We aim to create supportive classrooms where teachers understand students' learning needs and encourage their progress.",
  },
  {
    question: "What activities are available?",
    answer:
      "Students can participate in sports, arts, cultural activities, projects and other co-curricular experiences.",
  },
  {
    question: "How can I enquire about admission?",
    answer:
      "Parents can contact the school by phone, WhatsApp or through the admission enquiry section on the website.",
  },
  {
    question: "Which classes are offered?",
    answer:
      "This demo represents a school offering Classes 1 through 10. The actual class structure can be customized for each school.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const toggleQuestion = (index: number): void => {
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            For Parents
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Questions parents often ask.
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border-2 border-black bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                  aria-expanded={isOpen}
                >
                  {item.question}

                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t-2 border-black px-5 py-5 text-sm leading-6 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;