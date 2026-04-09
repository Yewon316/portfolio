import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="fade-in"><About /></div>
        <div className="fade-in"><Projects /></div>
        <div className="fade-in"><Experience /></div>
        <div className="fade-in"><Research /></div>
        <div className="fade-in"><Skills /></div>
        <div className="fade-in"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
