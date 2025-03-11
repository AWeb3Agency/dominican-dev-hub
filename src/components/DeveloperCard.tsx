
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Developer } from "@/data/developers";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DeveloperCardProps {
  developer: Developer;
  index: number;
}

const DeveloperCard = ({ developer, index }: DeveloperCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group rounded-xl overflow-hidden border bg-card shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={developer.image}
          alt={developer.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white font-medium text-xl">{developer.name}</h3>
          <p className="text-white/80 text-sm">{developer.location}</p>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h4 className="text-lg font-medium">{developer.title}</h4>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {developer.bio}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {developer.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary" className="font-normal">
              {skill}
            </Badge>
          ))}
          {developer.skills.length > 4 && (
            <Badge variant="outline" className="font-normal">
              +{developer.skills.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex justify-between items-center pt-2">
          <Button asChild variant="outline" size="sm">
            <Link to={`/developers/${developer.id}`}>View Profile</Link>
          </Button>
          <a
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
