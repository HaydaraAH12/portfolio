import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { EngineeringImpact } from "./sections/EngineeringImpact";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";

function App() {
  useDynamicTitle([
    { id: "hero", title: "Haydara Ghassan Ahmad | Senior Front-End Developer" },
    { id: "about", title: "About | Haydara Ghassan Ahmad" },
    { id: "projects", title: "Projects | Haydara Ghassan Ahmad" },
    { id: "experience", title: "Experience | Haydara Ghassan Ahmad" },
    { id: "impact", title: "Engineering Impact | Haydara Ghassan Ahmad" },
    { id: "contactMe", title: "Contact | Haydara Ghassan Ahmad" },
  ]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <EngineeringImpact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
