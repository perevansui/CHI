import React from 'react';
import { Link } from 'react-router-dom';

const GenericPage = ({ title, subtitle }) => {
  return (
    <div className="page-wrapper">
      <section className="page-header section-dark text-center" style={{ padding: '120px 0 80px' }}>
        <div className="container reveal">
          <h1>{title}</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--sand)' }}>
            {subtitle}
          </p>
        </div>
      </section>
      <section className="section text-center">
        <div className="container reveal">
          <h2>Content Coming Soon</h2>
          <p>We are actively organizing our data for this section. Please check back later.</p>
          <Link to="/" className="btn btn-primary" style={{marginTop: '30px'}}>Return Home</Link>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
