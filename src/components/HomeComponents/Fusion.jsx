import React from "react";
import "../../css/HomeComponents/Fusion.css";
import { LuLock, LuShieldAlert, LuDollarSign, LuChartBar } from "react-icons/lu";

const fusionCards = [
  {
    icon: LuLock,
    title: "Siloed Knowledge",
    desc: "Critical documents scattered across SharePoint, OneDrive, file shares, and departmental drives. Employees spend 20% of their time searching for information they know exists.",
  },
  {
    icon: LuShieldAlert,
    title: "Security vs. Access",
    desc: "Cloud AI tools require sending sensitive data to third-party servers. Regulated industries (healthcare, legal, finance) cannot risk data leaving the network boundary.",
  },
  {
    icon: LuDollarSign,
    title: "Cost Spiral",
    desc: "Per-seat cloud AI licenses ($30–50/user/month) escalate rapidly. A 500-person org pays $180K–300K/year for AI search — with no control over the model or data.",
  },
  {
    icon: LuChartBar,
    title: "The Real Cost of Not Knowing",
    desc: "When a Finance analyst can't find the latest policy, when HR answers with outdated benefits info, when IT resolves the same ticket differently each time — the organization pays in inconsistency, compliance risk, and lost productivity.",
  },
];

const Fusion = () => {
  return (
    <div className="fusion-con">
      <div className="fusion-wrapper">
        
        <div className="fusion-top-row">
          <div className="fusion-heading-box">
            <div className="fusion-subtitle-box">
              <p className="sub-para-text">FUSION LM</p>
            </div>

            <h1 className="head-text">
              Your Organization's Knowledge. <br />
              Instantly Accessible.
            </h1>
          </div>

          <div className="fusion-heading-right">
            <p className="para-text">
              One platform that reads your documents, learns your language, and answers with confidence while keeping every byte of data within your security boundary.
            </p>
          </div>
        </div>

        <div className="fusion-grid">
          {fusionCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="fusion-card">
                <div className="fusion-card-icon-box">
                  {Icon && <Icon size={20} color="#fff" />}
                </div>

                <h3 className="fusion-card-title">{card.title}</h3>
                <p className="fusion-card-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Fusion;