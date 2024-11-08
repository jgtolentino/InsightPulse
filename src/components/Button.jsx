import React from 'react';

function Button({ children, href, variant = 'primary', className = '' }) {
  const baseStyles = 'inline-flex items-center gap-2 px-8 py-4 text-lg font-light transition-colors duration-300';
  const variants = {
    primary: 'bg-primary text-dark hover:bg-primary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10'
  };

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;