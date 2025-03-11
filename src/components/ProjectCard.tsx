
import { Project } from "@/data/developers";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  developerName: string;
  developerImage: string;
  developerLink: string;
}

const ProjectCard = ({ project, developerName, developerImage, developerLink }: ProjectCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden bg-card shadow-sm transition-all duration-300 hover:shadow-md card-hover">
      <div className="relative h-48 overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
            <span className="text-primary/50 font-semibold">{project.name}</span>
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-4">
        <div className="flex items-center space-x-3">
          <Link to={developerLink} className="flex-shrink-0">
            <img 
              src={developerImage} 
              alt={developerName} 
              className="w-8 h-8 rounded-full object-cover border" 
            />
          </Link>
          <div className="min-w-0">
            <h3 className="font-medium truncate">{project.name}</h3>
            <Link to={developerLink} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              by {developerName}
            </Link>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge variant="secondary" key={tech} className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            {project.github && project.github !== "private" && (
              <Button asChild variant="ghost" size="icon" className="rounded-full w-8 h-8">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.url && (
              <Button asChild variant="ghost" size="icon" className="rounded-full w-8 h-8">
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Project Website">
                  <Globe className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
