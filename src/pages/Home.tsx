import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import { useTheme } from '../contexts/ThemeContext';
import Tag from '../components/Tag';

const Home: React.FC = () => {
  const featuredArticle = articles.find(article => article.featured);
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">Straight, honest guidance about food & nutrition.</span>
            </h1>
            
            <p className="text-xl text-primary font-body mb-12 max-w-4xl leading-relaxed">
              One-to-one nutrition consultations and honest food writing — backed by science, based on what's practical, and built to last.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link
                to="/consultations"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-nav font-semibold hover:bg-primary/80 transition-colors duration-200 text-xl"
              >
                Book a Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/articles"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-nav font-medium hover:bg-primary hover:text-white transition-colors duration-200 text-lg"
              >
                Start with the Basics
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
        {/* Featured Guide - Chocolate */}
        <section className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Featured Guide</h2>
            </div>
            
            <div className="bg-white border border-secondary/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4 leading-tight">
                    Chocolate: The Real Story Behind Your Favorite Treat
                  </h3>
                  <p className="text-primary mb-6 font-body leading-relaxed">
                    Breaking down the science behind chocolate ingredients — from cocoa percentages to emulsifiers — and how to choose the best quality, affordable, and healthier options for you and yours.
                  </p>
                  <Link
                    to="/articles/chocolate"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-nav font-semibold transition-colors duration-300 crosshatch-border-bottom pb-1 text-lg"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                
                {/* Image */}
                <div className="relative">
                  <img 
                    src="/image.png"
                    alt="Chocolate: The Real Story Behind Your Favorite Treat"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl font-display font-bold text-primary mb-12">Explore NoSh</h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <Link
                to="/consultations"
                className="text-center group hover:bg-secondary/10 p-8 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-primary/80">1:1 Nutrition Support</h3>
                <p className="text-primary font-body leading-relaxed">
                  Book a consultation or personalised nutrition help
                </p>
              </Link>

              <Link
                to="/articles"
                className="text-center group hover:bg-secondary/10 p-8 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-primary/80">Supermarket Guides</h3>
                <p className="text-primary font-body leading-relaxed">
                  Simple tips for better food choices, one label at a time
                </p>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Honduras Project Feature Block - Above Footer */}
      <section className={`py-16 mt-24 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Real-World Impact</h2>
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-display font-bold text-primary mb-6">Supporting school nutrition in Honduras</h3>
            <p className="text-xl text-primary mb-8 max-w-3xl mx-auto leading-relaxed font-body">
              NoSh is proud to support Child Alliance Honduras with practical help for their school snack program. Discover how we're contributing behind the scenes.
            </p>
            <Link
              to="/collaborations"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-nav font-semibold hover:bg-primary/80 transition-colors duration-200 text-xl"
            >
              View Project
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;