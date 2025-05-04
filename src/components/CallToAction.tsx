
import { FileText } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="relative py-20 bg-gray-900 bg-opacity-80 bg-blend-multiply bg-center bg-cover" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1518979413349-56a8313a48b6?q=80&w=1920&auto=format&fit=crop')"
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-brand-red text-xl font-medium mb-2">Don't Know What To Start With?</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Solutions For All Distribution Services
            </h2>
            <ul className="text-white space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2 text-brand-red">•</span>
                Pharmaceutical Product Distribution
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-red">•</span>
                Kitchen Appliances Supply Chain
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-red">•</span>
                Storage and Warehousing Solutions
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-red">•</span>
                Inventory Management Services
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-red">•</span>
                Logistics and Transportation
              </li>
            </ul>
            <a href="/contact" className="btn-primary inline-flex items-center">
              <span>KNOW MORE</span>
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-brand-red text-xl font-medium mb-2">Free Consultation</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-darkblue mb-6">
              Get A Free Quote
            </h2>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border rounded-md" 
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border rounded-md" 
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border rounded-md" 
                  required
                />
              </div>
              <div>
                <select className="w-full p-3 border rounded-md" required>
                  <option value="">Select Service</option>
                  <option value="pharmaceutical">Pharmaceutical Distribution</option>
                  <option value="kitchen">Kitchen Appliances Distribution</option>
                  <option value="warehouse">Warehousing</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <FileText className="mr-2" size={18} />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
