import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;
