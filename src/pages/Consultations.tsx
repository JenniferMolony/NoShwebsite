import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, Phone, Mail, CircleCheck as CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Consultations: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'online' | 'in-person' | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your booking request! I\'ll contact you within 24 hours to confirm your appointment.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">Nutrition Consultations</span>
              <span className="text-secondary font-bold font-body block mt-2">Honest support tailored to real life</span>
            </h1>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 text-center shadow-lg rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Nutritional Assessment</h3>
              <p className="text-primary leading-relaxed font-body">
                Physical, emotional, motivational — understanding your unique relationship with food and nutrition.
              </p>
            </div>
            
            <div className="bg-white p-12 text-center shadow-lg rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">3 Monthly Goals</h3>
              <p className="text-primary leading-relaxed font-body">
                Non-clinical, collaborative, realistic goals that work with your lifestyle and preferences.
              </p>
            </div>
            
            <div className="bg-white p-12 text-center shadow-lg rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Ongoing Support & Progress Check-ins</h3>
              <p className="text-primary leading-relaxed font-body">
                Gentle accountability for progress — regular check-ins to adjust goals and provide continuous support.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Interface */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">Book Your Consultation</h2>
          
          {/* Service Selection */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <button
              onClick={() => setSelectedService('online')}
              className={`p-8 border-2 rounded-lg text-left transition-all duration-300 ${
                selectedService === 'online'
                  ? 'border-primary bg-primary/5'
                  : 'border-secondary/30 bg-white hover:border-primary/50'
              }`}
            >
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-display font-bold text-primary">Online Consultation</h3>
              </div>
              <p className="text-primary font-body mb-4">Secure video call consultation from anywhere</p>
              <p className="text-primary font-body font-semibold">Perfect for international clients</p>
            </button>

            <button
              onClick={() => setSelectedService('in-person')}
              className={`p-8 border-2 rounded-lg text-left transition-all duration-300 ${
                selectedService === 'in-person'
                  ? 'border-primary bg-primary/5'
                  : 'border-secondary/30 bg-white hover:border-primary/50'
              }`}
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-display font-bold text-primary">In-Person Consultation</h3>
              </div>
              <p className="text-primary font-body mb-4">Face-to-face consultation in Zamora, Spain</p>
              <p className="text-primary font-body font-semibold">Personalized, hands-on guidance</p>
            </button>
          </div>

          {/* Booking Form */}
          {selectedService && (
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-3xl font-display font-bold text-primary mb-8">
                Book Your {selectedService === 'online' ? 'Online' : 'In-Person'} Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block font-nav font-semibold text-primary mb-4 text-xl">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-nav font-semibold text-primary mb-4 text-xl">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-nav font-semibold text-primary mb-4 text-xl">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="date" className="block font-nav font-semibold text-primary mb-4 text-xl">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block font-nav font-semibold text-primary mb-4 text-xl">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      required
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-nav font-semibold text-primary mb-4 text-xl">
                    Tell me about your nutrition goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to focus on in our consultation?"
                    className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-nav font-semibold py-4 px-8 rounded-lg hover:bg-primary/80 focus:outline-none transition-colors duration-200 text-xl"
                >
                  Request Consultation Booking
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Consultation Options */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">Consultation Options</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-display font-bold text-primary">Initial Consultation</h3>
              </div>
              <p className="text-xl text-primary mb-6 font-body">60 minutes</p>
              <p className="text-primary leading-relaxed font-body">
                Complete assessment and personalized plan development. We'll review your health history, 
                current diet, lifestyle factors, and create a tailored nutrition strategy that works for your life.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-display font-bold text-primary">Follow-up Sessions</h3>
              </div>
              <p className="text-xl text-primary mb-6 font-body">30 minutes</p>
              <p className="text-primary leading-relaxed font-body">
                Progress review and plan adjustments. We'll assess how you're doing with your nutrition goals, 
                address any challenges, and refine your approach for continued success.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">Contact for Booking</h2>
          
          {/* Important Disclaimer */}
          <div className="mb-12 p-6 bg-primary/5 rounded-lg">
            <p className="text-primary font-body italic text-lg">
              <strong>Important:</strong> Not clinical dietetics. Nutrition and lifestyle guidance and support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Spain</h3>
              <p className="text-primary font-body text-xl">664 016 423</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">International</h3>
              <p className="text-primary font-body text-xl">+353 85 789 9427</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Email</h3>
              <p className="text-primary font-body text-lg">Jenni.NoShNutrition@outlook.com</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-lg">
            <p className="text-primary font-body italic text-xl">
              "Available in-person in Ciudad Zamora or online via secure video call"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Consultations;