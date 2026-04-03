import React from 'react';
import '../../css/AboutComponents/LeadershipJourney.css';


const LeadershipJourney = ({subtitle='',title='',desc='',journeyData=[],bgcolor='#281BCE'}) => {
  return (
    <div className="lj-con">
      {/* Top heading row */}
      <div className="lj-top-row">
        <div className="lj-top-left">
          <p className="sub-para-text" style={{ padding: 0 }}>
            <span className="leadership-blue-square"></span>{subtitle}
          </p>
          <h1 className="head-text">{title}</h1>
        </div>
        <div className="lj-top-right">
          <p className="lj-tagline">
            {desc}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="lj-timeline">
        {/* Center vertical line */}
        <div className="lj-center-line"></div>

        {journeyData.map((item, index) => {
          const isRight = index % 2 === 0; 
          return (
            <div className={`lj-row ${isRight ? 'lj-row-right' : 'lj-row-left'}`} key={item.num}>
              {/* Left side card (Hidden on mobile or when item is on the right) */}
              <div className="lj-side lj-left-content">
                <div className="lj-card lj-card-left">
                  <h3 className="lj-card-title">{item.title}</h3>
                  <p className="lj-card-text"> {item.anantha}</p>
                  {item.csr && <p className="lj-card-text">{item.csr}</p>}
                </div>
              </div>

              {/* Central bubble */}
              <div className="lj-bubble" style={{backgroundColor:bgcolor}}>{item.num}</div>

              {/* Right side card (Shown on mobile for ALL items, or on desktop for right-side items) */}
              <div className="lj-side lj-right-content">
                <div className="lj-card lj-card-right">
                  <h3 className="lj-card-title">{item.title}</h3>
                  <p className="lj-card-text">{item.anantha}</p>
                  {item.csr && <p className="lj-card-text">{item.csr}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeadershipJourney;
