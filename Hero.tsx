import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Github, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Computer Science Student",
    "Tech Intern at Auradine",
    "Python Enthusiast",
    "AI Developer"
  ];

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const type = () => {
      const i = textIndex % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        currentText = fullText.substring(0, currentIndex - 1);
        currentIndex--;
      } else {
        currentText = fullText.substring(0, currentIndex + 1);
        currentIndex++;
      }

      setTypedText(currentText);

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentIndex === fullText.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setTextIndex(prevIndex => prevIndex + 1);
      }

      timeoutId = window.setTimeout(type, typingSpeed);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [textIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-8 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-transparent opacity-50 z-0" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-4">
          <img 
            src="/lovable-uploads/2bf07481-6226-4188-b889-be91d960d3fa.png" 
            alt="KIIT Logo" 
            className="h-20 md:h-24 mx-auto mb-4" 
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-kiitr">Opika Dash</span>
        </h1>
        
        <div className="h-12 mb-6">
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80">
            <span>{typedText}</span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          B.Tech student who is a highly motivated, productive, and goal-oriented team player 
          with strong communication, analytical, and problem-solving skills.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" className="bg-kiitr hover:bg-kiitr-dark">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">
              <Github className="mr-2 h-4 w-4" />
              View My Projects
            </a>
          </Button>
          
          <Button size="lg" variant="secondary" asChild>
            <a href="#" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-kiitr" />
      </a>
    </section>
  );
};

export default Hero;
