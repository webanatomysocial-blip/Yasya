import React from 'react'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import LogoCarousel from '../components/HomeComponents/LogoCarousel'

import img1 from "../assets/carousel.svg";
import img2 from "../assets/carousel.svg";
import img3 from "../assets/carousel.svg";
import img4 from "../assets/carousel.svg";
import img6 from "../assets/carousel.svg";
import img9 from "../assets/carousel.svg";
import JoinUs from '../components/CareersComponents/JoinUs'
import WhyWorkWithUs from '../components/CareersComponents/WhyWorkWithUs'
import OpenPositions from '../components/CareersComponents/OpenPositions'
import Cta from '../components/Cta';
import yourNewImage from '../assets/About/banner.avif';

const Career = () => {
  return (
    <>
    <AboutBanner 
    subtitle="CAREERS"
    title="Join Our Growing Team"
    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    cta={true}
    bgImage={yourNewImage}
    />
    <LogoCarousel title={<>Trusted by <br/>teams  worldwide</>} partnersImages={[img1,img2,img3,img4,img6,img9]}/>
    <JoinUs/>
    <WhyWorkWithUs />
    <OpenPositions />
    <Cta
    title="Ready to Stabilize and Modernize your SAP Landscape?"
    desc=""
    ctatext='Talk to Experts'
    />
    </>
  )
}

export default Career