import React from 'react';
import '../../css/ServiceComponents/FeatureOverview.css';
import { LuCircleCheck } from 'react-icons/lu';

const FeatureOverview = ({
    subtitle = "LOREM IPSUM",
    title = "LOREM IPSUM",
    features = []
}) => {
    return (
        <section className="feature-section">
            <div className="feature-container">
                <div className="feature-header">
                    <p className="sub-para-text">
                        <span className="leadership-blue-square"></span>
                        {subtitle}
                    </p>
                    <h2 className="head-text">{title}</h2>
                </div>

                <div className="feature-card-wrapper">
                    <div className="feature-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-column">
                                <div className="feature-column-header">
                                    <div className="feature-icon-box">
                                        {feature.icon}
                                    </div>
                                    <h3 className="feature-column-title">{feature.title}</h3>
                                </div>
                                <ul className="feature-list">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="feature-list-item">
                                            <LuCircleCheck className="feature-check-icon" />
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

export default FeatureOverview;
