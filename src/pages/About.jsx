import React, { useEffect } from 'react';
import { Target, Eye, ShieldCheck, Activity } from 'lucide-react';

const About = () => {
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
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>About CHI</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Dedicated to reducing the burden of cancer through education, advocacy, and action.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="feature-card reveal" style={{ background: 'var(--white)', borderTop: '4px solid var(--purple-deep)' }}>
              <div className="icon-wrapper" style={{ background: 'var(--purple-deep)', color: 'var(--white)' }}><Eye size={28} /></div>
              <h2>Our Vision</h2>
              <p>To ensure equitable access to cancer health access, information, and care for all, particularly underserved communities, empowering them to prevent, detect, and overcome cancer effectively.</p>
            </div>
            
            <div className="feature-card reveal" style={{ background: 'var(--white)', borderTop: '4px solid var(--pink-bright)' }}>
              <div className="icon-wrapper" style={{ background: 'var(--pink-bright)', color: 'var(--white)' }}><Target size={28} /></div>
              <h2>Our Mission</h2>
              <p>To bridge the gap between cancer health and information by delivering accessible education, advocacy, and support to the communities that need it the most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Commitments */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center reveal">Our Commitments</h2>
          <div className="grid-2" style={{ marginTop: '50px' }}>
            <div className="reveal" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--pink-bright)', marginTop: '5px' }}><ShieldCheck size={32} /></div>
              <div>
                <h3>Empowered Decisions</h3>
                <p>Providing accurate and culturally relevant cancer education to empower informed decisions in our communities.</p>
              </div>
            </div>
            
            <div className="reveal" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--pink-bright)', marginTop: '5px' }}><Activity size={32} /></div>
              <div>
                <h3>Access & Advocacy</h3>
                <p>Advocating for early detection, prevention, and access to care in underserved populations.</p>
              </div>
            </div>

            <div className="reveal" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--pink-bright)', marginTop: '5px' }}><ShieldCheck size={32} /></div>
              <div>
                <h3>Community Networks</h3>
                <p>Building a network of cancer health advocates to drive awareness and community-focused interventions.</p>
              </div>
            </div>

            <div className="reveal" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--pink-bright)', marginTop: '5px' }}><Activity size={32} /></div>
              <div>
                <h3>Strategic Partnerships</h3>
                <p>Partnering with researchers, healthcare providers, and policymakers to foster innovation and equity in cancer care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
