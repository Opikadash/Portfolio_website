import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Opika Dash. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <SocialLink 
              href="mailto:opikadash@gmail.com" 
              icon={<Mail size={18} />} 
              label="Email" 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/opika-dash-a3a18325b" 
              icon={<Linkedin size={18} />} 
              label="LinkedIn" 
            />
            <SocialLink 
              href="https://github.com/OpikaDash" 
              icon={<Github size={18} />} 
              label="GitHub" 
            />
          </div>
        </div>
      </div>
    </footer>
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
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="text-muted-foreground hover:text-kiitr transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
