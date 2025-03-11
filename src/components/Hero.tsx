
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      
      <div 
        ref={containerRef} 
        className="container max-w-6xl mx-auto px-4 animate-stagger"
      >
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            Building Web3 in the Dominican Republic
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Connect with Dominican <br />
            <span className="text-primary">Web3 Developers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover talented blockchain developers from the Dominican Republic who are building the decentralized future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
              <Link to="/developers">Explore Developers</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/join">Join the Network</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
          <div className="relative z-0 rounded-2xl overflow-hidden border shadow-xl glassmorphism">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2942&auto=format&fit=crop" 
              alt="Dominican developers collaborating" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
