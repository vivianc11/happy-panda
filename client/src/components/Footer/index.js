import React from 'react';
import 'bulma/css/bulma.min.css';

const Footer = () => {
  return (
    <footer className="hero-foot">
      <div className="content has-text-centered is-flex-align-items-flex-end">
        <h4>&copy; {new Date().getFullYear()} - Dream Team</h4>
      </div>
    </footer>
  );
};

export default Footer;
