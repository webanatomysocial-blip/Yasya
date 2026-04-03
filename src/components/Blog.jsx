import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { blogMetadata } from '../blogs/metadata.js';
import { FiArrowUpRight } from 'react-icons/fi';
import '../css/Blog.css';

// Dynamically import all JSX files from blogs folder
const blogModules = import.meta.glob('../blogs/*.jsx', { eager: false });
const blogKeys = Object.keys(blogModules);

// Sort blogKeys by date in descending order (most recent first)
const sortedBlogKeys = blogKeys.sort((a, b) => {
  const blogNameA = a.split('/').pop().replace('.jsx', '');
  const blogNameB = b.split('/').pop().replace('.jsx', '');
  const metadataA = blogMetadata.find(blog => blog.id === blogNameA) || { date: '1970-01-01' };
  const metadataB = blogMetadata.find(blog => blog.id === blogNameB) || { date: '1970-01-01' };
  return new Date(metadataB.date) - new Date(metadataA.date);
});

const Blogs = ({ backgroundColor, limit = 6 }) => {
  const totalBlogs = sortedBlogKeys.length;
  const initialVisible = limit === 'all' ? totalBlogs : Math.min(limit, totalBlogs);
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  useEffect(() => {
    sortedBlogKeys.slice(0, visibleCount).forEach(key => {
      blogModules[key]().catch(error => {
        console.error(`Error preloading blog ${key}:`, error);
      });
      const blogName = key.split('/').pop().replace('.jsx', '');
      const metadata = blogMetadata.find(blog => blog.id === blogName);
      if (metadata?.image) {
        const img = new Image();
        img.src = metadata.image;
      }
    });
  }, [visibleCount]);

  const loadMore = () => {
    const newCount = totalBlogs;
    setVisibleCount(newCount);
    setTimeout(() => {
      window.lenis?.scrollTo(window.scrollY, { immediate: true });
    }, 0);
  };

  const showLoadMore = limit === 'all' && visibleCount < totalBlogs;

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'No date') return null;
    const dateObj = new Date(dateString);
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const dayYear = `${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    return (
      <div className="new-date">
        <span className="new-date-month">{month}</span>{" "} {dayYear}
      </div>
    );
  };

  return (
    <div className="whole-blog-section" style={{ backgroundColor }}>
      <div className="blogs-container">
        <div className="new-blogs-grid">
          {sortedBlogKeys.length === 0 && <p>No blogs found.</p>}
          {sortedBlogKeys.slice(0, visibleCount).map((key, index) => {
            const blogName = key.split('/').pop().replace('.jsx', '');
            const metadata = blogMetadata.find(blog => blog.id === blogName) || {
              title: blogName,
              slug: blogName.toLowerCase(),
              excerpt: 'No excerpt available.',
              image: '/images/placeholder.jpg',
              date: 'No date',
            };

            return (
              <Suspense fallback={<div className="new-blog-skeleton"></div>} key={index}>
                <Link to={`/blogs/${blogName}`} className="new-blog-card">
                  <div 
                    className="new-blog-bg" 
                    style={{ backgroundImage: `url(${metadata.image})` }}
                  ></div>
                  <div className="new-blog-overlay"></div>
                  
                  <div className="new-blog-arrow arrow-white">
                    <FiArrowUpRight size={20} />
                  </div>

                  <div className="new-blog-content">
                    {formatDate(metadata.date)}
                    <h3 className="new-title">{metadata.title}</h3>
                  </div>
                </Link>
              </Suspense>
            );
          })}
        </div>
        {showLoadMore && (
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Blogs;