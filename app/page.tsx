"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "AI Media Editing",
      description:
        "Professional image enhancement, restoration, cinematic editing, and AI-based media services.",
    },
    {
      title: "Educational Systems",
      description:
        "School notices, examination systems, schedules, and digital workflow solutions.",
    },
    {
      title: "Technical Assistance",
      description:
        "Software troubleshooting, IT support, setup assistance, and digital solutions.",
    },
    {
      title: "Web & Design",
      description:
        "Portfolio websites, posters, resumes, branding materials, and creative digital design.",
    },
  ];

  const skills = [
    "School/Office Administration",
    "Document Design",
    "AI Image Editing",
    "Video Editing",
    "Professional Resume Creation",
    "Web Research",
    "Technical Assistance",
    "Software Troubleshooting",
    "React",
    "Communication Design",
  ];

  const services = [
    "School Document & Notice Design",
    "Professional Resume Design",
    "Video Editing & Reels Creation",
    "Web Research & Data Collection",
    "Technical Assistance & IT Support",
    "AI Photo Enhancement",
    "Poster & Banner Design",
    "School Automation Systems",
    "Website & Web App Creation",
    "Digital Event Management",
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-white via-neutral-100 to-neutral-200 dark:from-black dark:via-neutral-950 dark:to-neutral-900 text-black dark:text-white transition-colors duration-500 px-6 py-10 md:px-16 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-300 dark:bg-neutral-800 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-400 dark:bg-neutral-700 rounded-full blur-3xl opacity-20"></div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918723088121"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition duration-300"
        >
          WhatsApp
        </a>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HERO SECTION */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-28"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="border border-black dark:border-white rounded-full px-5 py-2 text-sm backdrop-blur-xl bg-white/30 dark:bg-white/5">
                Guwahati, Assam
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="border rounded-full px-5 py-2 backdrop-blur-xl bg-white/30 dark:bg-white/5 hover:scale-105 transition"
              >
                {darkMode ? "Light" : "Dark"}
              </button>
            </div>

            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-neutral-800 shadow-2xl mb-10 hover:scale-105 transition duration-500"
            />

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight mb-6">
              Manabjyoti Sarmah
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 dark:text-neutral-300 mb-10">
              Examination In-Charge, IT & Communication Coordinator, designer,
              editor, and digital solutions creator.
            </p>

            {/* MAIN BUTTONS */}

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="mailto:imanabsarmah@gmail.com"
                className="px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black shadow-xl hover:scale-105 transition duration-300"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/5 shadow-lg hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/imanabsarmah"
                target="_blank"
                className="border border-white/20 backdrop-blur-xl bg-white/30 dark:bg-white/5 rounded-2xl px-6 py-4 shadow-lg hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                GitHub
              </a>

              <a
                href="https://instagram.com/imanabsarmah"
                target="_blank"
                className="border border-white/20 backdrop-blur-xl bg-white/30 dark:bg-white/5 rounded-2xl px-6 py-4 shadow-lg hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com/in/imanabsarmah"
                target="_blank"
                className="border border-white/20 backdrop-blur-xl bg-white/30 dark:bg-white/5 rounded-2xl px-6 py-4 shadow-lg hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.section>

          {/* SKILLS */}

          <section className="mb-28">
            <h2 className="text-4xl font-bold tracking-tight mb-10">Skills</h2>

            <div className="flex flex-wrap gap-5">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-6 py-4 border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-md hover:scale-105 transition duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}

          <section className="mb-28">
            <h2 className="text-4xl font-bold tracking-tight mb-10">
              Projects & Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] p-10 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-500"
                >
                  <h3 className="text-3xl font-bold tracking-tight mb-5">
                    {project.title}
                  </h3>

                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}

          <section className="mb-28">
            <h2 className="text-4xl font-bold tracking-tight mb-10">
              Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service}
                  className="border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500"
                >
                  <p className="text-lg font-medium">{service}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}

          <section className="border border-white/20 bg-black text-white dark:bg-white dark:text-black rounded-[2rem] p-12 shadow-2xl">
            <h2 className="text-4xl font-black tracking-tight mb-5">
              Let’s Work Together
            </h2>

            <p className="text-lg opacity-80 max-w-2xl mb-8">
              Available for educational digital services, creative design,
              automation systems, technical assistance, and freelance projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:imanabsarmah@gmail.com"
                className="px-8 py-4 rounded-2xl bg-white text-black dark:bg-black dark:text-white font-medium hover:scale-105 transition duration-300"
              >
                Email Me
              </a>

              <a
                href="https://github.com/imanabsarmah"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:scale-105 transition duration-300"
              >
                GitHub Profile
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
