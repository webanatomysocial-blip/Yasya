import React from 'react'
import '../css/Blogs.css'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import yourNewImage from '../assets/About/banner.avif';
const Blogs = () => {
  return (
    <>
      <AboutBanner
        subtitle="Our Blogs"
        title="Insights That Drive Impact"
        desc="Transform your enterprise with SAP S/4HANA, the intelligent ERP platform that delivers real-time insights, automation, and seamless integration across your entire business ecosystem."
        cta={false}
        bgImage={yourNewImage}
      />
    </>
  )
}

export default Blogs