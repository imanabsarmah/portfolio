export default function Portfolio() {
  const projects = [
    {
      title: "School Administration Systems",
      description:
        "Designed digital workflows, notices, examination systems, sports schedules, and institutional communication systems for a residential school environment.",
    },
    {
      title: "AI Photo Editing & Restoration",
      description:
        "Created cinematic edits, passport photo conversions, image remastering, background cleanup, and AI-enhanced photo restoration services.",
    },
    {
      title: "School Branding & Media Design",
      description:
        "Developed banners, posters, certificates, calendars, circulars, and event branding materials for educational institutions.",
    },
    {
      title: "Web Apps & Digital Tools",
      description:
        "Built lightweight web applications, forms, automation systems, and interactive educational tools.",
    },
  ];

  const skills = [
    "School Administration",
    "Document Design",
    "AI Image Editing",
    "Video Editing",
    "Professional Resume Creation",
    "Web Research",
    "Technical Assistance",
    "Software Troubleshooting",
    "Google Forms & Automation",
    "HTML/CSS",
    "React",
    "Event Management",
    "Communication Design",
    "Educational Workflow Systems",
  ];

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 md:px-16">
      <div className="max-w-6xl mx-auto">
        <section className="mb-20">
          <div className="inline-block border border-black rounded-full px-4 py-1 text-sm mb-6">
            Guwahati, Assam
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Manabjyoti Sarmah
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 mb-8">
            Examination In-Charge, IT & Communication Coordinator, designer, and
            digital solutions creator focused on education systems, branding,
            automation, and AI-powered creative services.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              className="px-6 py-3 rounded-2xl border border-black hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="mailto:yourmail@example.com"
              className="px-6 py-3 rounded-2xl bg-black text-white hover:opacity-80 transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">About</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-3xl p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-neutral-700">
                I work at Kaziranga English Academy as the Examination In-Charge
                while also managing IT systems and institutional communication.
                My work combines administration, technology, design, and digital
                workflow management.
              </p>
            </div>

            <div className="border rounded-3xl p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-neutral-700">
                I create modern digital solutions for schools, educational
                institutions, and small organizations — from notices and event
                systems to branding, automation, and AI-enhanced media.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 border rounded-2xl text-sm hover:bg-black hover:text-white transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Projects & Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="text-neutral-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border p-6 text-lg hover:bg-black hover:text-white transition"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="border rounded-3xl p-10 bg-black text-white">
          <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>

          <p className="text-lg text-neutral-300 mb-6 max-w-2xl">
            Available for educational digital services, creative design,
            automation systems, and freelance projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:imanabjyoti@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-2xl"
            >
              Email
            </a>

            <a
              href="https://github.com/imanabsarmah"
              className="px-6 py-3 border border-white rounded-2xl"
            >
              GitHub Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
