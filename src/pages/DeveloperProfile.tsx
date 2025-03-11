
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { getDevById } from "@/data/developers";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DeveloperProfile = () => {
  const { id } = useParams<{ id: string }>();
  const developer = getDevById(id || "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  useEffect(() => {
    if (!isLoading && containerRef.current) {
      containerRef.current.classList.add("visible");
    }
  }, [isLoading]);
  
  if (!developer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-semibold mb-4">Developer Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The developer you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/developers">Back to Developers</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 flex items-center justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-6xl">
            <div className="h-64 bg-muted rounded-xl"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded-md w-1/3"></div>
              <div className="h-4 bg-muted rounded-md w-1/2"></div>
              <div className="h-32 bg-muted rounded-md w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      
      <div 
        ref={containerRef}
        className="pt-28 animate-on-scroll"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Link to="/developers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to all developers
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-xl border overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">{developer.name}</h1>
                    <p className="text-muted-foreground">{developer.title}</p>
                    <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{developer.location}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Contact</h3>
                    <div className="flex justify-between">
                      {developer.github && (
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                          <a href={developer.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {developer.twitter && (
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                          <a href={developer.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {developer.linkedin && (
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                          <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {developer.website && (
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                          <a href={developer.website} target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
                            <Globe className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {developer.email && (
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                          <a href={`mailto:${developer.email}`} aria-label="Email">
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Skills</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {developer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card rounded-xl border p-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-muted-foreground whitespace-pre-line">{developer.bio}</p>
              </div>
              
              <div className="bg-card rounded-xl border p-6">
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div className="space-y-6">
                  {developer.experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-muted pb-6 last:pb-0">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h3 className="font-medium">{exp.position}</h3>
                      <p className="text-sm text-primary">{exp.company} • {exp.duration}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {developer.projects.map((project) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
