import React from 'react';
import BlogLayout from '../components/BlogLayout';
import heroImage from '../blogs/blogs-images/3.jpeg';

const FiguredOutPost = ({ dynamicRecentPosts }) => {
    const content = (
        <>
            <p className="lead-text">
                You don't need to have it all figured out before you start.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </>
    );

    const recentPosts = dynamicRecentPosts || [];

    return (
        <BlogLayout 
            category="Blogs"
            title="You Don't Need to Have It All Figured Out"
            image={heroImage}
            content={content}
            recentPosts={recentPosts}
        />
    );
};

export default FiguredOutPost;
