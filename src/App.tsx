import React, { useState } from 'react';
import { Plane as Plant2, Clock, Phone, Mail, Instagram, CheckCircle2, Users, Award, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gardenSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Garden Into a Lush Oasis
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert Advice Tailored to Your Space
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Expert Gardeners</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Certified</span>
            </div>
          </div>
          <a 
            href="#consultation"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Consultation Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Plant2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Personalized Plans</h3>
              <p>Custom garden designs tailored to your climate and soil conditions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Save Time & Money</h3>
              <p>Proven strategies to maximize your garden's potential efficiently.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p>Professional advice on organic pest control and water conservation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg mb-4">
                "My backyard went from dull to vibrant in just 3 weeks! The advice was practical and easy to follow."
              </p>
              <p className="font-semibold">- Sarah T.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg mb-4">
                "The virtual consultation was incredibly helpful. I now have a thriving vegetable garden!"
              </p>
              <p className="font-semibold">- Michael R.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div id="consultation" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-center text-lg mb-8">
            Spots fill fast—schedule your free call today!
          </p>
          <form 
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="gardenSize">
                Garden Size
              </label>
              <select
                id="gardenSize"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.gardenSize}
                onChange={(e) => setFormData({...formData, gardenSize: e.target.value})}
                required
              >
                <option value="">Select size</option>
                <option value="small">Small (Under 500 sq ft)</option>
                <option value="medium">Medium (500-2000 sq ft)</option>
                <option value="large">Large (Over 2000 sq ft)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule Consultation
            </button>
            <p className="text-sm text-gray-600 mt-4 text-center">
              We'll never share your info. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                How much does a consultation cost?
              </h3>
              <p>First 15 minutes free, then $50/hour for detailed guidance.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Do you offer virtual consultations?
              </h3>
              <p>Yes! We provide remote advice via Zoom for your convenience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:hello@gardenexperts.com">hello@gardenexperts.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+1234567890">(123) 456-7890</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Garden Experts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;