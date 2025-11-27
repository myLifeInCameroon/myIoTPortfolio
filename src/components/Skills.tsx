import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Hardware & Embedded",
      skills: ["Arduino", "Raspberry Pi", "ESP32/ESP8266", "STM32", "Nordic nRF", "PCB Design", "Soldering"]
    },
    {
      category: "Protocols & Communication",
      skills: ["MQTT", "CoAP", "HTTP/REST", "WebSocket", "LoRaWAN", "Zigbee", "BLE", "WiFi", "Cellular IoT"]
    },
    {
      category: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript/TypeScript", "Rust", "Go"]
    },
    {
      category: "Platforms & Cloud",
      skills: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "ThingsBoard", "Node-RED", "Docker", "Kubernetes"]
    },
    {
      category: "Data & Analytics",
      skills: ["InfluxDB", "MongoDB", "PostgreSQL", "Grafana", "TensorFlow", "Time-series Analysis"]
    },
    {
      category: "Web & Mobile",
      skills: ["React", "Vue.js", "React Native", "Node.js", "Express", "FastAPI"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end IoT solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
