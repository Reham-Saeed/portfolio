import React from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div
        className={`relative z-10 container mx-auto px-4 md:px-6 text-center ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="block">Hello, I'm</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
            Reham Saeed
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6">
          <span>Front-End Developer</span>
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          I specialize in crafting clean, user-friendly web applications that
          provide smooth and engaging user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 text-white font-medium rounded-full transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
