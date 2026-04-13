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
    { id: "hero", title: "Haydara Ahmad | Frontend Engineer" },
    { id: "about", title: "About | Haydara Ahmad" },
    { id: "projects", title: "Projects | Haydara Ahmad" },
    { id: "experience", title: "Experience | Haydara Ahmad" },
    { id: "impact", title: "Engineering Impact | Haydara Ahmad" },
    { id: "contactMe", title: "Contact | Haydara Ahmad" },
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
