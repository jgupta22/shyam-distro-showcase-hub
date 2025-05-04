
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-darkblue text-white pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">About</h3>
            <p className="mb-6">
              Shyam Distributor is a leading distribution company specializing in pharmaceuticals 
              and kitchen appliances, providing efficient and reliable distribution services 
              across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-brand-red">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-brand-red">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-brand-red">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-brand-red">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-brand-red transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-brand-red transition-colors">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-brand-red transition-colors">Services</a>
              </li>
              <li>
                <a href="/products" className="hover:text-brand-red transition-colors">Products</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-brand-red transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services#pharmaceutical" className="hover:text-brand-red transition-colors">Pharmaceutical Distribution</a>
              </li>
              <li>
                <a href="/services#appliances" className="hover:text-brand-red transition-colors">Kitchen Appliances Distribution</a>
              </li>
              <li>
                <a href="/services#warehousing" className="hover:text-brand-red transition-colors">Warehousing Solutions</a>
              </li>
              <li>
                <a href="/services#inventory" className="hover:text-brand-red transition-colors">Inventory Management</a>
              </li>
              <li>
                <a href="/services#logistics" className="hover:text-brand-red transition-colors">Logistics Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-brand-red" />
                <div>
                  <p>Call Us:</p>
                  <p className="font-medium">+91-9896677494</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-brand-red" />
                <div>
                  <p>Email:</p>
                  <p className="font-medium">info@shyamdistributor.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-brand-red" />
                <div>
                  <p>Address:</p>
                  <p className="font-medium">
                    123, Main Street, Delhi NCR, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © {new Date().getFullYear()} Shyam Distributor - All Rights Reserved</p>
          <p className="mt-2 md:mt-0">Designed & Developed by <a href="#" className="text-brand-red">Lovable</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
