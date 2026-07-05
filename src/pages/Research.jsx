import React, { useEffect } from 'react';
import { Award, BarChart, TrendingUp, FileText, Calendar, MapPin, Users, Globe } from 'lucide-react';

const Research = () => {
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
          <h1>Research & Impact</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Bridging the gap between cancer science and the communities in need through evidence-based research and measurable impact.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section section-light text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="grid-3">
            <div className="reveal" style={{ padding: '30px', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <Users size={40} color="var(--pink-bright)" />
              </div>
              <h2 style={{ fontSize: '3rem', margin: '0 0 10px', color: 'var(--purple-deep)' }}>1000s</h2>
              <p style={{ fontWeight: '600', color: '#555' }}>of Lives Reached</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s', padding: '30px', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <Globe size={40} color="var(--pink-bright)" />
              </div>
              <h2 style={{ fontSize: '3rem', margin: '0 0 10px', color: 'var(--purple-deep)' }}>5+</h2>
              <p style={{ fontWeight: '600', color: '#555' }}>Local Partnerships</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s', padding: '30px', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <TrendingUp size={40} color="var(--pink-bright)" />
              </div>
              <h2 style={{ fontSize: '3rem', margin: '0 0 10px', color: 'var(--purple-deep)' }}>3</h2>
              <p style={{ fontWeight: '600', color: '#555' }}>Major Campaigns Executed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Abstracts and Conferences */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Abstracts & Conferences</h2>
            <p>Our work presented at national and international summits.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="reveal" style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              padding: '40px',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--purple-deep)' }}></div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px', color: 'var(--purple-deep)', fontWeight: '600' }}>
                <Award size={24} />
                <span style={{ fontSize: '1.2rem' }}>NICRAT International Cancer Week 2024</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', lineHeight: '1.4' }}>
                Cancer Health Initiative: An initiative poised towards bridging the gap between Cancer Health and Science to the community in need
              </h3>
              <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '20px' }}>
                <strong>Authors:</strong> Seun E. Olufemi, Taofeeq Ajibade, Bridget Ogungbemi, Daniel A. Adediran, Elijah Ayandeyi
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Calendar size={16} />
                  <span>Oct 28 - Nov 1, 2024</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <MapPin size={16} />
                  <span>NAF Conference Center, Abuja</span>
                </div>
              </div>
              <p style={{ color: '#444' }}>
                This presentation showcased CHI's remarkable progress as a community-based organization established in 2024. It highlighted our mission to bridge the gap between cancer health and science by delivering advocacy programs, promoting cancer prevention, and facilitating early detection in communities with limited access to resources.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s',
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              padding: '40px',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--pink-bright)' }}></div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px', color: 'var(--pink-bright)', fontWeight: '600' }}>
                <Award size={24} />
                <span style={{ fontSize: '1.2rem' }}>2nd Stakeholders Summit on Cervical Cancer Elimination (SSCCEN 2024)</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', lineHeight: '1.4' }}>
                School-Based HPV Vaccination Intervention: Exploring the Relationships Between Knowledge, Attitude, and Uptake Among Adolescents
              </h3>
              <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '20px' }}>
                <strong>Authors:</strong> Taofeeq D. Ajibade, Seun E. Olufemi, Faith Atewologun, Bridget Ogungbemi, Daniel A. Adediran, Elijah Ayandeyi
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Calendar size={16} />
                  <span>Dec 4 - 6, 2024</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <MapPin size={16} />
                  <span>Chida International Hotel, Abuja</span>
                </div>
              </div>
              <p style={{ color: '#444' }}>
                Presented at a summit focused on "Strengthening Collaboration Towards Achieving Cervical Cancer Elimination Targets in Nigeria." Key takeaways included expanding outreach to underserved areas, strengthening collaborations with policymakers, and designing targeted campaigns to address cultural barriers to HPV vaccination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section section-light">
        <div className="container">
          <div className="reveal" style={{
            background: 'var(--sand)',
            borderRadius: 'var(--radius)',
            padding: '50px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <FileText size={48} color="var(--purple-deep)" />
            </div>
            <h2 style={{ marginBottom: '20px' }}>Publications & Reports</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: '#555' }}>
              Our 2024 Annual Report provides a comprehensive overview of our campaigns, research findings, partnerships, and the measurable impact we've made in our first year.
            </p>
            <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); alert("Annual Report PDF download will be available here."); }}>
              Download 2024 Annual Report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
