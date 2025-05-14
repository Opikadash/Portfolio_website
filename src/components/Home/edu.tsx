import { Card, CardContent } from "@/components/ui/card";
import { School, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-kiitr/30"></div>
          
          <div className="space-y-12">
            <TimelineItem
              date="2022 - 2026"
              title="B.Tech in Computer Science Engineering"
              institution="Kalinga Institute of Industrial Technology"
              details="GPA: 7.3"
              align="right"
            />
            
            <TimelineItem
              date="2022"
              title="Class XII"
              institution="Delhi Public School, Mathura Road, Sec-19"
              details="Percentage: 83%"
              align="left"
            />
            
            <TimelineItem
              date="2020"
              title="Class X"
              institution="Delhi Public School, Mathura Road, Sec-19"
              details="Percentage: 88.88%"
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  date: string;
  title: string;
  institution: string;
  details: string;
  align: "left" | "right";
}

const TimelineItem = ({
  date,
  title,
  institution,
  details,
  align,
}: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
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
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={itemRef}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
        align === "right" ? "md:text-right" : ""
      } ${
        isVisible 
          ? align === "left" 
            ? "animate-slide-in-left" 
            : "animate-slide-in-right"
          : "opacity-0"
      }`}
    >
      <div className={`${align === "right" ? "md:order-1" : ""}`}>
        <Card className="gradient-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <School className="h-5 w-5 mr-2 text-kiitr" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {date}
              </div>
            </div>
            <p className="mb-1">{institution}</p>
            <p className="text-sm text-muted-foreground">{details}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="hidden md:block"></div>
      
      <div className={`absolute left-0 md:left-1/2 top-6 transform ${
        align === "right" ? "md:-translate-x-5" : "translate-x-[-5px] md:translate-x-3"
      } -translate-y-1/2 w-4 h-4 bg-kiitr rounded-full border-4 border-background`}></div>
    </div>
  );
};

export default Education;
