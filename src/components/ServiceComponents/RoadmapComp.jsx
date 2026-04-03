import React from 'react';
import '../../css/ServiceComponents/RoadmapComp.css';

const RoadmapComp = ({
    subtitle = "LOREM IPSUM",
    title = "Implementation Roadmap",
    desc = "Timeline-based execution for rapid value delivery.",
    steps = [
        { title: "Discovery", duration: "1-3 weeks" },
        { title: "Code & Config Mining", duration: "1-2 months" },
        { title: "Ticket Correlation", duration: "1-2 months" },
        { title: "Knowledge Graph Setup", duration: "1-2 months" }
    ]
}) => {
    return (
        <section className="roadmap-section">
            <div className="roadmap-container">
                <div className="roadmap-header">
                    <p className="sub-para-text">
                        <span className="leadership-blue-square"></span>
                        {subtitle}
                    </p>
                    <h2 className="head-text">{title}</h2>
                    <p className="para-text">{desc}</p>
                </div>

                <div className="roadmap-list">
                    {steps.map((step, idx) => (
                        <div key={idx} className="roadmap-row">
                            <div className="roadmap-row-title">
                                {step.title}
                            </div>
                            <div className="roadmap-row-duration">
                                {step.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapComp;
