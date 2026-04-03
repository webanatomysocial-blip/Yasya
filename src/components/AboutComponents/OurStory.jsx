import React, { useState, useEffect, useRef } from 'react';
import '../../css/AboutComponents/OurStory.css';
import AnimatedCounter from './AnimatedCounter';
import CounterComp from './CounterComp';

const OurStory = ({img,subtitle='',title='',desc=''}) => {
    return (
        <>
            <div className="our-story-con">
                <div className="our-story-img">
                    <img src={img} alt="" />
                </div>
                <div className="our-story-contents">
                    <p className='sub-para-text' style={{padding:'0px'}}><span className="leadership-blue-square"></span>{subtitle}</p>
                    <h1 className='head-text'>{title}</h1>
                    <p className='para-text'>{desc}
                    </p>
                </div>
            </div>

         
        </>
    )
}

export default OurStory