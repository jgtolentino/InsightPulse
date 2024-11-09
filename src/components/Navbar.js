import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/value-proposition">Value Proposition</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/cta">Call to Action</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 