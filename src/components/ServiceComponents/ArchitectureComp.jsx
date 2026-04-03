import React from 'react';
import '../../css/ServiceComponents/ArchitectureComp.css';
import Bimage from '../../../src/assets/Services/banner.avif'
const ArchitectureComp = ({
    subtitle = "LOREM IPSUM",
    title = "Architecture Snapshot",
    layers = [
        { label: "L1", title: "Data Connectors (SAP APIs, ITSM Tools)" },
        { label: "L1", title: "Parsing & ETL (Code + Logs + Config)" },
        { label: "L1", title: "Semantic Layer (Knowledge Mapping)" },
        { label: "L1", title: "AI / LLM Engine" },
        { label: "L1", title: "Dashboard & Insights Layer" }
    ],
    image = Bimage 
}) => {
    return (
        <section className="arch-section">
            <div className="arch-container">
                <div className="arch-header">
                    <p className="sub-para-text">
                        <span className="leadership-blue-square"></span>
                        {subtitle}
                    </p>
                    <h2 className="head-text">{title}</h2>
                </div>

                <div className="arch-content">
                    <div className="arch-layers">
                        {layers.map((layer, idx) => (
                            <div key={idx} className="arch-layer-item">
                                <div className="arch-layer-badge">
                                    {layer.label}
                                </div>
                                <div className="arch-layer-info">
                                    <p className="arch-layer-title">{layer.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="arch-visual">
                        <img src={image} alt="Architecture Visualization" className="arch-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureComp;
