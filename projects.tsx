import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  tools: string[];
  githubLink: string;
  demoLink?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Big Integer Project",
      description: "Developed a new BigInt data type in C++ to handle numbers beyond 20 digits. Implemented efficient arithmetic operations for large numbers.",
      tools: ["C++"],
      githubLink: "https://github.com/",
    },
    {
      title: "Handwritten Digits Analysis",
      description: "Implemented CNN using PyTorch. Re-trained on incorrect predictions to improve accuracy. Uses TorchVision for MNIST dataset.",
      tools: ["Python", "PyTorch", "TorchVision", "HTML", "CSS", "JavaScript", "Canvas API", "Base64 Processing"],
      githubLink: "https://github.com/",
    },
    {
      title: "AI Blog Generator",
      description: "Integrated pre-trained LLM with API key. Built UI with Streamlit for easy interaction.",
      tools: ["Python", "Streamlit", "GPT4ALL", "API"],
      githubLink: "https://github.com/",
    },
    {
      title: "H&M Personalized Fashion Recommendation",
      description: "Applied Dnn recall and LightGBM recall. Proposed a solution with Gan, SASRec and faise. Wrote a research paper on the proposed solution.",
      tools: ["Python", "VSCode", "Colab", "Kaggle dataset"],
      githubLink: "https://github.com/",
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: Project; 
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`transform transition-all duration-500 ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full gradient-border bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4 text-foreground/70">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map(tool => (
              <Badge key={tool} variant="secondary">{tool}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-1 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {project.demoLink && (
              <Button variant="default" size="sm" asChild className="bg-kiitr hover:bg-kiitr-dark">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Projects;
