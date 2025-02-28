
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Car, 
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          <Car className="h-8 w-8 text-soft-orange animate-bounce-slight" />
          <span className="hidden sm:inline bg-gradient-to-r from-primary to-soft-orange bg-clip-text text-transparent">
            SparkleWash
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className="font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="font-medium hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link 
            to="/pricing" 
            className="font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className="font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button 
            className="ml-4 bg-soft-orange text-dark-charcoal hover:bg-soft-orange/90 button-hover rounded-full"
          >
            <Phone className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full bg-soft-blue hover:bg-soft-blue/80 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-dark-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-dark-charcoal" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col gap-4 p-8">
          <Link 
            to="/" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/pricing" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button 
            className="mt-4 bg-soft-orange text-dark-charcoal hover:bg-soft-orange/90 button-hover rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
