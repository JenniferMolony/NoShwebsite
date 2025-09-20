import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Convert markdown-style content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">{paragraph.slice(2)}</h1>;
        }
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{paragraph.slice(3)}</h2>;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return <p key={index} className="font-semibold text-gray-900 mb-4">{paragraph.slice(2, -2)}</p>;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="list-disc pl-6 mb-4 space-y-1">
              {items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                </li>
              ))}
            </ul>
          );
        }
        if (paragraph.includes('**')) {
          const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
          );
        }
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
      });
  };

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/articles"
          className="inline-flex items-center text-peach hover:text-peach-dark mb-10 font-semibold transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-12">
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
          
          <h1 className="text-5xl font-bold text-navy mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{article.readTime}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">
                {new Date(article.publishDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-xl max-w-none">
          <div className="bg-white text-gray-700 leading-relaxed">
            {formatContent(article.content)}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-10 border-t border-gray-200">
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy mb-3">About NoSh</h3>
            <p className="text-gray-600">
              Straight, honest writing about food. Evidence-based nutrition information 
              to help you make informed decisions about what you eat.
            </p>
          </div>
        </footer>

        {/* Navigation to other articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-navy mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {articles
              .filter(a => a.slug !== article.slug)
              .slice(0, 2)
              .map(otherArticle => (
                <Link
                  key={otherArticle.id}
                  to={`/articles/${otherArticle.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block ${
                    otherArticle.category === 'article'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {otherArticle.category === 'article' ? 'Article' : 'Mini Nugget'}
                  </span>
                  <h4 className="font-bold text-navy mb-3 text-lg">{otherArticle.title}</h4>
                  <p className="text-gray-600">{otherArticle.excerpt.slice(0, 120)}...</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;