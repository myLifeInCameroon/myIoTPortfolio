import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const Blog = () => {
  const awards = [
    {
      title: "Best IoT Innovation Award 2024",
      organization: "International IoT Congress",
      date: "March 2024",
      description: "Recognized for groundbreaking work in smart home energy optimization using AI-driven predictive analytics.",
      category: "Innovation"
    },
    {
      title: "Industrial Automation Excellence",
      organization: "Manufacturing Technology Association",
      date: "December 2023",
      description: "Awarded for developing scalable sensor networks that reduced factory downtime by 45% through predictive maintenance.",
      category: "Industrial"
    },
    {
      title: "Sustainable Agriculture Tech Prize",
      organization: "AgriTech Global Summit",
      date: "September 2023",
      description: "Honored for creating IoT solutions that optimized water usage and increased crop yields by 30% in drought-prone regions.",
      category: "Agriculture"
    },
    {
      title: "Healthcare Innovation Grant",
      organization: "Digital Health Foundation",
      date: "June 2023",
      description: "Received funding and recognition for developing HIPAA-compliant wearable devices that improve patient monitoring efficiency.",
      category: "Healthcare"
    },
    {
      title: "Young IoT Developer of the Year",
      organization: "Tech Innovation Awards",
      date: "February 2023",
      description: "Selected from over 500 nominees for exceptional contributions to IoT development and open-source community engagement.",
      category: "Achievement"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating achievements and milestones in IoT development across various industries.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {award.title}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {award.category}
                    </Badge>
                  </div>
                  <p className="text-primary font-semibold mb-2">{award.organization}</p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {award.date}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;