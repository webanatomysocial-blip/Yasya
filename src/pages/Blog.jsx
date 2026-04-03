import React from 'react'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import Blogs from '../components/Blog'
import yourNewImage from '../assets/About/banner.avif';

const Blog = () => {
  return (
    <>
      <AboutBanner
        subtitle="Our Blogs"
        title="Insights That Drive Impact"
        desc="Lorem Ipsum dior salut asdfc afnc"
        cta={false}
        bgImage={yourNewImage}
      />
      <div style={{ padding: '40px 0' }}>
        <Blogs limit="all" backgroundColor="transparent" />
      </div>
    </>
  )
}

export default Blog