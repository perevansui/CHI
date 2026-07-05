import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Activity, Globe } from 'lucide-react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="swiss-grid align-center" style={{ minHeight: '80vh', paddingTop: '100px' }}>
            <div className="col-7 reveal">
              <span className="pill" style={{ marginBottom: '20px', display: 'inline-block' }}>Est. 2024 • Ogbomoso, Nigeria</span>
              <h1 className="text-huge">Bridging<br/>Science &<br/><span style={{ color: 'var(--pink-bright)' }}>Community</span></h1>
              <p style={{ fontSize: '1.2rem', maxWidth: '500px', marginBottom: '40px', color: '#555' }}>
                Delivering advocacy programs, promoting cancer prevention, and facilitating early detection in communities with limited access to resources.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '20px' }}>
                <Link to="/about" className="btn btn-primary">Our Mission <ArrowRight size={18} /></Link>
                <Link to="/donate" className="btn btn-outline">Support Us</Link>
              </div>
            </div>
            <div className="col-5 reveal" style={{ transitionDelay: '0.2s', position: 'relative' }}>
              <img src="/assets/hero.jpg" alt="CHI Community Outreach" className="img-cover" style={{ boxShadow: 'var(--shadow-lg)' }} />
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--white)', padding: '20px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ background: 'var(--pink-soft)', padding: '10px', borderRadius: '50%' }}>
                  <Heart size={24} color="var(--pink-bright)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--purple-deep)' }}>1000s Reached</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>In our first year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Line Separator */}
      <div className="container"><div className="swiss-line"></div></div>

      {/* Impact Gallery Section */}
      <section className="section section-light">
        <div className="container">
          <div className="swiss-grid align-center" style={{ marginBottom: '50px' }}>
            <div className="col-6 reveal">
              <h2 style={{ fontSize: '2.5rem' }}>Our Impact<br/>in Action</h2>
            </div>
            <div className="col-6 reveal" style={{ transitionDelay: '0.1s' }}>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>We employ innovative and sustainable grassroots advocacy methods to ensure community engagement and long-term impact against Cervical, Breast, and Prostate cancer.</p>
            </div>
          </div>

          <div className="swiss-grid">
            <div className="col-8 reveal">
              <div style={{ height: '400px', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                <img src="/assets/cervical-outreach.jpg" alt="Cervical Cancer Outreach" className="img-cover" />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--white)', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold' }}>School Outreach</div>
              </div>
            </div>
            <div className="col-4 reveal" style={{ transitionDelay: '0.1s' }}>
              <div style={{ height: '400px', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                <img src="/assets/breast-walk.jpg" alt="Breast Cancer Awareness Walk" className="img-cover" />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--white)', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold' }}>Awareness Walk</div>
              </div>
            </div>
            <div className="col-4 reveal">
              <div style={{ height: '300px', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                <img src="/assets/prostate.jpg" alt="Prostate Cancer Stakeholders" className="img-cover" />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--white)', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold' }}>Stakeholders</div>
              </div>
            </div>
            <div className="col-8 reveal" style={{ transitionDelay: '0.1s' }}>
              <div style={{ height: '300px', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                <img src="/assets/ssccen-panel.jpg" alt="SSCCEN Summit Panel" className="img-cover" />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--white)', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold' }}>National Advocacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Core Focus Areas</h2>
            <div className="swiss-line" style={{ width: '100px', margin: '20px auto' }}></div>
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
