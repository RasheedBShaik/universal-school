
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const questions: FAQItem[] = [
  {
    question: "How does the school support each student's learning?",
    answer:
      "Our approach focuses on understanding students' learning needs, encouraging questions, and supporting their academic and personal progress.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "Students can explore opportunities such as sports, arts, cultural events, creative projects, and other activities offered by the school.",
  },
  {
    question: "How can I enquire about admissions?",
    answer:
      "Parents can contact the school by phone, WhatsApp, or the admission enquiry form to learn about available classes and the admission process.",
  },
  {
    question: "Which classes and curriculum does the school offer?",
    answer:
      "The school offers classes across its available grade levels. Parents can contact the school to confirm the classes offered, curriculum, and board affiliation.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const toggleQuestion = (index: number): void => {
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-500">
            Parent Information
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Frequently asked questions.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Find answers to common questions about learning, school
            activities, and admissions.
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {questions.map((item, index) => {
            const isOpen = open === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question} className="py-1">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-gray-950 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 sm:text-lg"
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-7 text-gray-600 sm:text-base"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
