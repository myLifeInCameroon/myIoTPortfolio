import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import fypImg from "@/assets/project-agriculture-iot-fyp.jpg";
import oscImg from "@/assets/project-traffic-iot-osc23.jpg";
import cndtImg from "@/assets/project-satellite-iot.jpg";
import { Label } from "recharts";

const Projects = () => {
  const projects = [
    {
      title: "Remote Controlled Smart Irrigation System",
      description: "IoT-based irrigation system allowing remote monitoring and control of closed-loop farm environmental parameters and usage via a mobile app.",
      technologies: ["ESP32", "GSM", "GPRS", "WiFi", "SMS", "HTML/CSS", "JavaScript", "Firebase"],
      image: fypImg,
      external: { label: "Read Paper", url: "https://drive.google.com/file/d/1llzwXuqtYvolGCSUq0o8L5Bf5u7NTWD1/view"}
    },
    {
      title: "Smart Traffic Sensor Network",
      description: "iNgeyaa's smart sensor network for real-time traffic monitoring and management using AIoT technology.",
      technologies: ["ESP32", "Computer Vision", "Python", "WiFi", "MQTT", "AWS IoT"],
      image: oscImg,
      external: { label: "View Presentation", url: "https://docs.google.com/presentation/d/1hzNL2mifDRvvQ97Gq8fzLjqjvOuM6g6s/edit?usp=sharing&ouid=111433405706327105181&rtpof=true&sd=true"}
    },
    {
      title: "Satellite-enabled IoT Network for Environmental Monitoring",
      description: "A project in alliance with the National Committee of Technology Development (CNDT) in Cameroon to deploy a space-based GIS platform for national infrastructure and environmental monitoring.",
      technologies: ["Nanosatellite", "ESP32", "TheThingsNetwork", "MQTT", "LoRa", "GIS"],
      image: cndtImg,
      external: { label: "Repository", url: "https://github.com/karlz-t/LoRa-Network"}
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of IoT solutions spanning agriculture, traffic automation, satellite systems, and telecommunications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4 items-stretch">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in w-full flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {/* single external link button, icon chosen by label (Repository -> Github) */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.external.url} target="_blank" rel="noopener noreferrer">
                      {project.external.label === "Repository" ? <Github className="mr-2 h-4 w-4 inline" /> : <ExternalLink className="mr-2 h-4 w-4 inline" />}
                      {project.external.label}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
