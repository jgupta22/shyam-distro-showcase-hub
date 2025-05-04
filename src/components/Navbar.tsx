
import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-brand-darkblue text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm flex items-center mb-2 md:mb-0">
            <span className="flex items-center mr-6">
              <Phone size={16} className="mr-2" />
              <a href="tel:+919896677494">+91-9896677494</a>
            </span>
            <span className="flex items-center hidden md:flex">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@shyamdistributor.com">info@shyamdistributor.com</a>
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <Link to="/" className="text-2xl font-bold text-brand-darkblue">
            Shyam<span className="text-brand-red">Distributor</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-brand-red transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium hover:text-brand-red transition-colors">
              About
            </Link>
            <Link to="/services" className="font-medium hover:text-brand-red transition-colors">
              Services
            </Link>
            <Link to="/products" className="font-medium hover:text-brand-red transition-colors">
              Products
            </Link>
            <Link to="/contact" className="font-medium hover:text-brand-red transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t py-2">
            <div className="container mx-auto px-4">
              <Link
                to="/"
                className="block py-2 font-medium hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 font-medium hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block py-2 font-medium hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/products"
                className="block py-2 font-medium hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="block py-2 font-medium hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
