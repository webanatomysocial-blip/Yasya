import React from 'react';
import '../../css/AboutComponents/GridCard.css';

const GridCard = ({ 
    title, 
    description, 
    index, 
    icon,
    bgColor = "#ffffff", 
    cardBorderLeftColor, 
    cardBorderTopColor, 
    titleBorderLeftColor,
    minHeight = "200px",
    border
}) => {
    
    // Dynamic styles for the outermost card container
    const cardStyles = {
        backgroundColor: bgColor,
        border: border || 'none',
        borderLeft: border ? border : (cardBorderLeftColor ? `3px solid ${cardBorderLeftColor}` : 'none'),
        borderTop: border ? border : (cardBorderTopColor ? `3px solid ${cardBorderTopColor}` : 'none'),
        minHeight: minHeight
    };

    // Dynamic styles for the index/title border mapping (eg. for "Why Yasya")
    const titleStyles = {
        borderLeft: titleBorderLeftColor ? `3px solid ${titleBorderLeftColor}` : 'none',
        paddingLeft: titleBorderLeftColor ? '12px' : '0'
    };

    return (
        <div className="yasya-grid-card" style={cardStyles}>
            <div className="grid-card-header" style={titleStyles}>
                {icon ? (
                    <div className="grid-card-icon-container">
                        {icon}
                    </div>
                ) : (
                    index && <span className="grid-card-index">{index}</span>
                )}
                <h3 className="grid-card-title">{title}</h3>
            </div>
            <p className="grid-card-desc">{description}</p>
        </div>
    );
};

export default GridCard;
