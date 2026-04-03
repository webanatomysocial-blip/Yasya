import React from 'react';
import BlogLayout from '../components/BlogLayout';
import heroImage from '../blogs/blogs-images/2.png';

const FearFounderPost = ({ dynamicRecentPosts }) => {
    const content = (
        <>
            <p className="lead-text">
                This is a dummy blog post about the fear every founder has.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </>
    );

    const recentPosts = dynamicRecentPosts || [];

    return (
        <BlogLayout 
            category="Blogs"
            title="The Fear Every Founder Has (But Nobody Talks About)"
            image={heroImage}
            content={content}
            recentPosts={recentPosts}
        />
    );
};

export default FearFounderPost;
