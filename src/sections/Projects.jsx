import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Sharjah Judicial Digital Platform",
    description:
      "An official government digital platform for the Sharjah Judicial Department, unifying court, prosecution, and legal services into a fully integrated online system. The platform enables citizens, residents, and legal professionals to access judicial services, submit applications, and track cases efficiently through a secure digital environment.",
    image: "/projects/sjd.png",
    tags: [
      "Government",
      "Digital Transformation",
      "Judicial Services",
      "UAE",
      "Next.js",
      "Bootstrap",
      "Performance Optimization",
      "Material-Ui",
      "Redux",
      "zod",
    ],
    link: "https://sjd.ae",
    // github: "#",
  },
  {
    title: "UAE Council for Fatwa – Official Portal",
    description:
      "The official digital portal of the UAE Council for Fatwa, providing authenticated religious guidance and advisory services to the public. The platform offers access to fatwas, scholarly resources, and consultation services through a secure and user-friendly government interface.",
    image: "/projects/fatwa.png",
    tags: [
      "Government",
      "Religious Services",
      "Public Services",
      "UAE",
      "React.js",
      "Material-Ui",
      "Performance Optimization",
      "Redux",
      "Redux-Toolkit",
      "UaePass",
      "Formik",
    ],
    link: "https://fatwauae.gov.ae",
    // github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/sneakers.png",
    tags: [
      "JavaScript",
      "Css",
      "Html",
      "Design-System",
      "performance Optimization",
    ],
    link: "https://haydaraah12.github.io/Design-Nike-Product-using-HTML-CSS-JS-PURE/",
    github:
      "https://github.com/HaydaraAH12/Design-Nike-Product-using-HTML-CSS-JS-PURE?tab=readme-ov-file",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: [
      "Nodejs",
      "express",
      "Stripe",
      "Crypto.js",
      "PostgreSQL",
      "React.js",
      "Jwt",
      "Material-Ui",
      "Redux",
      "styled-components",
    ],
    // link: "#",
    github: "https://github.com/HaydaraAH12/E-Commerce-App---Full-Stack",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    ""
                  )}
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
