import React from 'react';
import "./Footer.css"; 
const Footer = () => {
  return (
    <footer>
      <section className="footer-content">
        <section className="footer-top">
          <h4>Contact Us</h4>
          <p>Email: info@canvasdesigns.com</p>
          <p>Phone: +1 123-456-7890</p>
        </section>
        <section className="footer-bottom">
          <p>&copy; 2024 Canvas. All rights reserved.</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
