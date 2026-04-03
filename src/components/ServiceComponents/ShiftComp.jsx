import React from 'react';
import '../../css/ServiceComponents/ShiftComp.css';
import { FaArrowRight } from 'react-icons/fa';

const ShiftComp = ({ 
    subtitle = "LOREM IPSUM", 
    title = "The YASYA Shift", 
    italicTitle = '"Our AI understands your SAP system — not just supports it."',
    shifts = [
        { before: "Manual KT", after: "AI-driven system intelligence" },
        { before: "Fragmented knowledge", after: "Unified knowledge graph" },
        { before: "Delayed readiness", after: "Day 1 operational readiness" }
    ]
}) => {
    return (
        <section className="shift-section">
            <div className="shift-container">
                <div className="shift-header">
                    <p className="sub-para-text">
                        <span className="leadership-blue-square"></span>
                        {subtitle}
                    </p>
                    <h2 className="head-text">{title}</h2>
                    <p className="shift-italic-title">{italicTitle}</p>
                </div>

                <div className="shift-list">
                    {shifts.map((item, index) => (
                        <div key={index} className="shift-item">
                            <div className="shift-card before">
                                <p className="shift-text">{item.before}</p>
                            </div>
                            <div className="shift-arrow-box">
                                <div className="shift-arrow-circle">
                                    <FaArrowRight className="shift-arrow-icon" />
                                </div>
                            </div>
                            <div className="shift-card after">
                                <p className="shift-text">{item.after}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShiftComp;
