export interface SchoolConfig {
  name: string;
  shortName: string;
  location: string;
  address: string;
  classes: string;
  academicYear: string;
  tagline: string;
  description: string;
  phone: string;
  displayPhone: string;
  email: string;
  whatsapp: string;
  hours: string;
}

const school: SchoolConfig = {
  name: "Little Learners School",
  shortName: "Little Learners",
  location: "Andhra Pradesh, India",
  address: "Andhra Pradesh, India",

  classes: "Classes 1–10",
  academicYear: "2026–27",

  tagline: "Growing Minds. Building Futures.",

  description:
    "A nurturing learning environment where students learn, explore, create and grow with confidence.",

  phone: "+919876543210",
  displayPhone: "+91 98765 43210",

  email: "hello@example.com",

  whatsapp: "919876543210",

  hours: "Monday – Saturday · 9:00 AM – 4:00 PM",
};

export default school;