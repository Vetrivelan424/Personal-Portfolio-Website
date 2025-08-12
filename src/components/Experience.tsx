import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, TrendingUp, Users, Shield, Database } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: TrendingUp,
      metric: "15%",
      description: "Improved user engagement with responsive web applications"
    },
    {
      icon: Users,
      metric: "500+",
      description: "User accounts secured with JWT authentication"
    },
    {
      icon: Database,
      metric: "20%",
      description: "Reduced query response time through optimization"
    },
    {
      icon: Shield,
      metric: "100%",
      description: "Secure data flow between frontend and backend"
    }
  ];

  const responsibilities = [
    "Developed responsive web applications using React.js and Bootstrap",
    "Optimized MySQL database queries for improved performance",
    "Integrated JWT-based authentication for secure user access",
    "Participated in code reviews and followed Agile methodologies",
    "Improved code quality and development efficiency through best practices",
    "Collaborated with a team of 4 to implement RESTful APIs using Node.js and Express",
  ];

  const technologies = [
    "React.js", "Node.js", "Express.js", "MySQL", "JWT", "Bootstrap", 
    "JavaScript", "HTML5", "CSS3", "Git", "Agile"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building scalable web solutions and driving innovation in the tech industry
            </p>
          </div>

          {/* Main Experience Card */}
          <Card className="glass-card hover-glow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold">Sr. Web Developer</CardTitle>
                  
                  <div className="flex items-center gap-2 text-primary">
                    <Building className="h-5 w-5" />
                    <span className="font-semibold text-lg">Compindia Infotech Private Limited</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>June 2022 - Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Chennai, India</span>
                    </div>
                  </div>
                </div>
                
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  3.5+ Years
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Key Achievements */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-lg bg-muted/50">
                        <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {achievement.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Responsibilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="hover-glow"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Highlights */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">
                Professional <span className="gradient-text">Growth</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout my journey at Compindia Infotech, I've evolved from a junior developer to a 
                    key contributor, leading feature development and mentoring new team members. My focus on 
                    clean code, security best practices, and user experience has consistently delivered 
                    high-quality solutions that exceed client expectations.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="font-semibold mb-1">Result-Oriented</h4>
                    <p className="text-sm text-muted-foreground">
                      Consistently delivered projects on time with measurable improvements
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="font-semibold mb-1">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Worked effectively in cross-functional teams using Agile methodologies
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <h4 className="font-semibold mb-1">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Always staying updated with latest technologies and best practices
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;