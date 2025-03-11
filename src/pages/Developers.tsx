
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);
  
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Extract all unique skills from developers
  const allSkills = Array.from(
    new Set(developers.flatMap((dev) => dev.skills))
  ).sort();
  
  // Filter developers based on search term and selected skills
  useEffect(() => {
    const filtered = developers.filter((developer) => {
      const matchesSearch =
        searchTerm === "" ||
        developer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        developer.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        developer.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.every((skill) => developer.skills.includes(skill));
      
      return matchesSearch && matchesSkills;
    });
    
    setFilteredDevelopers(filtered);
  }, [searchTerm, selectedSkills]);
  
  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
  };
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div ref={pageRef} className="min-h-screen bg-background pb-16">
      <Navbar />
      
      <div className="pt-28 pb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Dominican Web3 Developers
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with talented blockchain developers from the Dominican Republic who are building the future of Web3.
            </p>
          </div>
          
          <div className="mb-8 rounded-xl border bg-card shadow-sm p-4 md:p-6 animate-scale-in">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search developers by name, title, or description..."
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Filter by skills</h3>
                  {(selectedSkills.length > 0 || searchTerm) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-7 px-2"
                      onClick={clearFilters}
                    >
                      <X className="h-3 w-3 mr-1" /> Clear filters
                    </Button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/90 transition-colors"
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                      {selectedSkills.includes(skill) && (
                        <X className="ml-1 h-3 w-3" />
                      )}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {filteredDevelopers.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No developers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredDevelopers.map((developer, index) => (
                <DeveloperCard
                  key={developer.id}
                  developer={developer}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Developers;
