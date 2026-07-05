import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BookOpen, Users, Heart } from 'lucide-react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(/assets/hero.jpg)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content reveal">
          <span className="pill">Cancer Health Initiative</span>
          <h1>Bridging the Gap Between Cancer Health & Science</h1>
          <p>We are a community-based organization delivering advocacy programs, promoting cancer prevention, and facilitating early detection in underserved communities.</p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">Our Mission <ArrowRight size={18} /></Link>
            <Link to="/donate" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Make a Gift</Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>What We Do</h2>
            <p>Empowering communities through education, advocacy, and support.</p>
          </div>
          <div className="grid-3">
            <div className="feature-card reveal">
              <div className="icon-wrapper"><BookOpen size={24} /></div>
              <h3>Education</h3>
              <p>Providing accurate and culturally relevant cancer education to empower informed decisions.</p>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="icon-wrapper"><Activity size={24} /></div>
              <h3>Early Detection</h3>
              <p>Advocating for regular screenings and prevention in underserved populations.</p>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-wrapper"><Users size={24} /></div>
              <h3>Community Support</h3>
              <p>Building a network of advocates to drive awareness and community-focused interventions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="reveal">
              <h2>Our Impact in Numbers</h2>
              <p>Through our dedicated campaigns and partnerships, we are making a measurable difference in the fight against cancer.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Local Partnerships</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">1000s</span>
                  <span className="stat-label">Lives Reached</span>
                </div>
              </div>
              <Link to="/research" className="btn btn-outline" style={{ marginTop: '30px', borderColor: 'var(--pink-soft)', color: 'var(--pink-soft)' }}>
                View Annual Impact
              </Link>
            </div>
            <div className="reveal img-reveal">
              <img src="/assets/prostate.jpg" alt="Prostate Cancer Stakeholder Meeting" className="rounded-img shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="section">
        <div className="container">
          <h2 className="text-center reveal">Featured Initiatives</h2>
          <div className="grid-3" style={{ marginTop: '50px' }}>
            <div className="image-card reveal">
              <img src="/assets/cervical.jpg" alt="Cervical Cancer Outreach" />
              <div className="card-content">
                <span className="tag">School Outreach</span>
                <h3>Cervical Cancer & HPV Uptake</h3>
                <p>Educating secondary school students on early prevention and promoting HPV vaccination.</p>
                <Link to="/programs" className="read-more">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            
            <div className="image-card reveal" style={{ transitionDelay: '0.1s' }}>
              <img src="/assets/breast.jpg" alt="Breast Cancer Awareness Walk" />
              <div className="card-content">
                <span className="tag">Awareness Walk</span>
                <h3>Breast Cancer Awareness</h3>
                <p>Spreading vital information, breaking myths, and demonstrating self-breast examination techniques.</p>
                <Link to="/programs" className="read-more">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="image-card reveal" style={{ transitionDelay: '0.2s' }}>
              <img src="/assets/team-1.jpg" alt="NICRAT Abstract Presentation" style={{ objectPosition: 'top' }} />
              <div className="card-content">
                <span className="tag">Research</span>
                <h3>NICRAT Abstract Presentation</h3>
                <p>Presenting our findings at the International Cancer Week in Abuja.</p>
                <Link to="/research" className="read-more">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal">
        <div className="container text-center">
          <h2>Join the Movement</h2>
          <p>We are always looking for passionate volunteers and generous donors to help us expand our reach.</p>
          <div className="hero-actions justify-center" style={{ marginTop: '30px' }}>
            <Link to="/donate" className="btn btn-primary"><Heart size={18} /> Donate Now</Link>
            <Link to="/team" className="btn btn-outline">Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
