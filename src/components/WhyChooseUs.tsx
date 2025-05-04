
import { Award, HeartHandshake, Clock, Phone, MessageSquare, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="text-brand-red mb-4" size={40} />,
      title: "Quality Assurance",
      description: "We partner with trusted manufacturers to ensure all products meet the highest quality standards before distribution."
    },
    {
      icon: <HeartHandshake className="text-brand-red mb-4" size={40} />,
      title: "Excellent customer service",
      description: "Our customer service executives are proactive and always responsive to client's needs, delivering results as per requirements."
    },
    {
      icon: <MessageSquare className="text-brand-red mb-4" size={40} />,
      title: "Effective Communication",
      description: "We maintain transparent communication with clients throughout the distribution process for efficient collaboration."
    },
    {
      icon: <Clock className="text-brand-red mb-4" size={40} />,
      title: "Fast Delivery",
      description: "On-time guaranteed delivery to distributors, wholesalers, retailers and end users with personalized care throughout."
    },
    {
      icon: <Phone className="text-brand-red mb-4" size={40} />,
      title: "24/7 Support",
      description: "Our dedicated team is available round-the-clock to address any queries or emergencies that may arise."
    },
    {
      icon: <DollarSign className="text-brand-red mb-4" size={40} />,
      title: "Affordable Pricing",
      description: "We provide cost-effective distribution solutions without compromising on quality or efficiency."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Why Choose Us</h3>
          <h2 className="section-title">Six Reasons For People Choosing Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="text-center">
                {reason.icon}
                <h3 className="text-xl font-bold text-brand-darkblue mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
