import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { set } from "date-fns";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const SERVICE_ID = "service_b5h9308";
    const TEMPLATE_ID = "template_61n13ey";
    const PUBLIC_KEY = "m-uVBTyj2Yp3MwJZ3";

    setIsSending(true);
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      },
      PUBLIC_KEY
    )
    .then(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }).finally(() => setIsSending(false));
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/karlz-t" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/karol-charles-konarski-a4252a199" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/Karol_CharlesK" },
    { icon: Mail, label: "Email", href: "mailto:kkonarski42@gmail.com" }
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
                name="from_name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                name="reply_to"
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
                name="message"
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
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
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
                {(() => {
                  const IconComp = social.icon;
                  return <IconComp className="h-5 w-5" />;
                })()}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
