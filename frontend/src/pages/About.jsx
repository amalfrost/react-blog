import React from "react";
import Photo from "../assets/photo.jpg";
import Services from "../components/Servies";
import Experience from "../components/Experience";

function About() {
  return (
    <section className="text-white px-6 md:px-20 lg:px-32 py-16 flex flex-col gap-12 bg-[#1f1f1f]">
      {/* ---------- Intro Section ---------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 max-w-xl">
          <p className="text-[#ffb400] tracking-wide uppercase font-medium">
            Hi There 👋
          </p>

          <h1 className="text-4xl font-bold leading-tight">
            I’m <span className="text-[#ffb400]">Amal Raj</span>
          </h1>

          <p className="text-gray-300 leading-relaxed">
            I’m passionate about creating digital experiences that combine great
            design with seamless functionality. I love turning ideas into
            interactive, meaningful products that make an impact and constantly
            push myself to learn, adapt, and innovate.
          </p>

          <div className="flex gap-4 mt-2">
            <button className="bg-[#ffb400] text-black font-medium px-6 py-2 rounded-lg hover:bg-[#e6a100] transition-all duration-200 shadow-md">
              Blogs
            </button>
            <button className="bg-[#ffb400] text-black font-medium px-6 py-2 rounded-lg hover:bg-[#e6a100] transition-all duration-200 shadow-md">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-shrink-0">
          <img
            src={Photo}
            alt="Amal Raj"
            className="rounded-3xl w-64 h-64 object-cover shadow-lg border-2 border-[#ffb400] hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#ffb400] opacity-30" />

      {/* ---------- Services Section ---------- */}
      <Services />
      
      {/* ---------- Experience Section ---------- */}
      <Experience />
    </section>
  );
}

export default About;
