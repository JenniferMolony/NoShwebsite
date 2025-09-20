import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'article' | 'mini-nugget'>('all');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-navy mb-6">Articles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based insights to help you make sense of nutrition in the real world
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-peach focus:border-peach"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-orange-100 text-peach border-2 border-orange-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setSelectedCategory('article')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'article'
                  ? 'bg-orange-100 text-peach border-2 border-orange-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
              }`}
            >
              In-Depth Articles
            </button>
            <button
              onClick={() => setSelectedCategory('mini-nugget')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'mini-nugget'
                  ? 'bg-orange-100 text-peach border-2 border-orange-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
              }`}
            >
              Mini Nuggets
            </button>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-10">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      article.category === 'article'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {article.category === 'article' ? 'In-Depth Article' : 'Mini Nugget'}
                    </span>
                    {article.featured && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-peach">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-navy mb-6 hover:text-peach transition-colors duration-200 leading-tight">
                    <Link to={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.publishDate).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <Link
                      to={`/articles/${article.slug}`}
                      className="inline-flex items-center text-peach hover:text-peach-dark font-semibold transition-colors duration-200"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Newsletter Signup CTA */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Stay Updated</h3>
          <p className="text-lg text-gray-600 mb-6">
            Get notified when new articles are published
          </p>
          <p className="text-sm text-gray-500">
            Newsletter coming soon - follow us for updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;