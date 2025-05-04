
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full bg-center bg-cover h-[600px]" style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1586528116103-9f5bf5230738?q=80&w=1920&auto=format&fit=crop')",
      backgroundPosition: "center"
    }}>
      <div className="container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Shyam Distributor : Pharmaceutical & Kitchen Appliance Distribution
          </h1>
          <p className="text-xl text-white mb-8">
            Trusted Distribution Partner for Healthcare & Home Needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919896677494"
              className="btn-primary flex items-center justify-center"
            >
              <Phone className="mr-2" size={18} />
              Call Now: +91-9896677494
            </a>
            <a
              href="#service-request"
              className="bg-white text-brand-darkblue px-6 py-3 rounded-md hover:bg-gray-100 transition-all font-medium flex items-center justify-center"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
