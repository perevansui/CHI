import React, { useState, useEffect } from 'react';
import { Stethoscope, ShieldCheck, Activity, Calendar, ChevronDown } from 'lucide-react';

const CancerInfo = () => {
  const [openFaq, setOpenFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is cancer contagious?",
      answer: "No. Cancer is not contagious and cannot be caught from someone who has it."
    },
    {
      question: "Is cancer always hereditary?",
      answer: "No. While some cancers have genetic links, the majority are caused by environmental, lifestyle, and sporadic genetic changes rather than inherited genes."
    },
    {
      question: "When should I do a self-breast examination?",
      answer: "Self-breast examinations should be done monthly, ideally 3-5 days after your period ends."
    },
    {
      question: "Can men get breast cancer?",
      answer: "Yes. Though less common, men have breast tissue and can develop breast cancer. It's not exclusively a women's disease."
    },
    {
      question: "What is the role of HPV in cervical cancer?",
      answer: "Human Papillomavirus (HPV) is the primary cause of cervical cancer. Getting the HPV vaccine is an essential and highly effective preventive tool."
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>Cancer Info Hub</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            Knowledge is power. Learn about prevention, early detection, and the truths that dispel harmful myths.
          </p>
        </div>
      </section>

      {/* Main Info Blocks */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="feature-card reveal" style={{ background: 'var(--white)', padding: '40px 30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'inline-flex', padding: '15px', background: 'var(--pink-soft)', borderRadius: '50%', marginBottom: '20px' }}>
                <ShieldCheck size={28} color="var(--pink-bright)" />
              </div>
              <h3 style={{ marginBottom: '15px' }}>Cervical Cancer</h3>
              <p style={{ color: '#555', marginBottom: '15px' }}>Cervical cancer is highly preventable with the right knowledge and tools.</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#444' }}>
                <li style={{ marginBottom: '10px' }}>• <strong>Prevention:</strong> HPV vaccination is an essential preventive tool.</li>
                <li style={{ marginBottom: '10px' }}>• <strong>Detection:</strong> Regular screenings are crucial.</li>
                <li>• <strong>Focus:</strong> CHI promotes school-based education to increase HPV vaccine uptake.</li>
              </ul>
            </div>

            <div className="feature-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--white)', padding: '40px 30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'inline-flex', padding: '15px', background: 'var(--pink-soft)', borderRadius: '50%', marginBottom: '20px' }}>
                <Activity size={28} color="var(--pink-bright)" />
              </div>
              <h3 style={{ marginBottom: '15px' }}>Breast Cancer</h3>
              <p style={{ color: '#555', marginBottom: '15px' }}>Early detection saves lives. 75% of breast cancer cases are first detected through self-examination.</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#444' }}>
                <li style={{ marginBottom: '10px' }}>• <strong>Action:</strong> Perform monthly self-exams 3-5 days after your period.</li>
                <li style={{ marginBottom: '10px' }}>• <strong>Myth:</strong> It is caused by sporadic cell division, not evil spirits.</li>
                <li>• <strong>Fact:</strong> Men can also be diagnosed with breast cancer.</li>
              </ul>
            </div>

            <div className="feature-card reveal" style={{ transitionDelay: '0.2s', background: 'var(--white)', padding: '40px 30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'inline-flex', padding: '15px', background: 'var(--pink-soft)', borderRadius: '50%', marginBottom: '20px' }}>
                <Stethoscope size={28} color="var(--pink-bright)" />
              </div>
              <h3 style={{ marginBottom: '15px' }}>Prostate Cancer</h3>
              <p style={{ color: '#555', marginBottom: '15px' }}>Addressing the growing burden on our communities through education and collective action.</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#444' }}>
                <li style={{ marginBottom: '10px' }}>• <strong>Target:</strong> Breaking the stigma around prostate health for men.</li>
                <li style={{ marginBottom: '10px' }}>• <strong>Action:</strong> Community stakeholders meetings to discuss practical strategies.</li>
                <li>• <strong>Goal:</strong> Reducing late presentation to hospitals.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awareness Calendar */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="reveal">
              <h2 style={{ marginBottom: '20px' }}>Cancer Awareness Calendar</h2>
              <p style={{ color: '#555', marginBottom: '30px' }}>Throughout the year, CHI dedicates significant efforts to educating the public by celebrating key global awareness dates.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'var(--sand)', padding: '15px 20px', borderRadius: '12px' }}>
                  <Calendar size={24} color="var(--purple-deep)" />
                  <div><strong>Feb 4:</strong> World Cancer Day</div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'var(--sand)', padding: '15px 20px', borderRadius: '12px' }}>
                  <Calendar size={24} color="var(--purple-deep)" />
                  <div><strong>May 8:</strong> World Ovarian Cancer Day</div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'var(--sand)', padding: '15px 20px', borderRadius: '12px' }}>
                  <Calendar size={24} color="var(--purple-deep)" />
                  <div><strong>May 28:</strong> World Blood Cancer Day</div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'var(--pink-soft)', padding: '15px 20px', borderRadius: '12px' }}>
                  <Calendar size={24} color="var(--pink-bright)" />
                  <div><strong>October:</strong> Breast Cancer Awareness Month</div>
                </div>
              </div>
            </div>
            <div className="reveal text-center" style={{ transitionDelay: '0.2s', padding: '40px', background: 'var(--purple-deep)', borderRadius: 'var(--radius)', color: 'var(--white)' }}>
              <h3 style={{ color: 'var(--pink-soft)', marginBottom: '20px' }}>Take Home Message</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                <li>✓ Early detection is key.</li>
                <li>✓ Be vigilant.</li>
                <li>✓ Ensure routine screenings.</li>
                <li>✓ Lead a healthy lifestyle.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section text-center">
        <div className="container">
          <div className="section-header reveal">
            <h2>Frequently Asked Questions</h2>
            <p>Busting myths and bringing you the facts.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="reveal" style={{ 
                marginBottom: '15px', 
                background: 'var(--white)', 
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden'
              }}>
                <button 
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: 'var(--purple-deep)',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {faq.question}
                  <ChevronDown size={20} style={{ 
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)', 
                    transition: 'transform 0.3s ease' 
                  }} />
                </button>
                <div style={{
                  maxHeight: openFaq === index ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  padding: openFaq === index ? '0 20px 20px' : '0 20px',
                  color: '#555'
                }}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancerInfo;
