import React from 'react';

function Section({ children, className = '' }) {
  return (
    <section className={`section-padding ${className}`}>
      {children}
    </section>
  );
}

export default Section;