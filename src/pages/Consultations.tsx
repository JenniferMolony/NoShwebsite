import React, { useState } from 'react';
import { Clock, Video, MapPin, Phone, Mail, CircleCheck as CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { t } = useLanguage();

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
              <span className="text-primary font-display font-bold block">{t('consultations.title')}</span>
              <span className="text-secondary font-bold font-body block mt-2">{t('consultations.subtitle')}</span>
            </h1>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">{t('consultations.expect.title')}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 text-center shadow-lg rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('consultations.expect.assessment.title')}</h3>
              <p className="text-primary leading-relaxed font-body">
                {t('consultations.expect.assessment.text')}
              </p>
            </div>
            
            <div className="bg-white p-12 text-center shadow-lg rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('consultations.expect.goals.title')}</h3>
              <p className="text-primary leading-relaxed font-body">
                {t('consultations.expect.goals.text')}
              </p>
            </div>
            
            <div className="bg-white p-12 text-center shadow-lg rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('consultations.expect.support.title')}</h3>
              <p className="text-primary leading-relaxed font-body">
                {t('consultations.expect.support.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Booking Interface */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">{t('consultations.book.title')}</h2>
          
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
                <h3 className="text-2xl font-display font-bold text-primary">{t('consultations.online.title')}</h3>
              </div>
              <p className="text-primary font-body mb-4">{t('consultations.online.text')}</p>
              <p className="text-primary font-body font-semibold">{t('consultations.online.perfect')}</p>
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
                <h3 className="text-2xl font-display font-bold text-primary">{t('consultations.inperson.title')}</h3>
              </div>
              <p className="text-primary font-body mb-4">{t('consultations.inperson.text')}</p>
              <p className="text-primary font-body font-semibold">{t('consultations.inperson.perfect')}</p>
            </button>
          </div>

          {/* Booking Form */}
          {selectedService && (
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-3xl font-display font-bold text-primary mb-8">
                {t('consultations.book.title')} - {selectedService === 'online' ? t('consultations.online.title') : t('consultations.inperson.title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block font-nav font-semibold text-primary mb-4 text-xl">
                      {t('consultations.form.name')}
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
                      {t('consultations.form.email')}
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
                    {t('consultations.form.phone')}
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
                      {t('consultations.form.date')}
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
                      {t('consultations.form.time')}
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
                    {t('consultations.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('consultations.form.placeholder')}
                    className="w-full px-4 py-4 border border-secondary/30 rounded-lg bg-white text-primary focus:outline-none focus:border-primary text-xl font-body resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-nav font-semibold py-4 px-8 rounded-lg hover:bg-primary/80 focus:outline-none transition-colors duration-200 text-xl"
                >
                  {t('consultations.form.submit')}
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Consultation Options */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">{t('consultations.options.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-display font-bold text-primary">{t('consultations.initial.title')}</h3>
              </div>
              <p className="text-xl text-primary mb-6 font-body">{t('consultations.initial.duration')}</p>
              <p className="text-primary leading-relaxed font-body">
                {t('consultations.initial.text')}
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-display font-bold text-primary">{t('consultations.followup.title')}</h3>
              </div>
              <p className="text-xl text-primary mb-6 font-body">{t('consultations.followup.duration')}</p>
              <p className="text-primary leading-relaxed font-body">
                {t('consultations.followup.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">{t('consultations.contact.title')}</h2>
          
          {/* Important Disclaimer */}
          <div className="mb-12 p-6 bg-primary/5 rounded-lg">
            <p className="text-primary font-body italic text-lg">
              <strong>{t('consultations.disclaimer').split(':')[0]}:</strong> {t('consultations.disclaimer').split(':')[1]}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">
                {t('consultations.phone.spain').split(':')[0]}
              </h3>
              <p className="text-primary font-body text-xl">{t('consultations.phone.spain').split(':')[1].trim()}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">
                {t('consultations.phone.international').split(':')[0]}
              </h3>
              <p className="text-primary font-body text-xl">{t('consultations.phone.international').split(':')[1].trim()}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Email</h3>
              <p className="text-primary font-body text-lg">{t('footer.contact')}</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-lg">
            <p className="text-primary font-body italic text-xl">
              "{t('consultations.available')}"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Consultations;