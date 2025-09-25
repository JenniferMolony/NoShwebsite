import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Award, Heart } from 'lucide-react';
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
              <span className="text-primary font-display font-bold block">NoSh**</span>
              <span className="text-secondary font-bold font-body block mt-2">Straight, honest writing about nutrition.</span>
            </h1>
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

      {/* Featured Article */}
      {featuredArticle && (
        <section className={`py-24 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">Featured Article</h2>
              <p className="text-xl text-primary font-body">Latest insights from the world of nutrition</p>
            </div>
            
            <div className="bg-white border-none shadow-none max-w-3xl mx-auto">
              {/* Hero Image */}
              {featuredArticle.heroImage && (
                <div className="w-full">
                  <img 
                    src={featuredArticle.heroImage} 
                    alt={featuredArticle.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
              
              <div className="py-12 px-8 sm:px-12">
                <div className="mb-8">
                  <Tag variant="featured">Featured Article</Tag>
                </div>
                <h3 className="text-3xl font-display font-bold text-primary mb-8 leading-relaxed">
                  {featuredArticle.title}
                </h3>
                <p className="text-xl text-primary mb-12 leading-relaxed font-body">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  to={`/articles/${featuredArticle.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-nav font-semibold transition-colors duration-300 text-xl crosshatch-border-bottom pb-1"
                >
                  Read the full article
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className={`py-24 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Explore NoSh**</h2>
            <p className="text-xl text-primary font-body">Discover evidence-based nutrition insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Articles */}
            <Link
              to="/articles"
              className="text-center group"
            >
              <div className="mb-8">
                <Book className="h-12 w-12 text-primary mx-auto group-hover:text-primary/80 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Articles</h3>
              <p className="text-primary mb-8 leading-relaxed font-body">
                In-depth analysis of everyday foods and nutrition topics
              </p>
              <span className="inline-flex items-center text-primary font-nav font-semibold text-xl crosshatch-border-bottom transition-colors duration-300 pb-1">
                Browse articles
                <ArrowRight className="ml-3 h-4 w-4" />
              </span>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="text-center group"
            >
              <div className="mb-8">
                <Award className="h-12 w-12 text-primary mx-auto group-hover:text-primary/80 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">About</h3>
              <p className="text-primary mb-8 leading-relaxed font-body">
                Learn about Jenni's background and the NoSh** mission
              </p>
              <span className="inline-flex items-center text-primary font-nav font-semibold text-xl crosshatch-border-bottom transition-colors duration-300 pb-1">
                Meet Jenni
                <ArrowRight className="ml-3 h-4 w-4" />
              </span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-center group"
            >
              <div className="mb-8">
                <Heart className="h-12 w-12 text-primary mx-auto group-hover:text-primary/80 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Contact</h3>
              <p className="text-primary mb-8 leading-relaxed font-body">
                Get in touch for questions or collaboration opportunities
              </p>
              <span className="inline-flex items-center text-primary font-nav font-semibold text-xl crosshatch-border-bottom transition-colors duration-300 pb-1">
                Get in touch
                <ArrowRight className="ml-3 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;