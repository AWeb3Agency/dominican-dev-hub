
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";


// DEPRECATED: in favor of github issue
const Join = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    location: "",
    github: "",
    bio: "",
    skills: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your application has been submitted successfully!", {
        description: "We'll review your information and get back to you soon."
      });
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      
      <div className="pt-28 pb-8">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Join the Network
            </h1>
            <p className="text-muted-foreground text-lg">
              Share your developer profile and projects with the Dominican Web3 community.
            </p>
          </div>
          
          <div className="bg-card border rounded-xl shadow-sm p-6 md:p-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Blockchain Developer"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location in Dominican Republic</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Santo Domingo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile URL</Label>
                  <Input
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma-separated)</Label>
                  <Input
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Solidity, React, Ethereum, IPFS"
                    required
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and your experience with Web3 technologies..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto rounded-full px-8">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
