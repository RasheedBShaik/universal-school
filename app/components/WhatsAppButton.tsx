import { MessageCircle } from "lucide-react";
import school from "../data/school";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi, I'd like to enquire about admissions."
  );

  const whatsappUrl =
    `https://wa.me/${school.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600 sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;