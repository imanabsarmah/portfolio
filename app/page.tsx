"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "AI Media Editing",
    "Video Editing",
    "Professional Resume Design",
    "Technical Assistance",
    "Software Troubleshooting",
    "Educational Systems",
    "Web Research",
    "Automation Workflows",
    "React & Frontend",
    "School Administration",
  ];

  const projects = [
    {
      title: "AI Media Studio",
      category: "Creative Services",
      description:
        "Professional AI-powered image enhancement, cinematic editing, restoration, and social-media-ready content production.",
    },
    {
      title: "Educational Workflow Systems",
      category: "Administration",
      description:
        "Digital notices, examination systems, scheduling workflows, and institutional communication management.",
    },
    {
      title: "Technical Support & Troubleshooting",
      category: "IT Support",
      description:
        "Software troubleshooting, device setup, workflow optimization, and technical assistance solutions.",
    },
    {
      title: "Modern Web & Branding",
      category: "Design",
      description:
        "Premium portfolio websites, posters, banners, resume systems, and digital identity design.",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-black dark:bg-black dark:text-white transition-colors duration-500">
        {/* BACKGROUND EFFECTS */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-neutral-300/40 dark:bg-neutral-700/20 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neutral-400/30 dark:bg-neutral-600/20 blur-3xl rounded-full"></div>
        </div>

        {/* FLOATING ACTIONS */}

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a
            href="https://wa.me/918723088121"
            target="_blank"
            className="px-6 py-4 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition duration-300 backdrop-blur-xl"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-6 py-4 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:scale-110 transition duration-300"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10">
          {/* NAVBAR */}

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="flex items-center justify-between backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/20 rounded-[2rem] px-8 py-5 shadow-xl">
              <div>
                <h1 className="text-xl font-black tracking-tight">
                  MANABJYOTI
                </h1>
              </div>

              <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                <a href="#projects" className="hover:opacity-60 transition">
                  Projects
                </a>
                <a href="#skills" className="hover:opacity-60 transition">
                  Skills
                </a>
                <a href="#contact" className="hover:opacity-60 transition">
                  Contact
                </a>
              </div>
            </div>
          </motion.nav>

          {/* HERO */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 backdrop-blur-xl bg-white/40 dark:bg-white/5 shadow-lg mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Available for freelance work</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-8">
                Digital
                <br />
                Creative &
                <br />
                Technical
                <br />
                Solutions
              </h1>

              <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10">
                Examination In-Charge, IT & Communication Coordinator, designer,
                editor, and digital solutions creator focused on modern
                education systems, automation, branding, and AI-powered media.
              </p>

              <div className="flex flex-wrap gap-5">
                <a
                  href="mailto:imanabsarmah@gmail.com"
                  className="px-8 py-5 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-medium shadow-2xl hover:scale-105 transition duration-300"
                >
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-5 rounded-2xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-xl hover:scale-105 transition duration-300"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://github.com/imanabsarmah"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href="https://instagram.com/imanabsarmah"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300"
                >
                  Instagram
                </a>

                <a
                  href="https://linkedin.com/in/imanabsarmah"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-neutral-400/20 dark:bg-neutral-700/20 blur-3xl rounded-full"></div>

              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src="/profile.jpg"
                alt="Profile"
                className="relative z-10 w-[380px] h-[500px] object-cover rounded-[3rem] border border-white/20 shadow-2xl"
              />
            </div>
          </motion.section>

          {/* STATS */}

          <section className="grid md:grid-cols-3 gap-6 mb-32">
            {[
              ["9+", "Years Experience"],
              ["50+", "Creative Projects"],
              ["100%", "Client Commitment"],
            ].map((item) => (
              <div
                key={item[1]}
                className="backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/20 rounded-[2rem] p-10 shadow-xl"
              >
                <h2 className="text-5xl font-black mb-3">{item[0]}</h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg">
                  {item[1]}
                </p>
              </div>
            ))}
          </section>

          {/* SKILLS */}

          <section id="skills" className="mb-32">
            <h2 className="text-5xl font-black tracking-tight mb-12">
              Skills & Expertise
            </h2>

            <div className="flex flex-wrap gap-5">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-7 py-5 rounded-2xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300 text-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}

          <section id="projects" className="mb-32">
            <h2 className="text-5xl font-black tracking-tight mb-12">
              Featured Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  whileHover={{ y: -10 }}
                  key={project.title}
                  className="border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-2xl"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-5">
                    {project.category}
                  </div>

                  <h3 className="text-4xl font-black tracking-tight mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}

          <section
            id="contact"
            className="rounded-[3rem] overflow-hidden border border-white/20 bg-black text-white dark:bg-white dark:text-black shadow-2xl"
          >
            <div className="p-12 md:p-20">
              <div className="max-w-4xl">
                <h2 className="text-6xl font-black tracking-tight leading-none mb-8">
                  Let’s Build
                  <br />
                  Something Great.
                </h2>

                <p className="text-xl opacity-80 leading-relaxed mb-10 max-w-2xl">
                  Available for freelance work, creative collaborations,
                  educational systems, technical assistance, AI media editing,
                  and modern digital solutions.
                </p>

                <div className="flex flex-wrap gap-5">
                  <a
                    href="mailto:imanabsarmah@gmail.com"
                    className="px-8 py-5 rounded-2xl bg-white text-black dark:bg-black dark:text-white font-medium hover:scale-105 transition duration-300"
                  >
                    Email Me
                  </a>

                  <a
                    href="https://github.com/imanabsarmah"
                    target="_blank"
                    className="px-8 py-5 rounded-2xl border border-white/20 hover:scale-105 transition duration-300"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
