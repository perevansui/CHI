import React, { useEffect } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import './Team.css';

const Team = () => {
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
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>Leadership & Team</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Meet the dedicated individuals driving the Cancer Health Initiative forward.
          </p>
        </div>
      </section>

      {/* Co-Founders & Core Team */}
      <section className="section">
        <div className="container">
          <h2 className="text-center reveal">Core Leadership</h2>
          <div className="team-grid" style={{ marginTop: '50px' }}>
            <div className="team-card reveal">
              <div className="team-img-wrapper">
                <img src="/assets/team-1.jpg" alt="Ajibade Taofeeq Damileye" />
                <div className="team-social">
                  <a href="#" aria-label="Profile"><ExternalLink size={18} /></a>
                  <a href="#" aria-label="Email"><Mail size={18} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ajibade Taofeeq Damileye</h3>
                <span className="role">Co-Founder</span>
              </div>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="team-img-wrapper">
                <img src="/assets/team-2.jpg" alt="Olufemi Seun E." />
                <div className="team-social">
                  <a href="#" aria-label="Profile"><ExternalLink size={18} /></a>
                  <a href="#" aria-label="Email"><Mail size={18} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Olufemi Seun E.</h3>
                <span className="role">Co-Founder</span>
              </div>
            </div>
            
            <div className="team-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="team-img-wrapper placeholder-img">
                <span>Photo</span>
              </div>
              <div className="team-info">
                <h3>Ogugbemi Bridget</h3>
                <span className="role">Content/Publications Lead</span>
              </div>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="team-img-wrapper placeholder-img">
                <span>Photo</span>
              </div>
              <div className="team-info">
                <h3>Alayande Elijah</h3>
                <span className="role">Advocacy Lead</span>
              </div>
            </div>
            
            <div className="team-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="team-img-wrapper placeholder-img">
                <span>Photo</span>
              </div>
              <div className="team-info">
                <h3>Adediran Daniel</h3>
                <span className="role">Research Lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center reveal">Our Volunteers</h2>
          <p className="text-center reveal" style={{ maxWidth: '600px', margin: '0 auto 50px' }}>
            The backbone of our on-the-ground campaigns and digital presence.
          </p>
          <div className="team-grid">
            <div className="team-card reveal">
              <div className="team-img-wrapper placeholder-img">
                <span>Photo</span>
              </div>
              <div className="team-info">
                <h3>Abiala Grace</h3>
                <span className="role">Graphic Design / Video Editing</span>
              </div>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="team-img-wrapper placeholder-img">
                <span>Photo</span>
              </div>
              <div className="team-info">
                <h3>Alaga Firdaws</h3>
                <span className="role">Content Writing</span>
              </div>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="team-img-wrapper placeholder-img">
                <span>Photo</span>
              </div>
              <div className="team-info">
                <h3>Folorunso Toluwanimi</h3>
                <span className="role">Social Media Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
