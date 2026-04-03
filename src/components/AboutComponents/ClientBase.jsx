import React from 'react';
import { MdOutlineHome } from 'react-icons/md';
import '../../css/AboutComponents/ClientBase.css';

const ClientBase = () => {
  const engagements = [
    {
      title: "SAP OEM Partnerships",
      description: "Direct collaboration with SAP as a certified partner, delivering implementations and support through established OEM channels."
    },
    {
      title: "Direct Engagements",
      description: "End-to-end digital transformation projects won through competitive evaluations and long-term relationship building with enterprise clients."
    },
    {
      title: "Leadership Heritage",
      description: "Deep enterprise relationships built over 25 years by our promoters across consulting, delivery, and executive roles."
    }
  ];

  return (
    <div className="client-base-con">
      <div className="client-base-headings-con">
        <p className='sub-para-text' style={{padding: '0px'}}>
          <span className="leadership-blue-square"></span>CLIENT ENGAGEMENT SOURCES
        </p>
      </div>

      <div className="cb-cards-grid">
        {engagements.map((item, index) => (
          <div className="cb-card" key={index}>
            <div className="cb-card-top">
              <div className="cb-icon-wrap">
                <MdOutlineHome />
              </div>
              <h3 className="cb-card-title">{item.title}</h3>
            </div>
            <p className="cb-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientBase;