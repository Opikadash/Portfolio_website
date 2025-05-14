import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-kiitr transition-colors"
        >
          <span className="hidden md:inline">Opika Dash</span>
          <span className="md:hidden">OD</span>
          <img 
            src="/lovable-uploads/2bf07481-6226-4188-b889-be91d960d3fa.png" 
            alt="KIIT Logo" 
            className="h-8 w-auto" 
          />
        </Link>

        <nav className="flex items-center space-x-1 md:space-x-2 mt-2 md:mt-0">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-2 mt-2 md:mt-0">
          <SocialLink href="mailto:opikadash@gmail.com" icon={<Mail size={18} />} label="Email" />
          <SocialLink href="https://linkedin.com/in/" icon={<Linkedin size={18} />} label="LinkedIn" />
          <SocialLink href="https://github.com/" icon={<Github size={18} />} label="GitHub" />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="px-2 py-1 text-sm md:text-base text-muted-foreground hover:text-kiitr transition-colors"
    >
      {children}
    </a>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-kiitr/10 hover:text-kiitr">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </a>
    </Button>
  );
};

export default Header;
