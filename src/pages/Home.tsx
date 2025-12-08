import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-orange-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Nosh Nutrition' : 'Nosh Nutrición'}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'One-to-one nutrition consultations and community nutrition support — backed by science, focused on what\'s practical, and built to last.'
              : 'Consultas de nutrición individuales y apoyo en nutrición comunitaria y escolar — basadas en evidencia, enfocadas en lo práctico y pensadas para durar.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link
              to="/consultations"
              className="bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              {language === 'en' ? 'Book Consultation' : 'Reservar Consulta'}
            </Link>
            <Link
              to="/about"
              className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              {language === 'en' ? 'Learn More' : 'Saber Más'}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {language === 'en' ? 'Individual Consultations' : 'Consultas Individuales'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Personalized nutrition guidance tailored to your unique needs and lifestyle.'
                  : 'Orientación nutricional personalizada adaptada a tus necesidades únicas y estilo de vida.'}
              </p>
              <Link
                to="/consultations"
                className="text-rose-600 font-semibold hover:text-rose-700"
              >
                {language === 'en' ? 'Learn More →' : 'Saber Más →'}
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {language === 'en' ? 'Community Support' : 'Apoyo Comunitario'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Nutrition education and support for schools and community organizations.'
                  : 'Educación nutricional y apoyo para escuelas y organizaciones comunitarias.'}
              </p>
              <Link
                to="/collaborations"
                className="text-rose-600 font-semibold hover:text-rose-700"
              >
                {language === 'en' ? 'Learn More →' : 'Saber Más →'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;