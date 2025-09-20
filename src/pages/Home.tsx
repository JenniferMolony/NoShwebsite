import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, User, Mail, Award, Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy mb-8 tracking-tight">
            NoSh
          </h1>
          <p className="text-2xl sm:text-3xl text-charcoal mb-12 font-medium">
            Straight, honest writing about food
          </p>
          <div className="space-y-6 mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Helping communities make sense of supermarket staples.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Evidence-based. Accessible. No guilt.
            </p>
          </div>
          <Link
            to="/articles"
            className="inline-flex items-center px-8 py-4 bg-peach text-white font-semibold rounded-lg hover:bg-peach-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Read Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Featured Article</h2>
            <p className="text-lg text-gray-600">Latest insights from the world of nutrition</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 sm:p-10">
              <div className="flex items-center text-sm text-peach font-medium mb-6">
                <span className="bg-orange-100 text-peach px-4 py-2 rounded-full">Featured Article</span>
              </div>
              <h3 className="text-3xl font-bold text-navy mb-6 leading-tight">
                Chocolate: The Real Story Behind Your Favorite Treat
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Let's cut through the marketing hype and look at what chocolate actually does for your body. 
                From cocoa percentages to processing methods, here's what you need to know when choosing 
                chocolate at the supermarket.
              </p>
              <Link
                to="/articles/chocolate"
                className="inline-flex items-center text-peach hover:text-peach-dark font-semibold transition-colors duration-200 text-lg"
              >
                Read the full article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Explore NoSh</h2>
            <p className="text-lg text-gray-600">Discover evidence-based nutrition insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Articles */}
            <Link
              to="/articles"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-peach rounded-2xl mb-6">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Articles</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In-depth analysis of everyday foods and nutrition topics
              </p>
              <span className="inline-flex items-center text-peach font-semibold">
                Browse articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">About</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn about Jenni's background and the NoSh mission
              </p>
              <span className="inline-flex items-center text-blue-600 font-semibold">
                Meet Jenni
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Contact</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get in touch for questions or collaboration opportunities
              </p>
              <span className="inline-flex items-center text-green-600 font-semibold">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;