import { GraduationCap, Briefcase, Award, Rocket, Cpu, Wifi, Code, BookOpen, Star, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
  const milestones = [
    {
      year: "2025",
      icon: Rocket,
      title: "Founder/CEO",
      organization: "Konnectik",
      description: [
        "Founded in late 2025, Konnectik is an IoT startup dedicated to developing interconnected Wi-Fi zones for smart cities and communities.",
        "Presence at Grande Rencontre de l'Innovation Technologique (GRIT) 2025 in Togo, as a featured startup.",
        "Raised $25,000 in AWS Activate credits to support cloud infrastructure and development.",
        "Secured initial seed funding of $5,000 from angel investors to kickstart operations."
      ],
      type: "career"
    },
    {
      year: "2025",
      icon: Award,
      title: "Cameroon Digital Innovation Week Nomination",
      organization: "iNgeyaa",
      description: [
        "Co-founded iNgeyaa, an AIoT (Artificial Intelligence of Things) startup focused on smart city solutions, nominated for Cameroon Digital Innovation Week.",
        "Awarded 8th position among 427 startups/solutions."
      ],
      type: "achievement"
    },
    {
      year: "2024",
      icon: Star,
      title: "Chief Technical Officer",
      organization: "Nanosatellite Missions Design Ltd.",
      description: "Leading development of enterprise IoT-enabled space solutions, managing teams and developing strategic technology roadmaps and solutions.",
      type: "career"
    },
    {
      year: "2024",
      icon: Briefcase,
      title: "Mobile Makerspace Consultant and Trainer",
      organization: "ACTIVSPACES",
      description: "Conducted workshops and training sessions on IoT and embedded systems for youth empowerment programs.",
      type: "career"
    },
    {
      year: "2023",
      icon: Trophy,
      title: "2nd Prize Winner - Orange Summer Challenge",
      organization: "iNgeyaa",
      description: "Developed and Co-founded iNgeyaa, an AIoT startup focused on the monitoring and management of public traffic using smart sensors and AI.",
      type: "achievement"
    },
    {
      year: "2023",
      icon: GraduationCap,
      title: "Bachelor's in Electrical and Electronics Engineering",
      organization: "Faculty of Engineering and Technology, University of Buea",
      description: "Specialized in Power Systems and realized as final year project a smart irrigation system using IoT.",
      type: "education"
    },
    {
      year: "2022",
      icon: Code,
      title: "Academic Internship",
      organization: "Valuable Vision, Strasbourg, France",
      description: "Developed android solutions, 3D modeling, and embedded systems for GNSS applications.",
      type: "education"
    },
    {
      year: "2020",
      icon: BookOpen,
      title: "Chief Technical Officer",
      organization: "Nervtek Organization",
      description: "Volunteering CTO role for 2 years, leading tech initiatives and projects for social impact.",
      type: "career"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From academic foundations to professional excellence in IoT development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComp = milestone.icon as any;
              const typeStyles: Record<string, { bg: string; color: string }> = {
                career: { bg: "bg-primary/10", color: "text-primary" },
                achievement: { bg: "bg-accent/10", color: "text-accent" },
                education: { bg: "bg-accent/10", color: "text-accent" },
                default: { bg: "bg-background/10", color: "text-muted-foreground" },
              };
              const styles =
                (milestone as any).bg && (milestone as any).color
                  ? { bg: (milestone as any).bg, color: (milestone as any).color }
                  : typeStyles[milestone.type] ?? typeStyles.default;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ring-1 ring-background/20 shadow-sm ${styles.bg}`}
                          aria-hidden
                        >
                          <IconComp className={`h-6 w-6 ${styles.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                          <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                          <div className="text-sm text-muted-foreground mb-2">{milestone.organization}</div>
                          <div className="text-sm text-muted-foreground mb-2">
                            {Array.isArray(milestone.description) ? (
                              <ul className="list-disc pl-5 space-y-1">
                                {milestone.description.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{milestone.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Year label on opposite side (hidden on mobile) */}
                  <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "text-left pl-12" : "text-right pr-12"
                    }`}>
                    <div className="text-3xl font-bold text-muted-foreground/30">{milestone.year}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;