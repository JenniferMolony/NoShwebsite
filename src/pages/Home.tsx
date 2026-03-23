import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">{t('home.hero.title')}</span>
            </h1>
            
            <p className="text-xl text-primary font-body mb-12 max-w-4xl leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link
                to="/consultations"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-nav font-semibold hover:bg-primary/80 transition-colors duration-200 text-xl"
              >
                {t('home.hero.consultation.button')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-nav font-medium hover:bg-primary hover:text-white transition-colors duration-200 text-lg"
              >
                {t('home.hero.about.button')}
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Media */}
        <section className="w-full">
          <img
            src="/berries.png"
            alt={language === 'en'
              ? 'Fresh berries in a heart-shaped bowl'
              : 'Frutos rojos en un cuenco con forma de corazón'}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '16px' }}
          />
        </section>
      </div>

        {/* Honduras Project Feature Block */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <section className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-primary mb-4">{t('home.impact.title')}</h2>
            </div>
            
            <div className="bg-white p-12 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">{t('home.impact.headline')}</h3>
              <p className="text-xl text-primary mb-8 max-w-3xl mx-auto leading-relaxed font-body">
                {t('home.impact.text')}
              </p>
              <Link
                to="/collaborations"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-nav font-semibold hover:bg-primary/80 transition-colors duration-200 text-xl"
              >
                {t('home.impact.button')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

        {/* Client Testimonials */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <section className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-primary mb-4">{t('home.testimonials.title')}</h2>
              </div>

              <div className="bg-white p-12 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src="/client-photo.jpeg"
                      alt="Client photo"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <h3 className="text-xl font-display font-bold text-primary mb-4">
                      Exceptional Expertise and Genuine Empathy – The Perfect Support System
                    </h3>
                    <p className="text-primary font-body leading-relaxed mb-4 italic">
                      "I cannot recommend Jenni from Nosh Nutrition highly enough. She provided me with outstanding support throughout my weight loss journey with Wegovy. Jenni is not only highly knowledgeable in her field but also has a remarkable talent for sharing her expertise in a way that is clear, practical, and easy to understand."
                    </p>
                    <p className="text-primary font-body leading-relaxed mb-4 italic">
                      "What I appreciated most was her motivating spirit and her ability to truly listen. She possesses a deep sense of empathy and a unique gift for putting herself in her clients' shoes—I felt understood and supported at every step. Her advice was always personalized, realistic for everyday life, and packed with actionable tips."
                    </p>
                    <p className="text-primary font-body leading-relaxed mb-4 italic">
                      "Thanks to her guidance, I feel perfectly prepared for the time after Wegovy. She also provided incredibly helpful strategies for heart-healthy and anti-inflammatory nutrition, which have been a total game-changer for me."
                    </p>
                    <p className="text-primary font-body leading-relaxed italic">
                      "Thank you, Jenni, for your wonderful support on my path to better health!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default Home;
