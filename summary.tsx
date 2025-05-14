import { Card, CardContent } from "@/components/ui/card";
import { Code, GraduationCap, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-in-left">
            <p className="text-lg mb-4">
              Hello! I'm Opika Dash, a B.Tech student in Computer Science Engineering at 
              Kalinga Institute of Industrial Technology, passionate about solving complex 
              problems with efficient solutions.
            </p>
            
            <p className="text-lg mb-4">
              My journey in computer science has equipped me with strong analytical skills 
              and a deep understanding of data structures, algorithms, and machine learning fundamentals.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me creating engaging content through content writing 
              or participating in tech communities. I've also had experience as a model at Inferno Vogue,
              walking the runway at Chilika Fashion Week.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-in-right">
            <InfoCard
              icon={<Code className="h-10 w-10 text-kiitr" />}
              title="Developer"
              description="Passionate about clean code and efficient solutions."
            />
            
            <InfoCard
              icon={<GraduationCap className="h-10 w-10 text-kiitr" />}
              title="Student"
              description="B.Tech in CSE with 7.3 GPA."
            />
            
            <InfoCard
              icon={<BookOpen className="h-10 w-10 text-kiitr" />}
              title="Content Writer"
              description="Creating engaging, high-quality content."
            />
            
            <InfoCard
              icon={<Award className="h-10 w-10 text-kiitr" />}
              title="Leader"
              description="Led and mentored cadets in NCC, earning B-Certificate."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="gradient-border bg-card">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
