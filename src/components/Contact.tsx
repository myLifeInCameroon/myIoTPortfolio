import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <Card className="p-8 bg-card border-border mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background border-border focus:border-primary resize-none"
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-glow"
            >
              Send Message
            </Button>
          </form>
        </Card>

        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
