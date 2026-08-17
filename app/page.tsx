import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import StudentLife from "./components/StudentLife";
import WhyChooseUs from "./components/WhyChooseUs";
import Facilities from "./components/Facilities";
import LearningApproach from "./components/LearningApproach";
import Admissions from "./components/Admissions";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
     <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <StudentLife />
        <WhyChooseUs />
        <Facilities />
        <LearningApproach />
        <Admissions />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
