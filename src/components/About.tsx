import { Code2, Cpu, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Expert in microcontroller programming and hardware integration"
    },
    {
      icon: Wifi,
      title: "IoT Architecture",
      description: "Designing scalable connected device ecosystems"
    },
    {
      icon: Code2,
      title: "Full-Stack IoT",
      description: "From firmware to cloud, building complete solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent, connected solutions that bridge the physical and digital worlds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              With over 5 years of experience in IoT development, I specialize in creating intelligent systems that connect the physical and digital worlds. My expertise spans from low-level embedded programming to cloud-based architectures.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about solving complex problems through innovative technology solutions, whether it's optimizing sensor networks, developing real-time data pipelines, or building user-friendly interfaces for connected devices.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
