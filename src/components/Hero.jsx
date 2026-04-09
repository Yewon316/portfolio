import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="hero-mesh min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-sora text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm Yewon Choi{" "}
          </h1>
          <p className="text-lg md:text-xl text-accent font-medium mb-6">
            Web Developer &amp; Designer | Data Visualization | Researcher 
          </p>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            I'm a Sophomore at Purdue University double-majoring in Web Programming
            &amp; Design and Data Visualization, with a minor in Economics and a
            Certificate in Entrepreneurship &amp; Innovation. I love building
            products that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile photo */}
        {!imgError && (
          <div className="flex-shrink-0">
            <img
              src="/images/profile.jpg"
              alt="Yewon Choi"
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
        )}
      </div>
    </section>
  );
}
