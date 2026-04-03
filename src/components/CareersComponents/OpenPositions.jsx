import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../../css/CareersComponents/OpenPositions.css';

const positionsData = [
  {
    category: "Engineering",
    roles: [
      "SAP S/4HANA Functional Consultant",
      "SAP ABAP / Technical Developer",
      "Quality Engineering Lead"
    ]
  },
  {
    category: "Marketing",
    roles: [
      "Digital Marketing Specialist",
      "Content & SEO Strategist"
    ]
  },
  {
    category: "Sales",
    roles: [
      "Enterprise Sales Executive – SAP",
      "Business Development Manager"
    ]
  },
  {
    category: "Design",
    roles: [
      "UI/UX Designer – Enterprise Apps",
      "Product Designer"
    ]
  }
];

const OpenPositions = () => {
  return (
    <div className="op-con">
      {/* Top row: heading left, text right */}
      <div className="op-top-row">
        <div className="op-top-left">
          <p className="sub-para-text" style={{ padding: 0 }}>
            <span className="leadership-blue-square"></span>CAREERS
          </p>
          <h1 className="head-text">Our open positions</h1>
        </div>
        <div className="op-top-right">
          <p className="para-text">
            We build products that make everyone's life easier, and we could use your help.
          </p>
        </div>
      </div>

      {/* Positions list grouped by category */}
      <div className="op-list">
        {positionsData.map((group, gi) => (
          <div className="op-group" key={gi}>
            <h2 className="op-category">{group.category}</h2>
            <div className="op-roles">
              {group.roles.map((role, ri) => (
                <div className="op-row" key={ri}>
                  <span className="op-role-title">{role}</span>
                  <a href="#" className="op-apply-btn">
                    Apply Now <FaArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPositions;
