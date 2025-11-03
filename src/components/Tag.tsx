import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'category';
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, variant = 'default', className = '' }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1.5 text-sm font-nav font-semibold rounded-full transition-colors duration-200';
  
  const variantClasses = {
    default: 'bg-primary/10 text-primary hover:bg-primary/20',
    featured: 'bg-secondary/20 text-primary hover:bg-secondary/30',
    category: 'bg-primary/15 text-primary hover:bg-primary/25'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
