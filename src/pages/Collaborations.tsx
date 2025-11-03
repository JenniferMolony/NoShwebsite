import React from 'react';
import { Users, Target, TrendingUp, Award, Mail, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Collaborations: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">{t('collaborations.title')}</span>
              <span className="text-secondary font-bold font-body block mt-2">{t('collaborations.subtitle')}</span>
            </h1>
          </div>
        </section>

        {/* Featured Collaboration */}
        <section className="mb-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary/5 p-12">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-primary mr-4" />
                <span className="text-primary font-nav font-semibold text-xl">{t('collaborations.featured')}</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-primary mb-8">{t('collaborations.honduras.title')}</h2>
            </div>
            
            <div className="p-12">
              <div className="mb-12">
                <h3 className="text-3xl font-display font-bold text-primary mb-6">
                  {t('collaborations.honduras.subtitle')}
                </h3>
                <p className="text-xl text-primary leading-relaxed font-body mb-8">
                  {t('collaborations.honduras.description')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto rounded-full">
                    <Target className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.assessment.title')}</h4>
                  <p className="text-primary font-body">
                    {t('collaborations.assessment.text')}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto rounded-full">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.enhancement.title')}</h4>
                  <p className="text-primary font-body">
                    {t('collaborations.enhancement.text')}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto rounded-full">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.impact.title')}</h4>
                  <p className="text-primary font-body">
                    {t('collaborations.impact.text')}
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <h4 className="font-display font-bold text-primary mb-4 text-2xl">{t('collaborations.achievements.title')}</h4>
                <ul className="space-y-3 text-primary font-body text-lg">
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    {t('collaborations.achievements.1')}
                  </li>
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    {t('collaborations.achievements.2')}
                  </li>
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    {t('collaborations.achievements.3')}
                  </li>
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    {t('collaborations.achievements.4')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Approach */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">{t('collaborations.approach.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('collaborations.evidence.title')}</h3>
              <p className="text-primary leading-relaxed font-body mb-6">
                {t('collaborations.evidence.text1')}
              </p>
              <p className="text-primary leading-relaxed font-body">
                {t('collaborations.evidence.text2')}
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">{t('collaborations.cultural.title')}</h3>
              <p className="text-primary leading-relaxed font-body mb-6">
                {t('collaborations.cultural.text1')}
              </p>
              <p className="text-primary leading-relaxed font-body">
                {t('collaborations.cultural.text2')}
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">{t('collaborations.services.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.service.assessment')}</h3>
              <p className="text-primary font-body">
                {t('collaborations.service.assessment.text')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.service.menu')}</h3>
              <p className="text-primary font-body">
                {t('collaborations.service.menu.text')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.service.training')}</h3>
              <p className="text-primary font-body">
                {t('collaborations.service.training.text')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.service.education')}</h3>
              <p className="text-primary font-body">
                {t('collaborations.service.education.text')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.service.grants')}</h3>
              <p className="text-primary font-body">
                {t('collaborations.service.grants.text')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">{t('collaborations.service.evaluation')}</h3>
              <p className="text-primary font-body">
                {t('collaborations.service.evaluation.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">{t('collaborations.cta.title')}</h2>
          <p className="text-xl text-primary mb-12 max-w-3xl mx-auto leading-relaxed font-body">
            {t('collaborations.cta.text')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Phone</h3>
              <p className="text-primary font-body text-lg">{t('consultations.phone.spain')}</p>
              <p className="text-primary font-body text-lg">{t('consultations.phone.international')}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Email</h3>
              <p className="text-primary font-body text-lg">{t('footer.contact')}</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-lg">
            <p className="text-primary font-body italic text-xl">
              "{t('collaborations.cta.quote')}"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaborations;