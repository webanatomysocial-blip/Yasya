import React from 'react'
import "../../css/CareersComponents/JoinUs.css"
import img from "../../assets/Career/banner.avif"
const JoinUs = () => {
  return (
    <>
    <div className="join-us-con">
      <div className="join-left-con">
        <img src={img} alt="" />
      </div>
      <div className="join-right-con">
        <h1 className='sub-para-text'>
          <span className='leadership-blue-square'></span>JOIN OUR TEAM
        </h1>
        <h1 className='head-text'>Shape the Future of Enterprise Technology</h1>
        <p className='para-text' style={{paddingTop:"10px"}}>At YASYA, we’re not just implementing technology — we’re architecting the future of enterprise intelligence. We’re looking for passionate problem-solvers who want to transform how businesses operate, make decisions, and grow.</p>
      </div>
    </div>
    </>
  )
}

export default JoinUs