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
            {/* Service Categories */}
            <div className="bg-white p-12 mb-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-display font-bold text-primary mb-8">How I Can Help</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="crosshatch-separator mr-4 mt-2"></span>
                  <div>
                    <h3 className="font-display font-bold text-primary text-xl mb-2">Request a Consultation</h3>
                    <p className="text-primary font-body">One-to-one nutrition support - <Link to="/consultations" className="text-primary hover:text-primary/80 underline">visit our Consultations page</Link></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="crosshatch-separator mr-4 mt-2"></span>
                  <div>
                    <h3 className="font-display font-bold text-primary text-xl mb-2">Collaboration Inquiry</h3>
                    <p className="text-primary font-body">NGOs and programs seeking nutrition support - <Link to="/collaborations" className="text-primary hover:text-primary/80 underline">view our Collaborations page</Link></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="crosshatch-separator mr-4 mt-2"></span>
                  <div>
                    <h3 className="font-display font-bold text-primary text-xl mb-2">General Questions</h3>
                    <p className="text-primary font-body">Speaking engagements, media inquiries, or other questions</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-12 grid md:grid-cols-3 gap-4">
                <Link
                  to="/consultations"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-nav font-semibold hover:bg-primary/80 transition-colors duration-200 text-center"
                >
                  Request Consultation
                </Link>
                <Link
                  to="/collaborations"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-nav font-semibold hover:bg-primary hover:text-white transition-colors duration-200 text-center"
                >
                  Collaboration Inquiry
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-primary font-nav font-semibold hover:bg-secondary hover:text-white transition-colors duration-200 text-center"
                >
                  General Questions
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-12 space-y-12">
              <h2 className="text-4xl font-display font-bold text-primary">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <p className="font-display font-bold text-primary text-xl">Email</p>
                    <p className="text-primary text-xl font-body">Jenni.NoShNutrition@outlook.com</p>
                    <p className="text-primary mt-2 font-body">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <p className="font-display font-bold text-primary text-xl">Email</p>
                    <p className="text-primary text-xl font-body">Jenni.NoShNutrition@outlook.com</p>
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
              <h3 className="font-display font-bold text-primary mb-8 text-2xl">Professional Focus Areas</h3>
              <ul className="space-y-4 text-primary font-body">
                <li><span className="crosshatch-separator"></span>Evidence-based nutrition consultation</li>
                <li><span className="crosshatch-separator"></span>Community nutrition program development</li>
                <li><span className="crosshatch-separator"></span>Professional health communication</li>
                <li><span className="crosshatch-separator"></span>Nutrition education and training</li>
                <li><span className="crosshatch-separator"></span>Grant writing and program evaluation</li>
                <li><span className="crosshatch-separator"></span>International development nutrition projects</li>
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