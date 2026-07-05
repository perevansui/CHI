import React, { useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Megaphone, CheckCircle } from 'lucide-react';

const Programs = () => {
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

  const programs = [
    {
      date: 'Feb 8, 2024',
      title: 'Cervical Cancer School Outreach',
      location: 'Anglican Grammar School & Nurudeen Grammar School, Ogbomoso',
      description: 'Focused on cervical cancer knowledge and HPV vaccination uptake among secondary students. Interactive discussions on risk factors, prevention, and treatment.',
      highlights: ['Role of HPV', 'Benefits of HPV vaccination', 'Importance of regular screenings']
    },
    {
      date: 'Feb 10, 2024',
      title: 'World Cancer Day Webinar',
      location: 'Google Meet',
      description: 'Theme: "Demystifying Cancer: Myths and Facts". Featured Dr. Fatima Dambatta. Addressed misconceptions like cancer being hereditary, contagious, or supernatural.',
      highlights: ['Early detection is key', 'Be vigilant', 'Ensure routine screenings', 'Lead healthy lifestyle']
    },
    {
      date: 'April 2, 2024',
      title: 'Prostate Cancer Stakeholders Meeting',
      location: 'Ogbomoso Sawmill',
      description: 'Brought together sawmill leaders and workers to discuss the prostate cancer burden and practical strategies.',
      highlights: ['Community impact', 'Practical prevention strategies']
    },
    {
      date: 'June 14, 2024',
      title: "Life After Cancer: Survivor's Journey Series",
      location: 'Webinar',
      description: 'Featured Mrs. Gloria Chinyere Okwu, Project Coordinator at Project Pink Blue. Spotlight on cancer survivor experiences.',
      highlights: ['Counseling services', 'Survivor networks', 'Post-treatment care']
    },
    {
      date: 'October 2024',
      title: 'Breast Cancer Awareness Walk',
      location: 'LAUTECH Teaching Hospital, Ogbomoso',
      description: 'Volunteers distributed pamphlets in English and Yoruba with placards featuring myth-busting slogans. 75% of breast cancer is detected through self-examination.',
      highlights: ['Step-by-step self-breast examination guides', 'Myth-busting slogans', 'Community engagement']
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>Programs & Campaigns</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            From school outreach to public awareness walks, explore our hands-on community engagement initiatives.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
            {programs.map((program, index) => (
              <div key={index} className="reveal" style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '40px',
                boxShadow: 'var(--shadow-sm)',
                borderLeft: '4px solid var(--pink-bright)'
              }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px', color: 'var(--pink-bright)', fontWeight: '600' }}>
                  <Calendar size={18} />
                  <span>{program.date}</span>
                </div>
                <h3 style={{ marginBottom: '10px' }}>{program.title}</h3>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px', color: '#666', fontSize: '0.9rem' }}>
                  <MapPin size={16} />
                  <span>{program.location}</span>
                </div>
                <p style={{ marginBottom: '20px', color: '#444' }}>{program.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {program.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.9rem', color: '#555' }}>
                      <CheckCircle size={16} color="var(--pink-bright)" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section section-light text-center">
         <div className="container reveal">
            <h2 style={{ marginBottom: '20px' }}>Get Involved in Our Next Campaign</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#555' }}>
              We are always looking for passionate individuals to join our outreach programs and make a tangible difference.
            </p>
            <a href="/contact" className="btn btn-primary">
              <Megaphone size={18} /> Become a Volunteer
            </a>
         </div>
      </section>
    </div>
  );
};

export default Programs;
