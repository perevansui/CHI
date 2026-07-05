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
            <div className="feature-card reveal" style={{ background: 'var(--white)', color: 'var(--dark)' }}>
              <div className="icon-wrapper"><Activity size={24} /></div>
              <h3>Early Detection</h3>
              <p>Promoting routine screenings and self-examinations to catch cancer when it's most treatable.</p>
              <Link to="/cancer-information" className="read-more">Learn More <ArrowRight size={16}/></Link>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--white)', color: 'var(--dark)' }}>
              <div className="icon-wrapper"><Users size={24} /></div>
              <h3>Community Advocacy</h3>
              <p>Breaking myths and stigmas through culturally tailored educational campaigns.</p>
              <Link to="/programs" className="read-more">View Programs <ArrowRight size={16}/></Link>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.2s', background: 'var(--white)', color: 'var(--dark)' }}>
              <div className="icon-wrapper"><Globe size={24} /></div>
              <h3>Scientific Research</h3>
              <p>Bridging the gap between oncology research and grassroots application.</p>
              <Link to="/research" className="read-more">Our Impact <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
