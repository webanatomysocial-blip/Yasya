import React from 'react';
import '../../css/ServiceComponents/SpectrumComp.css';
import { LuShieldCheck, LuGlobe, LuCircleCheck } from 'react-icons/lu';

const SpectrumComp = ({
    subtitle = "LOREM IPSUM",
    title = "AMS Spectrum",
    desc = "Comprehensive coverage across every layer of your SAP landscape.",
    columns = [
        {
            title: "Coverage",
            icon: <LuShieldCheck />,
            items: [
                "L1 / L2 / L3 Support",
                "Incident, Problem, Change, Release Management",
                "Application & Infrastructure Support",
                "Continuous Optimization",
                "Continuous Optimization"
            ]
        },
        {
            title: "Delivery",
            icon: <LuGlobe />,
            items: [
                "Global delivery centers (India + Singapore)",
                "24x7, 365 support",
                "SLA-driven engagement models"
            ]
        }
    ]
}) => {
    return (
        <section className="spectrum-section">
            <div className="spectrum-container">
                <div className="spectrum-header">
                    <p className="sub-para-text">
                        <span className="leadership-blue-square"></span>
                        {subtitle}
                    </p>
                    <h2 className="head-text">{title}</h2>
                    <p className="para-text">{desc}</p>
                </div>

                <div className="spectrum-card-wrapper">
                    <div className="spectrum-grid">
                        {columns.map((col, idx) => (
                            <div key={idx} className="spectrum-column">
                                <div className="spectrum-column-header">
                                    <div className="spectrum-icon-box">
                                        {col.icon}
                                    </div>
                                    <h3 className="spectrum-column-title">{col.title}</h3>
                                </div>
                                <ul className="spectrum-list">
                                    {col.items.map((item, i) => (
                                        <li key={i} className="spectrum-list-item">
                                            <LuCircleCheck className="spectrum-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpectrumComp;
