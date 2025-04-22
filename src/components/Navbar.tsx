
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-dwork-purple flex items-center gap-1">
            <span className="text-dwork-purple">D</span>
            <span className="text-dwork-purple-600">Work</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-700 hover:text-dwork-purple transition-colors">
            How it Works
          </a>
          <a href="#categories" className="text-gray-700 hover:text-dwork-purple transition-colors">
            Categories
          </a>
          <a href="#freelancers" className="text-gray-700 hover:text-dwork-purple transition-colors">
            Freelancers
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-dwork-purple transition-colors">
            Testimonials
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-dwork-purple hover:bg-dwork-purple/10" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button className="bg-dwork-purple hover:bg-dwork-purple-600 text-white" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a
              href="#how-it-works"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#categories"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#freelancers"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Freelancers
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="ghost" className="text-dwork-purple hover:bg-dwork-purple/10 w-full justify-start" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button className="bg-dwork-purple hover:bg-dwork-purple-600 text-white w-full justify-start" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
