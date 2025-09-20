import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented in Phase 2
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-navy mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Questions about nutrition? Interested in professional collaboration? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 space-y-8">
              <h2 className="text-2xl font-bold text-navy">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-peach mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-navy text-lg">Email</p>
                    <p className="text-gray-700 text-lg">hello@nosh-nutrition.com</p>
                    <p className="text-gray-500 mt-2">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-navy text-lg">Location</p>
                    <p className="text-gray-700 text-lg">Ireland & UK</p>
                    <p className="text-gray-500 mt-2">
                      Zamora, Spain from 2026
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-navy text-lg">Response Time</p>
                    <p className="text-gray-700 text-lg">1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-navy mb-6 text-xl">What I Can Help With</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Nutrition questions and guidance</li>
                <li>• Professional health communication</li>
                <li>• Content writing and consultation</li>
                <li>• Speaking engagements</li>
                <li>• Media inquiries</li>
                <li>• Collaboration opportunities</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
              <h2 className="text-2xl font-bold text-navy mb-8">Send a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-charcoal mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach focus:border-peach text-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-semibold text-charcoal mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach focus:border-peach text-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-semibold text-charcoal mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me how I can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach focus:border-peach text-lg resize-none"
                  />
                </div>
                
                <div>
                  <p className="text-gray-600">
                    * Required fields. I respect your privacy and will never share your contact information.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-peach text-white font-semibold rounded-lg hover:bg-peach-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peach transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-navy mb-6">
            Professional Inquiries Welcome
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm available for health communication projects, nutrition content creation, 
            professional consultations, and speaking engagements. Whether you're a 
            healthcare organization, media outlet, or business looking for evidence-based 
            nutrition expertise, I'd be happy to discuss how we can work together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;