
import { Award, RefreshCw } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/40e1cfde-0683-42b6-a2df-7493f130fa1c.png"
              alt="Warehouse interior"
              className="rounded-lg shadow-md w-full h-auto object-cover col-span-2"
            />
            <img
              src="/lovable-uploads/46ceccc9-eea6-4e59-9cce-db930b892ae1.png"
              alt="Warehouse worker"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <img
              src="/lovable-uploads/4fde3601-efdd-47ce-a748-6b5a512c4f82.png"
              alt="Pharmaceutical inventory"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="section-subtitle">About Company</h3>
          <h2 className="section-title mb-6">
            Shyam Distributor: Pharmaceutical & Kitchen Appliances Distribution Expert
          </h2>

          <p className="text-gray-700 mb-6">
            Shyam Distributor is a leading distribution company specializing in pharmaceuticals and kitchen appliances. 
            With our extensive experience and reliable logistics network, we ensure timely and efficient delivery 
            of products to retailers, wholesalers, and end consumers.
          </p>

          <p className="text-gray-700 mb-6">
            We pride ourselves on maintaining strong relationships with manufacturers and vendors, 
            allowing us to offer competitive pricing and high-quality products to our clients. Our dedicated 
            team works tirelessly to ensure that all distribution operations run smoothly from warehousing 
            to final delivery.
          </p>

          <div className="flex items-center mb-4">
            <Award className="text-brand-red mr-3" size={24} />
            <span className="font-medium">Certified Distribution Company</span>
          </div>

          <div className="flex items-center">
            <RefreshCw className="text-brand-red mr-3" size={24} />
            <span className="font-medium">24/7 Supply Chain Management</span>
          </div>

          <div className="mt-8">
            <a href="/about" className="btn-primary">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
