"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 px-6 py-10 md:px-16">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918723088121"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:scale-110 transition z-50"
        >
          WhatsApp
        </a>

        <div className="max-w-6xl mx-auto">
          {/* HERO SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="border border-black dark:border-white rounded-full px-4 py-1 text-sm">
                Guwahati, Assam
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="border rounded-full px-4 py-2"
              >
                {darkMode ? "Light" : "Dark"}
              </button>
            </div>

            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border mb-8"
            />

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Manabjyoti Sarmah
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              Examination In-Charge, IT & Communication Coordinator, designer,
              editor, and digital solutions creator.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:imanabsarmah@gmail.com"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-2xl"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border rounded-2xl"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/imanabsarmah"
                target="_blank"
                className="border rounded-2xl px-5 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href="https://instagram.com/imanabsarmah"
                target="_blank"
                className="border rounded-2xl px-5 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com/in/imanabsarmah"
                target="_blank"
                className="border rounded-2xl px-5 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.section>

          {/* SKILLS */}

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Skills</h2>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div key={skill} className="px-5 py-3 border rounded-2xl">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Projects & Services</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border rounded-3xl p-8 hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
