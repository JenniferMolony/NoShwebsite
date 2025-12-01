import React from 'react';
import { GraduationCap, Heart, Globe, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">{t('about.title')}</span>
              <span className="text-secondary font-bold font-body block mt-2">{t('about.subtitle')}</span>
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="space-y-24">
          {/* About Jenni */}
          <section className="bg-white border-none shadow-none p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="md:col-span-1 order-first md:order-first">
                <img
                  src="/mnt/data/Jennifer Molony_nosh.png"
                  alt="Jenni Molony"
                  className="w-full h-auto rounded-2xl shadow-sm object-cover"
                />
              </div>

              <div className="md:col-span-1 order-last md:order-last">
                <h2 className="text-4xl font-display font-bold text-primary mb-8">{t('about.meet.title')}</h2>
                <p className="text-xl text-primary mb-8 leading-relaxed font-body">
                  {t('about.meet.intro')}
                </p>

                {/* Professional Experience Highlight */}
                <div className="mb-8 p-6 bg-primary/5 rounded-lg">
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">{t('about.experience.title')}</h4>
                  <ul className="space-y-2 text-primary font-body">
                    <li className="flex items-center">
                      <span className="crosshatch-separator mr-3"></span>
                      {t('about.experience.1')}
                    </li>
                    <li className="flex items-center">
                      <span className="crosshatch-separator mr-3"></span>
                      {t('about.experience.2')}
                    </li>
                    <li className="flex items-center">
                      <span className="crosshatch-separator mr-3"></span>
                      {t('about.experience.3')}
                    </li>
                    <li className="flex items-center">
                      <span className="crosshatch-separator mr-3"></span>
                      {t('about.experience.4')}
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-primary mb-12 leading-relaxed font-body">
                  {t('about.mission.text')}
                </p>

                {/* Enhanced Mission Statement */}
                <div className="p-6 bg-white border-l-4 border-primary">
                  <p className="text-xl text-primary font-body italic">
                    "{t('about.quote')}"
                  </p>
                </div>

                {/* Credentials */}
                <div className="space-y-6">
                  <div className="flex items-center text-primary">
                    <GraduationCap className="h-6 w-6 text-primary mr-4" />
                    <span className="text-xl font-body">{t('about.credentials.1')}</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Heart className="h-6 w-6 text-primary mr-4" />
                    <span className="text-xl font-body">{t('about.credentials.2')}</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Globe className="h-6 w-6 text-primary mr-4" />
                    <span className="text-xl font-body">{t('about.credentials.3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why NoSh */}
          <section className="bg-white p-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-12">{t('about.why.title')}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('about.why.name.title')}</h3>
                <p className="text-xl text-primary mb-8 leading-relaxed font-body">
                  {t('about.why.name.text')}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('about.why.approach.title')}</h3>
                <p className="text-xl text-primary mb-8 leading-relaxed font-body">
                  {t('about.why.approach.text')}
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white border-none shadow-none">
              <p className="text-xl text-primary font-body italic">
                "{t('about.warning')}"
              </p>
            </div>
          </section>

          {/* Mission & Values */}
          <section>
            <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">{t('about.mission.title')}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white border-none shadow-none p-12 text-center">
                <div className="w-16 h-16 bg-white text-primary flex items-center justify-center mb-8 mx-auto">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('about.evidence.title')}</h3>
                <p className="text-primary leading-relaxed font-body">
                  {t('about.evidence.text')}
                </p>
              </div>

              <div className="bg-white border-none shadow-none p-12 text-center">
                <div className="w-16 h-16 bg-white text-primary flex items-center justify-center mb-8 mx-auto">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('about.accessible.title')}</h3>
                <p className="text-primary leading-relaxed font-body">
                  {t('about.accessible.text')}
                </p>
              </div>

              <div className="bg-white border-none shadow-none p-12 text-center">
                <div className="w-16 h-16 bg-white text-primary flex items-center justify-center mb-8 mx-auto">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('about.nonjudgmental.title')}</h3>
                <p className="text-primary leading-relaxed font-body">
                  {t('about.nonjudgmental.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Future Plans */}
          <section>
            <img
              src="/zamora.jpg"
              alt="Historic town of Zamora, Spain with traditional architecture and river reflections"
              className="w-full h-auto"
            />
            <div className="bg-white p-12">
              <div className="flex items-center text-primary">
                <MapPin className="h-6 w-6 mr-3 text-primary" />
                <span className="text-lg font-body">
                  {t('language') === 'en' ? 'Zamora, Spain - Opening 2026' : 'Zamora, España - Apertura 2026'}
                </span>
              </div>
              <h2 className="text-4xl font-display font-bold text-primary mb-2">{t('about.future.title')}</h2>
              <p className="text-xl text-primary mb-12 leading-relaxed font-body">
                {t('about.future.text')}
              </p>
            </div>
          </section>

          {/* Professional Services */}
          <section className="text-center">
            <h2 className="text-4xl font-display font-bold text-primary mb-8">{t('about.services.title')}</h2>
            <p className="text-xl text-primary mb-12 max-w-3xl mx-auto leading-relaxed font-body">
              {t('about.services.text')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-8 py-4 bg-white text-primary font-body font-semibold crosshatch-border-bottom">
                {t('about.services.communication')}
              </span>
              <span className="px-8 py-4 bg-white text-primary font-body font-semibold crosshatch-border-bottom">
                {t('about.services.writing')}
              </span>
              <span className="px-8 py-4 bg-white text-primary font-body font-semibold crosshatch-border-bottom">
                {t('about.services.consultation')}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;