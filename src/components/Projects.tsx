import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, TrendingUp, Shield, Bot, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI PDF Quoting Tool",
      duration: "June 2023 - Jan 2025",
      description: "An advanced AI-powered quotation system with automated 2D diagram generation and angle prediction capabilities for precast concrete solutions.",
      features: [
        "Secure JWT-based authentication for 1,000+ users",
        "Automated quotation with 85% improved accuracy",
        "2D diagram generation with angle prediction",
        "Admin management system with CRUD operations",
        "Email notifications reducing missed deadlines by 20%",
        "AES encryption for enhanced security"
      ],
      technologies: ["React.js", "Node.js", "Express", "MySQL", "AWS S3", "AWS EC2", "JWT", "AES Encryption"],
      metrics: [
        { icon: Users, value: "1,000+", label: "Protected Users" },
        { icon: TrendingUp, value: "85%", label: "Quote Accuracy" },
        { icon: Shield, value: "20%", label: "Reduced Deadlines" }
      ],
      category: "Enterprise Solution",
      status: "In Live"
    },
    {
      title: "TextAnalytics AI",
      duration: "July 2022 - May 2023",
      description: "A comprehensive business intelligence platform providing advanced analytics and actionable insights for data-driven decision making.",
      features: [
        "Advanced caching strategies achieving 99.9% uptime",
        "60% improvement in query response times",
        "Intuitive UI with React.js and D3.js visualizations",
        "40% reduction in client decision-making time",
        "PDF generation with KPI scores",
        "Scalable architecture for 1M+ daily users"
      ],
      technologies: ["React.js", "D3.js", "Node.js", "MySQL", "AWS S3", "AWS EC2", "PDF Generation"],
      metrics: [
        { icon: Users, value: "10K+", label: "Daily Producted Users" },
        { icon: TrendingUp, value: "60%", label: "Performance Boost" },
        { icon: BarChart3, value: "40%", label: "Faster Decisions" }
      ],
      category: "Analytics Platform",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that solve real-world problems and deliver measurable business value
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover-glow overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                        <Badge 
                          variant={project.status === "In Production" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      
                      <Badge variant="outline" className="w-fit">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.metrics.map((metric, metricIndex) => {
                      const Icon = metric.icon;
                      return (
                        <div key={metricIndex} className="text-center p-4 rounded-lg bg-muted/50">
                          <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="text-xl font-bold gradient-text mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Key Features & Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs hover-glow"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="hover-glow" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </Button>
                    {/* <Button variant="outline" className="hover-glow" disabled>
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button> */}
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    * Project details are confidential due to NDA agreements
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects Mention */}
          <Card className="glass-card text-center">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold mb-4">
                More Projects & <span className="gradient-text">Contributions</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I've contributed to various other projects including internal tools, optimization initiatives, 
                and open-source contributions. Each project has enhanced my skills and contributed to my 
                growth as a developer.
              </p>
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Let's Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;