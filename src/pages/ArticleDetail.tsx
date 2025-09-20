import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/articles';
import { useTheme } from '../contexts/ThemeContext';
import Tag from '../components/Tag';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const { theme } = useTheme();

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Convert markdown-style content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-display font-bold text-primary mb-8 mt-12">{paragraph.slice(2)}</h1>;
        }
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-display font-bold text-primary mb-6 mt-10">{paragraph.slice(3)}</h2>;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return <p key={index} className="font-nav font-semibold text-primary mb-6 text-xl">{paragraph.slice(2, -2)}</p>;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
              {items.map((item, i) => {
                const formatted = item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return (
                  <li key={i} className="text-primary font-body text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
                );
              })}
            </ul>
          );
        }
        if (paragraph.includes('**')) {
          const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return (
            <p key={index} className="text-primary mb-6 leading-relaxed font-body text-xl" dangerouslySetInnerHTML={{ __html: formatted }} />
          );
        }
        return <p key={index} className="text-primary mb-6 leading-relaxed font-body text-xl">{paragraph}</p>;
      });
  };

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back Button */}
        <Link
          to="/articles"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-nav font-semibold transition-colors duration-300 text-xl border-b border-primary hover:border-primary/80 pb-1"
        >
          <ArrowLeft className="h-4 w-4 mr-3" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <section className="pt-8 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <div className="flex items-center gap-3 mb-8">
              <Tag variant="category">
                {article.category === 'article' ? 'In-Depth Article' : 'Mini Nugget'}
              </Tag>
              {article.featured && (
                <Tag variant="featured">Featured</Tag>
              )}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">{article.title}</span>
              <span className="text-secondary font-bold font-body block mt-2">
                <div className="flex items-center text-secondary space-x-6 font-body">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {new Date(article.publishDate).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </span>
            </h1>
          </div>
        </section>

        {/* Hero Image */}
        {article.heroImage && (
          <div className="mb-0">
            <img 
              src={article.heroImage} 
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="w-full bg-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <article className="max-w-none">
              <div className="text-primary leading-relaxed font-body">
                {formatContent(article.content)}
              </div>
            </article>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-24 pt-12 border-t border-secondary/30">
          <div className="bg-white p-12">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">About NoSh</h3>
            <p className="text-primary font-body">
              Straight, honest writing about food. Evidence-based nutrition information 
              to help you make informed decisions about what you eat.
            </p>
          </div>
        </footer>

        {/* Navigation to other articles */}
        <div className="mt-24">
          <h3 className="text-4xl font-display font-bold text-primary mb-12">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {articles
              .filter(a => a.slug !== article.slug)
              .slice(0, 2)
              .map(otherArticle => (
                <Link
                  key={otherArticle.id}
                  to={`/articles/${otherArticle.slug}`}
                  className="block bg-white border-none shadow-none hover:bg-secondary/20 transition-colors duration-300"
                >
                  {/* Hero Image */}
                  {otherArticle.heroImage && (
                    <div className="w-full">
                      <img 
                        src={otherArticle.heroImage} 
                        alt={otherArticle.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-12">
                    <div className="mb-6">
                      <Tag variant="category">
                        {otherArticle.category === 'article' ? 'Article' : 'Mini Nugget'}
                      </Tag>
                    </div>
                    <h4 className="font-display font-bold text-primary mb-6 text-2xl">{otherArticle.title}</h4>
                    <p className="text-primary font-body">{otherArticle.excerpt.slice(0, 120)}...</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;