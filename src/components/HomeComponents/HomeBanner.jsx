import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../css/HomeComponents/HomeBanner.css';
import Tab1 from '../../assets/Home/Tab1.avif';

import { blogMetadata } from '../../blogs/metadata.js';

const HomeBanner = () => {
    const recentBlogs = [...blogMetadata]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
        <div className="home-banner-con">
            {/* Background Video */}
            <div className="banner-video-wrapper">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="banner-video"
                >
                    <source src="https://framerusercontent.com/assets/4labGGKCPXQTSkrQlAVig6soJXg.mp4" type="video/mp4" />
                </video>
                <div className="banner-overlay"></div>
            </div>

            <div className="banner-content-wrapper">
                {/* Left Side */}
                <div className="banner-left-side">
                    <div className="banner-subtitle-box">
                        <p className="banner-subtitle">DIGITAL TRANSFORMATION PARTNER</p>
                    </div>
                    <h1 className="banner-title">Enterprise ERP <br /> Transformation.</h1>
                    <p className="banner-desc">
                        From global digital innovation with deep domain expertise in <br />
                        product integrity, quality, various ERP systems.
                    </p>
                    <div className="banner-btns">
                        <Link to="/services" className="red-bg-btn">
                            Explore Our Services <FaArrowRight size={14} />
                        </Link>
                        <Link to="/contact" className="banner-outline-btn">
                            Schedule Strategy Call <FaArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Right Side - Blog Carousel */}
                <div className="banner-right-side">
                    <div className="mini-blog-carousel">
                        {recentBlogs.length > 0 ? (
                            <>
                                <div className="blog-pagination"></div>
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                                    pagination={{
                                        clickable: true,
                                        el: '.blog-pagination',
                                    }}
                                    loop={true}
                                    className="blog-swiper"
                                >
                                    {recentBlogs.map((blog) => (
                                        <SwiperSlide key={blog.id}>
                                            <div className="mini-blog-card">
                                                <div className="blog-card-img">
                                                    <img src={blog.image} alt={blog.title} />
                                                </div>
                                                <div className="blog-card-info">
                                                    <p className="blog-category">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                                    <h3 className="blog-title">{blog.title}</h3>
                                                    <Link to={`/blogs/${blog.slug}`} className="blog-link">
                                                        Read More <FaArrowRight size={12} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        ) : (
                            <div className="coming-soon-placeholder">
                                <h3>Coming Soon</h3>
                                <p>Stay tuned for our latest insights and updates.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
