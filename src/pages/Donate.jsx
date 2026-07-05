import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

const Donate = () => {
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
    <div className="page-wrapper">
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>Support Our Mission</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Your generosity helps us reach more underserved communities with lifesaving cancer education and advocacy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="reveal">
              <h2>Why Your Gift Matters</h2>
              <p style={{ marginBottom: '30px' }}>
                The Cancer Health Initiative is a community-based organization delivering accessible education, advocacy, and support to the communities that need it the most. Every donation helps us expand our outreach to more schools, communities, and stakeholders.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ minWidth: '50px', minHeight: '50px', width: '50px', height: '50px' }}>
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Fund Education Programs</h3>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>Help us print pamphlets in English and Yoruba, organize school outreach, and host webinars.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ minWidth: '50px', minHeight: '50px', width: '50px', height: '50px' }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Empower Volunteers</h3>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>Support our dedicated volunteer team with training, materials, and logistics for community campaigns.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ minWidth: '50px', minHeight: '50px', width: '50px', height: '50px' }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Support Research</h3>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>Enable us to present at conferences like NICRAT and SSCCEN, advancing cancer health science.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '50px 40px',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center'
              }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--pink-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                  <Heart size={36} color="var(--pink-bright)" />
                </div>
                <h2 style={{ marginBottom: '15px' }}>Make a Donation</h2>
                <p style={{ marginBottom: '30px', color: '#555' }}>
                  Every contribution, no matter the size, makes a meaningful impact in the fight against cancer in Nigeria.
                </p>
                <a href="mailto:cancerhealthinitiative@gmail.com?subject=Donation%20Inquiry" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '15px' }}>
                  <Heart size={18} /> Donate Now
                </a>
                <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '10px' }}>
                  Contact us for bank transfer details and other payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center reveal">
          <h2>Other Ways to Help</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 50px' }}>You don't need to donate money to make a difference.</p>
          <div className="grid-3">
            <div className="feature-card reveal" style={{ background: 'var(--sand)' }}>
              <h3>Volunteer</h3>
              <p>Join our team and contribute your skills to on-the-ground campaigns, content creation, or research.</p>
              <Link to="/team" className="read-more" style={{ marginTop: '15px' }}>Join Us <ArrowRight size={16} /></Link>
            </div>
            <div className="feature-card reveal" style={{ background: 'var(--sand)', transitionDelay: '0.1s' }}>
              <h3>Spread the Word</h3>
              <p>Follow us on social media, share our content, and help us reach more people with lifesaving information.</p>
            </div>
            <div className="feature-card reveal" style={{ background: 'var(--sand)', transitionDelay: '0.2s' }}>
              <h3>Partner With Us</h3>
              <p>Organizations and institutions can collaborate with CHI on campaigns, research, and community outreach.</p>
              <Link to="/advocacy" className="read-more" style={{ marginTop: '15px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
