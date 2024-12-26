import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Education</h3>
        <p>Providing scholarships, educational resources, and mentorship.</p>
      </div>
      <div className="service-item">
        <h3>Community Development</h3>
        <p>Helping build stronger, more resilient communities.</p>
      </div>
      <div className="service-item">
        <h3>Business Support</h3>
        <p>Supporting Nepalese entrepreneurs and startups.</p>
        <img src="/member.jpeg" alt="Example" className="content-image" />
      </div>
    </section>
  );
}

export default ServicesSection;
