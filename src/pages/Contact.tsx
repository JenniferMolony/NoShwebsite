import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { theme } = useTheme();

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
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">Get in Touch</span>
              <span className="text-secondary font-bold font-body block mt-2">Questions about nutrition? Interested in professional collaboration? I'd love to hear from you.</span>
            </h1>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-12 space-y-12">
              <h2 className="text-4xl font-display font-bold text-primary">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <p className="font-display font-bold text-primary text-xl">Email</p>
                    <p className="text-primary text-xl font-body">hello@NoSh-nutrition.com</p>
                    <p className="text-primary mt-2 font-body">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <p className="font-display font-bold text-primary text-xl">Location</p>
                    <p className="text-primary text-xl font-body">Ireland & UK</p>
                    <p className="text-primary mt-2 font-body">
                      Zamora, Spain from 2026
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <p className="font-display font-bold text-primary text-xl">Response Time</p>
                    <p className="text-primary text-xl font-body">1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-12 bg-white border-none shadow-none p-12">
              <h3 className="font-display font-bold text-primary mb-8 text-2xl">What I Can Help With</h3>
              <ul className="space-y-4 text-primary font-body">
                <li><span className="crosshatch-separator"></span>Nutrition questions and guidance</li>
                <li><span className="crosshatch-separator"></span>Professional health communication</li>
                <li><span className="crosshatch-separator"></span>Content writing and consultation</li>
                <li><span className="crosshatch-separator"></span>Speaking engagements</li>
                <li><span className="crosshatch-separator"></span>Media inquiries</li>
                <li><span className="crosshatch-separator"></span>Collaboration opportunities</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border-none shadow-none p-12">
              <h2 className="text-4xl font-display font-bold text-primary mb-12">Send a Message</h2>
              
              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className="block font-nav font-semibold text-primary mb-4 text-xl">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-secondary/30 bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-nav font-semibold text-primary mb-4 text-xl">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-secondary/30 bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-nav font-semibold text-primary mb-4 text-xl">
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
                    className="w-full px-4 py-4 border border-secondary/30 bg-white text-primary focus:outline-none focus:border-primary text-xl font-body resize-none"
                  />
                </div>
                
                <div>
                  <p className="text-primary font-body">
                    * Required fields. I respect your privacy and will never share your contact information.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-nav font-semibold hover:bg-primary/80 focus:outline-none transition-colors duration-200 text-xl"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-24 bg-white p-12 text-center">
          <h3 className="text-4xl font-display font-bold text-primary mb-8">
            Professional Inquiries Welcome
          </h3>
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed font-body">
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