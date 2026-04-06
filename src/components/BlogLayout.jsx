import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/blog-post.css";

// Import specific icons from react-icons
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Footer from "./Footer";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const BlogLayout = ({ category, title, content, image, recentPosts }) => {
  const progressBarRef = useRef(null);
  const headerRef = useRef(null);
  const currentUrl = window.location.href;

  useEffect(() => {
    // Animate Progress Bar width based on scroll
    gsap.to(progressBarRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <>
      <div className="pod-post-page">
        {/* Hero Section - Full Width Banner Style */}
        <div 
          className="blog-hero-banner" 
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="blog-banner-overlay"></div>
          <div className="blog-banner-content">
            <p className="sub-para-text-white" style={{ opacity: 0.9, letterSpacing: '2px', marginBottom: '20px' }}>
              {category}
            </p>
            <h1 className="head-text-white">
              {title}
            </h1>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="pod-sticky-header-container" ref={headerRef}>
          <div className="pod-sticky-header">
            <div className="pod-header-content">
              <div className="pod-header-title">
                {title}
              </div>
              <div className="pod-header-actions">
                <div className="social-icons-header">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="social-link-header"
                  >
                    <FiFacebook size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="social-link-header"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-progress-bar" ref={progressBarRef}></div>
          </div>
        </div>

        {/* Three-Column Layout */}
        <div className="pod-container three-column-layout">
          <aside className="pod-sidebar-left">
            <div className="recent-posts">
              <h3>Recent posts</h3>
              {recentPosts &&
                recentPosts.map((post, index) => (
                  <a key={index} href={post.link} className="recent-post-item">
                    {post.title}
                    <hr />
                  </a>
                ))}
            </div>
          </aside>

          <div className="pod-main-content">
            <div className="pod-body">{content}</div>
          </div>

          <aside className="pod-sidebar-right">
            {/* GetFeaturedWidget removed */}
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogLayout;
