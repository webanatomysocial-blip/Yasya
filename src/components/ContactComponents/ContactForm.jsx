import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../../css/ContactComponents/ContactForm.css';

const services = [
  "SAP S/4HANA Implementation",
  "SAP AMS & Support",
  "Quality Engineering",
  "Product Engineering",
  "ERP Modernization",
  "Digital Transformation Consulting",
  "Other"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // SMTP connection will be added later
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="cf-section">
      {/* Left sticky panel */}
      <div className="cf-left">
        <div className="cf-sticky">
          <p className="sub-para-text" style={{ padding: 0 }}>
            <span className="leadership-blue-square"></span>GET STARTED
          </p>
          <h1 className="head-text">Contact us</h1>
        </div>
      </div>

      {/* Right: form */}
      <div className="cf-right">
        {submitted ? (
          <div className="cf-success">
            <h2 className="cf-success-title">Thank you!</h2>
            <p className="cf-success-msg">We've received your message and will get back to you within 24 hours.</p>
            <button className="cf-submit-btn" onClick={() => setSubmitted(false)}>
              Send another <FaArrowRight size={13} />
            </button>
          </div>
        ) : (
          <form className="cf-form" onSubmit={handleSubmit} noValidate>
            {/* Row 1: Full Name + Email */}
            <div className="cf-row">
              <div className="cf-field">
                <label className="cf-label">Full Name</label>
                <input
                  className="cf-input"
                  type="text"
                  name="fullName"
                  placeholder="Jane Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-field">
                <label className="cf-label">Email</label>
                <input
                  className="cf-input"
                  type="email"
                  name="email"
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone + Date */}
            <div className="cf-row">
              <div className="cf-field">
                <label className="cf-label">Phone</label>
                <input
                  className="cf-input"
                  type="tel"
                  name="phone"
                  placeholder="+123 476 9799"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="cf-field">
                <label className="cf-label">Select Date</label>
                <input
                  className="cf-input"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 3: Service dropdown */}
            <div className="cf-field cf-field-full">
              <label className="cf-label">Service Interested In</label>
              <select
                className="cf-input cf-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select...</option>
                {services.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Row 4: Message */}
            <div className="cf-field cf-field-full">
              <label className="cf-label">Your Message</label>
              <textarea
                className="cf-input cf-textarea"
                name="message"
                placeholder="Tell us a bit about your goals..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="cf-submit-btn">
              Submit Form <FaArrowRight size={13} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
