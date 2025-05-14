import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out to me for any questions, opportunities, 
              or just to say hello. I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <ContactItem
                icon={<Mail className="h-5 w-5 text-kiitr" />}
                title="Email"
                value="opikadash@gmail.com"
                href="mailto:opikadash@gmail.com"
              />
              
              <ContactItem
                icon={<Phone className="h-5 w-5 text-kiitr" />}
                title="Phone"
                value="9899264401"
                href="tel:+919899264401"
              />
              
              <ContactItem
                icon={<Linkedin className="h-5 w-5 text-kiitr" />}
                title="LinkedIn"
                value="LinkedIn"
                href="https://linkedin.com/in/"
              />
              
              <ContactItem
                icon={<Github className="h-5 w-5 text-kiitr" />}
                title="GitHub"
                value="GitHub"
                href="https://github.com/"
              />
            </div>
          </div>
          
          <div>
            <Card className="gradient-border bg-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-kiitr hover:bg-kiitr-dark" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactItem = ({ icon, title, value, href }: ContactItemProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-start hover:text-kiitr transition-colors"
    >
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </a>
  );
};

export default Contact;
