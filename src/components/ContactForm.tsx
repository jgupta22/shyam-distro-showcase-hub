
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request submitted!",
        description: "We'll get back to you as soon as possible.",
      });
      setName('');
      setPhone('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div id="service-request" className="bg-white py-12 px-4 md:px-8 rounded-lg shadow-lg -mt-16 relative z-10 mx-4 md:mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-brand-red text-xl font-medium mb-2">Quick Service Request</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-6">Send Inquiry Request</h2>
          <p className="text-gray-600 mb-4">
            Fill out this quick form and our team will reach out to discuss how we can support 
            your distribution needs for pharmaceuticals and kitchen appliances.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 border rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 border rounded-md"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                disabled={loading}
                className={`btn-primary w-full md:w-auto ${loading ? 'opacity-75' : ''}`}
              >
                {loading ? 'Sending...' : 'SEND'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
