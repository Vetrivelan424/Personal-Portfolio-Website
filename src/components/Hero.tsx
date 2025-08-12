import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const skills = [
    "React.js", "Node.js", "JavaScript", "TypeScript", "MySQL", "AWS", "Docker", "Jenkins"
  ];

  const handleDownloadCV = () => {
    // In a real application, this would trigger a CV download
    window.open("/cv-vetrivelan-m.pdf", "_blank");
  };

  const handleContactClick = (type: string) => {
    switch (type) {
      case "email":
        window.open("mailto:vetrivelan890@gmail.com");
        break;
      case "linkedin":
        window.open("https://linkedin.com/in/vetrivelan-m-501180221", "_blank");
        break;
      case "github":
        window.open("https://github.com/Vetrivelan424", "_blank");
        break;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4 mt-5">
              <Badge variant="secondary" className="text-sm font-medium">
                🏆 Smart India Hackathon 2022 Winner
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Vetrivelan M</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Sr. Full Stack Developer
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate Full Stack Developer with 3+ years of experience building scalable web applications. 
                Specialized in React.js, Node.js, and modern web technologies. Currently transforming ideas into 
                digital solutions at Compindia Infotech.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 6383281099</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>vetrivelan890@gmail.com</span>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="glass-card hover-glow animation-delay-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Work Together
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="hover-glow"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover-glow"
                onClick={() => handleContactClick("linkedin")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover-glow"
                onClick={() => handleContactClick("github")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover-glow"
                onClick={() => handleContactClick("email")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fadeInUp animation-delay-400">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-float"></div>
              
              {/* Main image */}
              <div className="relative glass-card rounded-full p-2">
                <img
                  src={profileImage}
                  alt="Vetrivelan M - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card rounded-full p-3 animate-float animation-delay-200">
                <span className="text-2xl">⚡</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card rounded-full p-3 animate-float animation-delay-600">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;