
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      rating: 5,
      text: "Shyam Distributor has consistently delivered pharmaceutical supplies to our clinic on time, every time. Their efficiency and reliability have made them our preferred distributor for all medical supplies.",
      image: "/lovable-uploads/ec818f10-9c10-4cda-922e-278b1ade6208.png"
    },
    {
      name: "Priya Malhotra",
      rating: 4,
      text: "We've been working with Shyam Distributor for our kitchen appliance store for over 3 years now. Their customer service is excellent and they always resolve any issues promptly.",
      image: "/lovable-uploads/ec818f10-9c10-4cda-922e-278b1ade6208.png"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "As a pharmacy owner, I appreciate Shyam Distributor's attention to detail and commitment to quality. Their pharmaceutical distribution service is unmatched in reliability and professionalism.",
      image: "/lovable-uploads/ec818f10-9c10-4cda-922e-278b1ade6208.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">People Say The Nicest Things</h2>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} 
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <h3 className="text-center text-lg font-bold text-brand-darkblue mb-2">{testimonial.name}</h3>
                  <p className="text-center text-gray-600">{testimonial.text}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-brand-red" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
