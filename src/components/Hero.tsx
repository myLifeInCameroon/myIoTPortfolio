import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-lg"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building the{" "}
            <span className="gradient-text">Connected Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            IoT Developer specializing in smart solutions, embedded systems, and seamless hardware-software integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg border-glow"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
