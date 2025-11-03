import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { t } = useLanguage();

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
      </div>

      {/* Large Image Section - Full Width */}
      <section className="w-full">
        <img 
          src="/jamie-street-tb5A-QTI6xg-unsplash.jpg" 
          alt="Fresh berries in a heart-shaped bowl" 
          className="w-full h-auto object-cover"
        />
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Honduras Project Feature Block */}
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
    </div>
  );
};

export default Home;