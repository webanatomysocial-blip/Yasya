import React from 'react'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import Blogs from '../components/Blog'
import yourNewImage from '../assets/About/banner.avif';

const Blog = () => {
  return (
    <>
      <AboutBanner
        subtitle="OUR BLOG"
        title="Insights From the Vanguard of Digital Transformation."
        desc="Expert perspectives on SAP innovation, intelligent automation, and the future of enterprise technology — delivered by leaders with 25+ years of hands-on experience."
        cta={false}
        bgImage={yourNewImage}
      />
      <div className="blog-list-wrapper">
        <Blogs limit="all" backgroundColor="transparent" />
      </div>
    </>
  )
}

export default Blog