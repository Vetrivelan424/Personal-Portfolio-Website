import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    { icon: Mail, text: "vetrivelan890@gmail.com", href: "mailto:vetrivelan890@gmail.com" },
    { icon: Phone, text: "+91 6383281099", href: "tel:+916383281099" },
    { icon: MapPin, text: "Chennai, India", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/vetrivelan-m-501180221", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Vetrivelan424", label: "GitHub" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              <span className="font-bold text-xl gradient-text">Vetrivelan.M</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Full Stack Developer passionate about creating innovative solutions with modern web technologies. 
              Winner of Smart India Hackathon 2022 and experienced in building scalable applications.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    size="icon"
                    variant="ghost"
                    className="hover-glow"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <Icon className="h-4 w-4 group-hover:text-primary" />
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Reserved by Vetrivelan</span>
            <span>in Chennai, India</span>
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={scrollToTop}
            className="hover-glow"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;