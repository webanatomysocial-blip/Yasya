import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import '../../css/AboutComponents/OurStory.css';

const CounterComp = ({ counters = [
  { end: 30, suffix: "+", label: "Team Members" },
  { end: 25, suffix: "Y", label: "Leadership Experience" },
  { end: 3, duration: 1500, label: "Global Offices" },
  { end: 100, duration: 2500, suffix: "+", label: "Projects Delivered" },
  { end: 0, duration: 1000, label: "Debt Company" }
], title, subTitle, desc ,padding="0px"}) => {
  return (
    <div className="counter-comp-wrapper">
      {(title || subTitle || desc) && (
        <div className="counter-header">
          {subTitle && (
            <p className='sub-para-text'>
              <span className="leadership-blue-square"></span>
              {subTitle}
            </p>
          )}
          {title && <h1 className='head-text'>{title}</h1>}
          {desc && <p className='para-text'>{desc}</p>}
        </div>
      )}
      <div className="about-counters-section">

        
        {counters.map((counter, index) => (
            <div className="about-counter-item" key={index}>
                <div className="counter-line"></div>
                <AnimatedCounter 
                    end={counter.end} 
                    suffix={counter.suffix || ""} 
                    duration={counter.duration || 2000} 
                />
                <p className="counter-labels">{counter.label}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default CounterComp;