import React from 'react';
import BlogLayout from '../components/BlogLayout';
import heroImage from '../blogs/blogs-images/4.jpeg';

const TellStoryPost = ({ dynamicRecentPosts }) => {
    const content = (
        <>
            <p className="lead-text">
                How to tell your story without feeling like PR.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </>
    );

    const recentPosts = dynamicRecentPosts || [];

    return (
        <BlogLayout 
            category="Blogs"
            title="How to Tell Your Story Without Feeling Like PR"
            image={heroImage}
            content={content}
            recentPosts={recentPosts}
        />
    );
};

export default TellStoryPost;
