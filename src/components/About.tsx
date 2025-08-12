import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone, GitBranch, Shield } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Material-UI", "jQuery", "Webpack"]
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Express.js", "MySQL", "JWT", "Crypto Security", "RESTful APIs"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS (VPC, ALB, ECR, EC2, S3, RDS)", "Docker", "Jenkins", "Netlify", "Terraform"]
    },
    {
      icon: GitBranch,
      title: "Tools & Methodologies",
      skills: ["Git", "SVN", "Agile", "Code Reviews", "CI/CD", "Performance Optimization"]
    }
  ];

  const highlights = [
    {
      number: "3+",
      label: "Years Experience",
      description: "Building scalable web applications"
    },
    {
      number: "500+",
      label: "Secure Accounts",
      description: "Protected with JWT authentication"
    },
    {
      number: "85%",
      label: "Quote Accuracy",
      description: "Improved with AI-powered systems"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Achieved through optimizations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dedicated Full Stack Developer passionate about creating innovative solutions that make a difference. 
              With expertise spanning from elegant frontends to robust backends, I bring ideas to life through code.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card hover-glow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {highlight.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="glass-card hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary p-2 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="mr-1 mb-1 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Professional Philosophy */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                My <span className="gradient-text">Approach</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable code following best practices and industry standards.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">User-Centric</h4>
                  <p className="text-sm text-muted-foreground">
                    Focusing on user experience and creating intuitive interfaces that solve real problems.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Security First</h4>
                  <p className="text-sm text-muted-foreground">
                    Implementing robust security measures to protect user data and ensure application integrity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;