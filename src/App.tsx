import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAFAFA]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#2563EB] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="gradient-border mx-auto max-w-5xl" />
        <Projects />
        <div className="gradient-border mx-auto max-w-5xl" />
        <About />
        <div className="gradient-border mx-auto max-w-5xl" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
