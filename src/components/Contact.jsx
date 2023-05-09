import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries or feedback:</p>
        <div className='contact-details'>
          <div>
            <h3>Head of Communications: Paul Macharia</h3>
            <p><i className="fas fa-phone"></i> <a href="tel:+254723242389">(254) 723-242-389</a></p> 
            <p><i className="fas fa-envelope"></i> <a href="mailto:pmacharia@sielwelleague.co.ke">pmacharia@sielwelleague.co.ke</a></p>
          </div>
          <div>
            <h3>Operations Manager: Shem Otieno</h3>
            <p><i className="fas fa-phone"></i> <a href="tel:+254713403251">(254) 713-403-251</a></p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:somuta@sielwelleague.co.ke">somuta@sielwelleague.co.ke</a></p>
          </div>
          <div>
            <h3>Official League Communications</h3>
            <p><i className="fas fa-envelope"></i> <a href="mailto:info@sielwellleague.co.ke">info@sielwellleague.co.ke</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
