import { TrendingUp, Gauge, ShieldCheck, Layers, Globe } from "lucide-react";

const impactMetrics = [
  {
    icon: TrendingUp,
    value: "35%",
    title: "Performance Improvement",
    description:
      "Improved page load performance using SSR/ISR strategies, code splitting, and optimized rendering patterns in Next.js applications.",
  },
  {
    icon: Gauge,
    value: "90+",
    title: "Lighthouse Score",
    description:
      "Elevated multiple enterprise pages from 70–80 to 90+ Lighthouse performance through optimization and architectural improvements.",
  },
  {
    icon: ShieldCheck,
    value: "30%",
    title: "Fewer Integration Bugs",
    description:
      "Reduced frontend-backend integration issues by aligning API contracts, applying defensive programming, and improving state management.",
  },
  {
    icon: Layers,
    value: "40%",
    title: "Less Repetitive Code",
    description:
      "Adopted a Low-Code Platform approach using Form.io, reducing redundant frontend logic and accelerating feature delivery.",
  },
  {
    icon: Globe,
    value: "100%",
    title: "RTL/LTR Coverage",
    description:
      "Successfully delivered fully bilingual Arabic/English platforms with accurate RTL/LTR handling across workflow-driven systems.",
  },
];

export const EngineeringImpact = () => {
  return (
    <section id="impact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Engineering Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Measurable results that{" "}
            <span className="font-serif italic font-normal text-foreground">
              speak louder than words.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Instead of testimonials, here’s the real impact delivered across
            government and enterprise-scale applications.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactMetrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold mb-2 text-foreground">
                  {item.value}
                </div>

                {/* Title */}
                <div className="text-lg font-semibold mb-3">{item.title}</div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
