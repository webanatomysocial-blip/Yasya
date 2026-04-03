import React from 'react';
import '../../css/HomeComponents/Testimonials.css';
import { FaStar } from 'react-icons/fa';
import Tab1 from '../../assets/Home/Tab1.avif';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Chen",
      role: "CTO, Global Logistics",
      text: "YASYA's SAP with Generative AI transformed our supply chain visibility. The integration was seamless, and the insights we're getting now are beyond anything we imagined.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Director of Operations",
      text: "The Fusion LM approach provided us with a clear roadmap for our digital transformation. Their team's deep expertise and strategic clarity made all the difference.",
      rating: 5
    },
    {
      id: 3,
      name: "David Kumar",
      role: "Head of Infrastructure",
      text: "Working with the YASYA team was a game-changer for our cloud migration. Their commitment to quality and accountability is unparalleled in the industry.",
      rating: 5
    },
    {
      id: 4,
      name: "Marcus Chen",
      role: "CTO, Global Logistics",
      text: "YASYA's SAP with Generative AI transformed our supply chain visibility. The integration was seamless, and the insights we're getting now are beyond anything we imagined.",
      rating: 5
    },
    {
      id: 5,
      name: "Sarah Jenkins",
      role: "Director of Operations",
      text: "The Fusion LM approach provided us with a clear roadmap for our digital transformation. Their team's deep expertise and strategic clarity made all the difference.",
      rating: 5
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Head of Infrastructure",
      text: "Working with the YASYA team was a game-changer for our cloud migration. Their commitment to quality and accountability is unparalleled in the industry.",
      rating: 5
    },
  ];

  return (
    <div className="testimonials-con">
      <div className="testimonials-wrapper">
        <div className="testimonials-top-row">
          <div className="testimonials-heading-box">
            <div className="testimonials-subtitle-box">
              <p className="sub-para-text"><span className="leadership-blue-square"></span>TESTIMONIALS</p>
            </div>
            <h1 className="head-text">What our clients say</h1>
          </div>
          <div className="testimonials-heading-right">
            <p className="para-text">
              We follow a clear and collaborative process to ensure every project moves smoothly—from the first conversation to the final handover.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testi) => (
            <div key={testi.id} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testi.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testi.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={Tab1} alt={testi.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testi.name}</h4>
                  <p className="author-role">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
