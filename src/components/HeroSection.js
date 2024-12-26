import React, { useState } from 'react';

import MembershipForm from './MembershipForm'; // Import the MembershipForm component
import './HeroSection.css'; // Optional: Add your own styles for HeroSection
import "./Navbar.css";

function HeroSection() {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>PNSBA - Introduction </h1>
        <p>Join us in making a positive impact for our Country.</p>
        <button className="btn-get-involved" onClick={toggleForm}>Become a Member</button>
      </div>
      

      {/* Show Membership Form if showForm is true */}
      {showForm && (
        <div className="form-container">
          <div className="form-modal">
            <button onClick={toggleForm} className="close-btn">Close</button>
            <MembershipForm />
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
