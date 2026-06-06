import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building systems that are honest about their complexity and designed to last.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Delivery",
    description:
      "API design, database modeling, third-party integrations, and cloud deployments.",
  },
  {
    icon: Users,
    title: "API-Driven UX",
    description:
      "Translating complex business workflows into intuitive user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Defensive Programming",
    description:
      "Not just shipping features — building reliable, maintainable systems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Software Engineer with 5+ years of experience building scalable,
                high-performance web applications using React, Next.js,
                TypeScript, and modern web technologies. My background is rooted
                in frontend engineering, where I've designed modular, accessible,
                and internationalized applications for business and government
                domains.
              </p>
              <p>
                Beyond UI development, I specialize in translating complex
                business workflows into intuitive, API-driven user experiences
                — working extensively on dynamic form engines, workflow-based
                systems, and state management using Redux and Context API.
              </p>
              <p>
                Over time, I've grown into full-stack development: building
                backend services and REST APIs with NestJS, designing relational
                databases with PostgreSQL and MySQL, implementing authentication
                systems, real-time features with WebSockets and Socket.IO, and
                email workflows via SMTP integrations.
              </p>
              <p>
                I'm comfortable across the full delivery lifecycle — API design,
                database modeling, third-party integrations, CI/CD pipelines, and
                cloud deployments on Vercel, Netlify, and Firebase. I've also
                used Python for automation and backend support.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I care deeply about clean architecture and defensive programming
                — not just shipping features, but building systems that are
                honest about their complexity and designed to last."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
