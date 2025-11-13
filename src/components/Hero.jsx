import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="text-center my-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        PRASANTH SARAVANAN
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        Full Stack Java Developer — Java, Spring Boot, React
      </p>
      <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        I build scalable, maintainable web applications and APIs. I focus on
        performance, clean code, and delivering value through automation and
        collaboration.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="/Prasanth_Saravanan.pdf"
          download
          className="btn-primary inline-flex items-center gap-2"
        >
          <FiDownload /> Download Resume
        </a>
        <a
          href="#contact"
          className="btn-outline inline-flex items-center gap-2"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
