import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [location]);

  const toggleDropdown = (item) => {
    if (dropdownOpen === item) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(item);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="CHI Logo" />
        </Link>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <button className="nav-link dropdown-btn" onClick={() => toggleDropdown('about')}>
              About <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'about' ? 'active' : ''}`}>
              <Link to="/about">About CHI</Link>
              <Link to="/team">Leadership & Team</Link>
            </div>
          </div>

          <div className="nav-item">
            <button className="nav-link dropdown-btn" onClick={() => toggleDropdown('cancer')}>
              Cancer Information <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'cancer' ? 'active' : ''}`}>
              <Link to="/cancer-information">Information Hub</Link>
              <Link to="/programs">Programs & Campaigns</Link>
              <Link to="/resources">Resources</Link>
            </div>
          </div>

          <div className="nav-item">
            <button className="nav-link dropdown-btn" onClick={() => toggleDropdown('research')}>
              Research & Impact <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'research' ? 'active' : ''}`}>
              <Link to="/research">Research Projects</Link>
              <Link to="/advocacy">Advocacy & Partnerships</Link>
            </div>
          </div>

          <div className="nav-item">
            <button className="nav-link dropdown-btn" onClick={() => toggleDropdown('get-involved')}>
              Get Involved <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'get-involved' ? 'active' : ''}`}>
              <Link to="/contact">Contact Us</Link>
              <Link to="/team">Volunteer</Link>
            </div>
          </div>

          <Link to="/donate" className="btn btn-primary donate-btn">Donate</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
