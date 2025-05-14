
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Education from "@/components/Home/Education";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Experience from "@/components/Home/Experience";
import Contact from "@/components/Home/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Opika Dash - Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
