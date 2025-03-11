
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DeveloperCard from "@/components/DeveloperCard";
import ProjectCard from "@/components/ProjectCard";
import { developers } from "@/data/developers";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredDevelopers = developers.slice(0, 3);
  const featuredProjects = developers.flatMap(dev => 
    dev.projects.slice(0, 1).map(project => ({
      project,
      developer: dev
    }))
  ).slice(0, 3);
  
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section 
        ref={el => sectionsRef.current[0] = el} 
        className="py-24 animate-on-scroll"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Developers</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Meet talented Dominican blockchain developers who are building the future of Web3.
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link to="/developers">View all developers →</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredDevelopers.map((developer, index) => (
              <DeveloperCard key={developer.id} developer={developer} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={el => sectionsRef.current[1] = el} 
        className="py-24 bg-accent/50 animate-on-scroll"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Discover innovative Web3 projects built by Dominican developers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map(({ project, developer }, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                developerName={developer.name}
                developerImage={developer.image}
                developerLink={`/developers/${developer.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={el => sectionsRef.current[2] = el}
        className="py-24 animate-on-scroll"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Dominican Web3 Developer Network</h2>
            <p className="text-muted-foreground mb-8">
              Are you a Web3 developer from the Dominican Republic? Join our growing community and showcase your projects and skills to potential clients and collaborators.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 shadow-md">
              <Link to="https://github.com/AWeb3Agency/dominican-dev-hub/issues/new?assignees=&labels=New+Developer&template=join-template.md&title=%5BNew+Developer%5D+Your+Name" target="_blank" rel="noopener noreferrer">
                Join the Network
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="bg-card border-t py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold flex items-center">
                Dominican<span className="text-primary">Web3</span>Dev
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Connecting Dominican talent in the blockchain space
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 text-sm">
              <div>
                <h4 className="font-medium mb-2">Network</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/developers" className="hover:text-primary transition-colors">Developers</Link></li>
                  <li><Link to="https://github.com/AWeb3Agency/dominican-dev-hub/issues/new?assignees=&labels=New+Developer&template=join-template.md&title=%5BNew+Developer%5D+Your+Name" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Join Us</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Resources</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} DominicanWeb3Dev. Made with ❤️👨🏽‍💻.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
