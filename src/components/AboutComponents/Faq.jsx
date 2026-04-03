import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import ctaImg from '../../assets/sublogo.avif'
import '../../css/AboutComponents/Faq.css'

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button className="faq-question-btn" onClick={onClick}>
                <FaChevronRight className="faq-icon" />
                <span>{question}</span>
            </button>
            <div 
                className="faq-answer-wrapper" 
                style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
                <div className="faq-answer">
                    {answer}
                </div>
            </div>
        </div>
    )
}

const Faq = ({ 
    subTitle = "COMMON QUESTIONS", 
    title = "Frequently Asked Questions",
    desc = "Here, you'll find answers to some of the most common questions about our services, processes, and integration needs.",
    cardTitle = "At YASYA",
    cardDesc = "We do not treat S/4HANA as a project. We treat it as a long-term enterprise platform strategy.",
    faqs = [
        
    ]
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-header">
                <p className='sub-para-text' style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <span className="leadership-blue-square"></span>
                    {subTitle}
                </p>
                <h1 className='head-text'>{title}</h1>
                <p className='para-text' style={{ marginTop: '20px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {desc}
                </p>
            </div>

            <div className="faq-container">
                <div className="faq-left-card">
                    <div className="faq-card-top">
                        <img src={ctaImg} alt="Yasya Logo" className="faq-card-logo" />
                        <h2 className="faq-card-title">{cardTitle}</h2>
                        <p className="faq-card-desc">{cardDesc}</p>
                    </div>
                    <Link className='black-bg-btn' to="/contact" style={{ border: "2px solid white", backgroundColor: "white", color: "#B51B20", fontWeight: '700' }}>
                        Get Started Now <FaArrowRight style={{ marginLeft: '10px' }} />
                    </Link>
                </div>

                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={activeIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
