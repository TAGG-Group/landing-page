import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Values } from "./components/Values";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Values />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

