
const ClientsSection = () => {
  const clients = [
    {
      name: "Sun Pharma",
      logo: "/lovable-uploads/16a38959-1019-4364-9e24-e4b55cbae6a9.png",
    },
    {
      name: "Dr. Reddy's",
      logo: "/lovable-uploads/16a38959-1019-4364-9e24-e4b55cbae6a9.png",
    },
    {
      name: "Philips",
      logo: "/lovable-uploads/16a38959-1019-4364-9e24-e4b55cbae6a9.png",
    },
    {
      name: "Cipla",
      logo: "/lovable-uploads/16a38959-1019-4364-9e24-e4b55cbae6a9.png",
    },
    {
      name: "Prestige",
      logo: "/lovable-uploads/16a38959-1019-4364-9e24-e4b55cbae6a9.png",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-brand-darkblue mb-12">OUR CLIENTS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
