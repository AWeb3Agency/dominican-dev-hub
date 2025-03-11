
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Developers", path: "/developers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 glassmorphism border-b shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-semibold"
        >
          <Code className="w-6 h-6 text-primary" />
          <span className="animate-blur-in">Dominican<span className="text-primary">Web3</span>Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-all duration-200 hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary font-medium"
                  : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-full px-4 shadow-md">
            <Link to="https://github.com/AWeb3Agency/dominican-dev-hub/issues/new?assignees=&labels=New+Developer&template=join-template.md&title=%5BNew+Developer%5D+Your+Name" target="_blank" rel="noopener noreferrer">
              Join the Network
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/90 hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism border-b shadow-lg animate-slide-in">
          <div className="flex flex-col py-6 px-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base py-2 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="rounded-full w-full mt-4 shadow-sm"
            >
              <Link to="https://github.com/AWeb3Agency/dominican-dev-hub/issues/new?assignees=&labels=New+Developer&template=join-template.md&title=%5BNew+Developer%5D+Your+Name" target="_blank" rel="noopener noreferrer">
                Join the Network
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
