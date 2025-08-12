import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, GraduationCap, Star, Calendar, Users, Target } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2022",
      subtitle: "Winner",
      organization: "Ministry of Education's Innovation Cell & AICTE",
      date: "2022",
      description: "Won the prestigious national-level hackathon organized by the Government of India, competing against thousands of participants from across the country.",
      highlights: [
        "Selected from 10,000+ participating teams nationwide",
        "Developed innovative solution addressing real-world challenges",
        "Recognized by Ministry of Education and AICTE",
        "Demonstrated exceptional problem-solving and technical skills"
      ],
      category: "National Competition",
      impact: "Government Recognition"
    }
  ];

  const education = {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "AVC College of Engineering",
    duration: "June 2018 - May 2022",
    location: "Tamil Nadu, India",
    highlights: [
      "Specialized in Information Technology",
      "Strong foundation in programming and software development",
      "Participated in various technical competitions and projects",
      "Active involvement in coding clubs and technical societies"
    ]
  };

  const recognitions = [
    {
      icon: Star,
      title: "Performance Excellence",
      description: "Consistently recognized for high-quality code delivery and innovation"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led multiple project teams and mentored junior developers"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Exceeded project targets with measurable business impact"
    }
  ];

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Awards & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognition for excellence in innovation, problem-solving, and technical expertise
            </p>
          </div>

          {/* Main Award */}
          <Card className="glass-card hover-glow border-primary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <CardTitle className="text-2xl font-bold">{achievements[0].title}</CardTitle>
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      {achievements[0].subtitle}
                    </Badge>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary">
                    {achievements[0].organization}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{achievements[0].date}</span>
                    </div>
                    <Badge variant="outline">{achievements[0].category}</Badge>
                    <Badge variant="secondary">{achievements[0].impact}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {achievements[0].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {achievements[0].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card hover-glow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl font-bold">{education.degree}</CardTitle>
                  <p className="text-lg font-semibold text-primary">{education.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{education.duration}</span>
                    </div>
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                {education.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Recognitions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">
              Professional <span className="gradient-text">Recognitions</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {recognitions.map((recognition, index) => {
                const Icon = recognition.icon;
                return (
                  <Card key={index} className="glass-card hover-glow text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary p-3 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{recognition.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {recognition.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Achievement Summary */}
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Commitment to <span className="gradient-text">Excellence</span>
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                My journey has been marked by continuous learning, innovation, and recognition. 
                From winning national-level competitions to delivering exceptional results in professional 
                projects, I remain committed to pushing boundaries and creating meaningful impact through technology.
              </p>
              
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">2022</div>
                  <div className="text-sm text-muted-foreground">Hackathon Winner</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Awards;