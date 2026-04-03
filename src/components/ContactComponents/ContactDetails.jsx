import React from 'react';
import '../../css/ContactComponents/ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="contact-details-container">
      <div className="cd-header-flex">
        <p className="cd-blue-tag">
          <span className="cd-blue-square"></span> GET IN TOUCH
        </p>
        <h2 className="cd-main-title">Contact Details</h2>
      </div>

      <div className="cd-content">
        <div className="cd-locations-section">
          <p className="cd-red-tag">
            <span className="cd-red-square"></span> LOCATIONS :
          </p>
          <div className="cd-address-text">
            68 Circular Road, #02-01, Singapore 049422
          </div>
          <div className="cd-address-text">
            49, Shakthi Nilayam, Image Gardens Road, Silicon Valley Society, Madhapur,<br/>
            Hyderabad 500081, Telangana, India
          </div>
        </div>

        <div className="cd-info-grid">
          <div className="cd-info-col">
            <h3 className="cd-info-heading">Office Hours</h3>
            <p className="cd-info-detail">
              <strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM
            </p>
            <p className="cd-info-detail">
              <strong>Saturday – Sunday:</strong> Closed (but our heart is always open)
            </p>
          </div>

          <div className="cd-info-col">
            <h3 className="cd-info-heading">Email</h3>
            <p className="cd-info-detail">
              operations@yasyatech.com
            </p>
          </div>

          <div className="cd-info-col">
            <h3 className="cd-info-heading">Phone</h3>
            <p className="cd-info-detail">
              +91 82971 90696
            </p>
            <p className="cd-info-detail">
              +91 995 968 2696
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
