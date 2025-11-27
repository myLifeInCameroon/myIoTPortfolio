import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import energyMonitorImg from "@/assets/project-energy-monitor.jpg";
import sensorNetworkImg from "@/assets/project-sensor-network.jpg";
import agricultureIotImg from "@/assets/project-agriculture-iot.jpg";
import healthcareDeviceImg from "@/assets/project-healthcare-device.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Energy Monitor",
      description: "Real-time energy monitoring system with predictive analytics and automated optimization for residential homes.",
      technologies: ["ESP32", "MQTT", "React", "InfluxDB", "TensorFlow"],
      image: energyMonitorImg,
      github: "#",
      demo: "#"
    },
    {
      title: "Industrial Sensor Network",
      description: "Distributed sensor network for factory floor monitoring with edge computing and predictive maintenance capabilities.",
      technologies: ["Arduino", "LoRaWAN", "Node.js", "MongoDB", "Grafana"],
      image: sensorNetworkImg,
      github: "#",
      demo: "#"
    },
    {
      title: "Agricultural IoT System",
      description: "Smart irrigation and crop monitoring platform using soil sensors, weather data integration, and ML-powered recommendations.",
      technologies: ["Raspberry Pi", "Python", "AWS IoT", "PostgreSQL", "Vue.js"],
      image: agricultureIotImg,
      github: "#",
      demo: "#"
    },
    {
      title: "Connected Healthcare Device",
      description: "Wearable health monitoring device with cloud sync, real-time alerts, and HIPAA-compliant data storage.",
      technologies: ["Nordic nRF52", "BLE", "React Native", "Firebase", "Docker"],
      image: healthcareDeviceImg,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of IoT solutions spanning smart homes, industrial automation, agriculture, and healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
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
              <div className="p-6">
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
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
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
