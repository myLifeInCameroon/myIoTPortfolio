import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
  const milestones = [
    {
      year: "2024",
      icon: Rocket,
      title: "Senior IoT Engineer",
      organization: "Tech Innovations Inc.",
      description: "Leading development of enterprise IoT solutions, managing team of 5 engineers",
      type: "career"
    },
    {
      year: "2023",
      icon: Award,
      title: "IoT Innovation Award",
      organization: "Industry Recognition",
      description: "Recognized for breakthrough work in smart agriculture systems",
      type: "achievement"
    },
    {
      year: "2021",
      icon: Briefcase,
      title: "IoT Developer",
      organization: "Smart Solutions Ltd.",
      description: "Developed healthcare monitoring devices and sensor networks",
      type: "career"
    },
    {
      year: "2020",
      icon: GraduationCap,
      title: "Master's in Computer Engineering",
      organization: "Tech University",
      description: "Specialized in Embedded Systems and IoT Architecture",
      type: "education"
    },
    {
      year: "2018",
      icon: GraduationCap,
      title: "Bachelor's in Electronics",
      organization: "Engineering College",
      description: "Foundation in electronics, microcontrollers, and programming",
      type: "education"
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
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                        milestone.type === 'education' ? 'bg-accent/10' :
                        milestone.type === 'achievement' ? 'bg-primary/10' :
                        'bg-secondary/10'
                      }`}>
                        <milestone.icon className={`h-6 w-6 ${
                          milestone.type === 'education' ? 'text-accent' :
                          milestone.type === 'achievement' ? 'text-primary' :
                          'text-secondary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">{milestone.organization}</div>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Year label on opposite side (hidden on mobile) */}
                <div className={`hidden md:block w-5/12 ${
                  index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'
                }`}>
                  <div className="text-3xl font-bold text-muted-foreground/30">{milestone.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;