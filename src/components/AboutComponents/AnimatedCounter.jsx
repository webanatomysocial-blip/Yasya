import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTimestamp = null;
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        
                        // easeOutQuart easing for smooth deceleration
                        const easeProgress = 1 - Math.pow(1 - progress, 4);
                        
                        setCount(Math.floor(easeProgress * end));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.disconnect(); // Animate only once when scrolled into view
                }
            },
            { threshold: 0.1 } // Trigger even if partially visible on mobile
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <h2 className="counter-value" ref={countRef}>
            {count}{suffix}
        </h2>
    );
};

export default AnimatedCounter;
