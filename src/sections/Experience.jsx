const experiences = [
  {
    period: "Jan 2023 — Present",
    role: "Front-End Developer (React & Next.js)",
    company: "Infostrategic (Virtual Trust) — Abu Dhabi",
    description:
      "Built and maintained scalable React and Next.js apps for UAE government and enterprise clients, improving load performance by up to 35% via SSR/ISR and code splitting. Led full bilingual (Arabic/English) coverage with correct RTL/LTR across complex approvals. Shipped sjd.ae and fatwauae.gov.ae; adopted Form.io LCP patterns (~40% less repetitive UI code); customized advanced Form.io components for approvals and backend-driven config. Raised Lighthouse from 70–80 to 90+ on multiple pages; cut frontend integration bugs by 20–30% with defensive programming and tight API alignment with NestJS/Spring Boot. Contributed to AI-powered features via LLM APIs. Translated Figma to responsive, accessible (WCAG) UIs; participated in full Agile cadence.",
    technologies: [
      "React",
      "Next.js (App Router, SSR, ISR)",
      "TypeScript",
      "Form.io",
      "Redux",
      "Zustand",
      "Zod",
      "next-intl",
      "NestJS",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Tailwind",
      "CI/CD",
      "OpenAI / Anthropic APIs",
    ],
    current: true,
  },
  {
    period: "2021 — 2023",
    role: "Freelance Front-End Developer",
    company: "Remote",
    description:
      "Delivered custom React and Next.js apps end-to-end—from requirements to deployment—for small businesses and individuals. Built responsive landing pages and dashboards, integrated REST APIs and third-party services, and applied cross-browser, performance, and SEO best practices.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "Bootstrap",
      "SEO Optimization",
      "Material UI",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of professional growth building government-grade and
            client-facing products, with measurable impact on performance and
            delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
