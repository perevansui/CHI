import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Megaphone, Users, ShieldCheck, ArrowRight, Target } from 'lucide-react';

const Advocacy = () => {
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

  const partners = [
    'The Child Online Foundation',
    'Value Initiative',
    'Creative Chaser',
    'JCI LAUTECH',
    'Rotaract Ogbomoso',
    'LAUTECH SCOPH'
  ];

  return (
    <div className="page-wrapper">
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>Advocacy & Partnerships</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Collaborating with stakeholders, policymakers, and local organizations to eliminate cancer health disparities.
          </p>
        </div>
      </section>

      {/* Strategic Advocacy Approaches */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Our Advocacy Approach</h2>
            <p>We actively address limited cancer awareness in underserved communities, aiming to dismantle barriers to early detection and prevention, including misconceptions and stigma.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '50px' }}>
            <div className="feature-card reveal" style={{ background: 'var(--white)', padding: '40px 30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '15px', background: 'var(--sand)', borderRadius: '50%', marginBottom: '20px' }}>
                <Target size={28} color="var(--purple-deep)" />
              </div>
              <h3>Evidence-Based Strategies</h3>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>Leveraging research to develop targeted educational campaigns tailored specifically to local community needs.</p>
            </div>

            <div className="feature-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--white)', padding: '40px 30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '15px', background: 'var(--sand)', borderRadius: '50%', marginBottom: '20px' }}>
                <Users size={28} color="var(--purple-deep)" />
              </div>
              <h3>Cross-Sector Collaboration</h3>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>Fostering essential collaboration between healthcare professionals, researchers, policymakers, and community members.</p>
            </div>

            <div className="feature-card reveal" style={{ transitionDelay: '0.2s', background: 'var(--white)', padding: '40px 30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '15px', background: 'var(--sand)', borderRadius: '50%', marginBottom: '20px' }}>
                <Megaphone size={28} color="var(--purple-deep)" />
              </div>
              <h3>Sustainable Methods</h3>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>Employing innovative and sustainable grassroots advocacy methods to bridge the gap between research findings and practical application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SSCCEN Summit Highlight */}
      <section className="section section-light">
        <div className="container">
          <div className="swiss-grid align-center">
            <div className="col-5 reveal">
              <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--pink-soft)', color: 'var(--purple-deep)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '20px' }}>
                Key Event Participation
              </div>
              <h2 style={{ marginBottom: '20px', fontSize: '2.5rem', lineHeight: '1.1' }}>SSCCEN 2024 Summit</h2>
              <p style={{ marginBottom: '20px', color: '#555' }}>
                CHI participated actively in the 2nd Stakeholders Summit on Cervical Cancer Elimination in Nigeria, held December 4-6, 2024, at the Chida International Hotel in Abuja.
              </p>
              <p style={{ marginBottom: '30px', color: '#555' }}>
                The summit focused on "Strengthening Collaboration Towards Achieving Cervical Cancer Elimination Targets in Nigeria." We shared the stage with notable contributors including Her Excellency Hajiya Fatima Dikko Radda, along with various NGOs and private sector organizations sharing insights on vaccine distribution and awareness.
              </p>
              <Link to="/research" className="btn btn-outline">
                View Our Summit Presentation <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="col-7 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="swiss-grid" style={{ gap: '20px' }}>
                <div className="col-12" style={{ height: '250px' }}>
                  <img src="/assets/ssccen-group.jpg" alt="SSCCEN Group Photo" className="img-cover" />
                </div>
                <div className="col-6" style={{ height: '250px' }}>
                  <img src="/assets/ssccen-panel.jpg" alt="SSCCEN Panel" className="img-cover" />
                </div>
                <div className="col-6" style={{ 
                  background: 'var(--purple-deep)', 
                  borderRadius: 'var(--radius)', 
                  padding: '30px', 
                  color: 'var(--white)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={40} color="var(--pink-bright)" style={{ marginBottom: '15px' }} />
                  <p style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                    "We believe that a collective approach involving public and private stakeholders is essential to address cancer health disparities effectively."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="section">
        <div className="container text-center">
          <div className="section-header reveal">
            <Handshake size={40} color="var(--pink-bright)" style={{ marginBottom: '20px' }} />
            <h2>Our 2024 Partners</h2>
            <p>Our work is amplified by our dedicated local partners who played a crucial role in our grassroots campaigns this year.</p>
          </div>

          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '40px' }}>
            {partners.map((partner, index) => (
              <span key={index} style={{
                background: 'var(--white)',
                padding: '15px 30px',
                borderRadius: '50px',
                fontWeight: '600',
                color: 'var(--purple-deep)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid #eee'
              }}>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark text-center" style={{ padding: '80px 0' }}>
        <div className="container reveal">
          <h2 style={{ color: 'var(--white)', marginBottom: '20px' }}>Join the Movement</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--pink-soft)' }}>
            Organizations and institutions are invited to collaborate with CHI on campaigns, research, and community outreach.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--purple-deep)' }}>
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Advocacy;
