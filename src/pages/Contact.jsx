import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:cancerhealthinitiative@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 20px',
    border: '2px solid var(--sand)',
    borderRadius: '12px',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    background: 'var(--white)',
  };

  return (
    <div className="page-wrapper">
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>Contact Us</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Have questions? Want to partner, volunteer, or support our mission? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <h2>Get in Touch</h2>
              <p style={{ marginBottom: '40px', color: '#555' }}>
                Whether you're interested in volunteering, partnering, donating, or simply learning more about our work, our team is here to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div className="icon-wrapper" style={{ minWidth: '50px', minHeight: '50px', width: '50px', height: '50px' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p style={{ color: '#555' }}>cancerhealthinitiative@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div className="icon-wrapper" style={{ minWidth: '50px', minHeight: '50px', width: '50px', height: '50px' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong>Location</strong>
                    <p style={{ color: '#555' }}>Ogbomoso, Oyo State, Nigeria</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div className="icon-wrapper" style={{ minWidth: '50px', minHeight: '50px', width: '50px', height: '50px' }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong>Response Time</strong>
                    <p style={{ color: '#555' }}>We typically respond within 24–48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '40px',
                boxShadow: 'var(--shadow-md)',
              }}>
                <h3 style={{ marginBottom: '25px' }}>Send Us a Message</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--pink-bright)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--sand)'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--pink-bright)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--sand)'}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--pink-bright)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--sand)'}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--pink-bright)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--sand)'}
                  />
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={18} /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
