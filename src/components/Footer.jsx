import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ExternalLink, Mail, Hash } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Cancer Health Initiative</h2>
            <p>Building a cancer-aware society where everyone, regardless of socio-economic status, has access to lifesaving information and interventions.</p>
          </div>
          
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/cancer-information">Cancer Info Hub</Link></li>
              <li><Link to="/research">Research & Impact</Link></li>
              <li><Link to="/programs">Programs & Campaigns</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/team">Volunteer</Link></li>
              <li><Link to="/advocacy">Advocacy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#" aria-label="Website"><Globe size={20} /></a>
              <a href="#" aria-label="Social"><Hash size={20} /></a>
              <a href="#" aria-label="External"><ExternalLink size={20} /></a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cancer Health Initiative. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
