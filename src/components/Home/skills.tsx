import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: "technical" | "soft";
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills: Skill[] = [
    { name: "DSA in C/C++", level: 85, category: "technical" },
    { name: "Python Scripting", level: 90, category: "technical" },
    { name: "Git and GitHub", level: 80, category: "technical" },
    { name: "SQL Database", level: 75, category: "technical" },
    { name: "ML fundamentals", level: 70, category: "technical" },
    { name: "VSCode", level: 95, category: "technical" },
  ];

  const softSkills: Skill[] = [
    { name: "Leadership", level: 90, category: "soft" },
    { name: "Communication Skills", level: 85, category: "soft" },
    { name: "Problem Solving", level: 95, category: "soft" },
    { name: "Analytical Thinking", level: 90, category: "soft" },
    { name: "Team Collaboration", level: 85, category: "soft" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ 
  skill, 
  index, 
  isVisible 
}: { 
  skill: Skill; 
  index: number;
  isVisible: boolean;
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setProgress(skill.level);
      }, index * 100);
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, index, skill.level]);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default Skills;
