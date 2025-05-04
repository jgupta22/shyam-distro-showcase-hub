
const ServicesSection = () => {
  const services = [
    {
      title: "Pharmaceutical Distribution",
      description: "Shyam Distributor offers comprehensive pharmaceutical distribution services, ensuring medications and medical supplies reach pharmacies, hospitals, and healthcare facilities efficiently.",
      image: "/lovable-uploads/4fde3601-efdd-47ce-a748-6b5a512c4f82.png"
    },
    {
      title: "Kitchen Appliance Distribution",
      description: "We provide reliable distribution services for all types of kitchen appliances, connecting manufacturers with retailers and ensuring products reach customers in perfect condition.",
      image: "/lovable-uploads/46ceccc9-eea6-4e59-9cce-db930b892ae1.png"
    },
    {
      title: "Warehousing Solutions",
      description: "Our state-of-the-art warehousing facilities ensure proper storage of both pharmaceutical products and kitchen appliances with inventory management and quality control.",
      image: "/lovable-uploads/11fd0669-3627-4874-996f-b64098da0445.png"
    }
  ];

  return (
    <section className="bg-gray-100 section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Our Services</h3>
          <h2 className="section-title">
            Shyam Distributor
          </h2>
          <p className="text-xl text-brand-darkblue font-medium">
            Pharmaceutical & Kitchen Appliance Distribution Expert
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-darkblue mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand-red font-medium hover:underline inline-block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
