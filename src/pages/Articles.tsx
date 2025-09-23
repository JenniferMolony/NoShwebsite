import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { articles } from '../data/articles';
import { useTheme } from '../contexts/ThemeContext';
import Tag from '../components/Tag';

const Articles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'article' | 'mini-nugget'>('all');
  const { theme } = useTheme();

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">Supermarket Staples</span>
              <span className="text-secondary font-bold font-body block mt-2">Evidence-based guides to help you navigate everyday grocery choices with confidence</span>
            </h1>
          </div>
        </section>

        {/* Search and Filter */}
        <div className="mb-16 space-y-6">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="block w-full pl-10 pr-3 py-4 border border-secondary/30 bg-white text-primary placeholder-primary/60 focus:outline-none focus:border-primary text-xl font-body"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 text-xl font-nav font-semibold transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'text-primary crosshatch-border-bottom'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              All Guides
            </button>
            <button
              onClick={() => setSelectedCategory('article')}
              className={`px-6 py-3 text-xl font-nav font-semibold transition-colors duration-200 ${
                selectedCategory === 'article'
                  ? 'text-primary crosshatch-border-bottom'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              Full Guides
            </button>
            <button
              onClick={() => setSelectedCategory('mini-nugget')}
              className={`px-6 py-3 text-xl font-nav font-semibold transition-colors duration-200 ${
                selectedCategory === 'mini-nugget'
                  ? 'text-primary crosshatch-border-bottom'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              Mini Nuggets
            </button>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-16">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-primary font-body">No articles found matching your criteria.</p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border-none shadow-none"
              >
                {/* Hero Image */}
                {article.heroImage && (
                  <div className="w-full">
                    <img 
                      src={article.heroImage} 
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
                
                <div className="p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <Tag variant="category">
                      {article.category === 'article' ? 'Full Guide' : 'Mini Nugget'}
                    </Tag>
                    {article.featured && (
                      <Tag variant="featured">Featured</Tag>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold text-primary mb-8 hover:text-primary/80 transition-colors duration-200 leading-tight">
                    <Link to={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-xl text-primary mb-12 leading-relaxed font-body">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-primary font-body">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{article.readTime}</span>
                      <span className="crosshatch-separator"></span>
                      <span>{new Date(article.publishDate).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <Link
                      to={`/articles/${article.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-nav font-semibold transition-colors duration-300 text-xl crosshatch-border-bottom pb-1"
                    >
                      Read the full article
                      <ArrowRight className="ml-3 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Newsletter Signup CTA */}
        <div className="mt-24 bg-white p-12 text-center">
          <h3 className="text-4xl font-display font-bold text-primary mb-6">Stay Updated</h3>
          <p className="text-xl text-primary mb-8 font-body">
            Get notified when new guides are published
          </p>
          <p className="text-sm text-primary font-body">
            Newsletter coming soon - follow us for updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;