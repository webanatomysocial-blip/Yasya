import React from 'react';
import "../../css/HomeComponents/DigitalTrans.css";

const DigitalTrans = ({
  cardsList = [],
  subtitle = "Build huge wealth with clear plans and expert guidance",
  title = "Our digital Transformation Journey",
  desc = "",
  cardTitle = "",
  mediaType = "video", // "video" or "image"
  mediaSrc = null
}) => {
  return (
    <div className="digital-con">
      <div className="digital-con-headings">
        <p className='sub-para-text' style={{ fontSize: "14px", color: "#B51B20", paddingBottom: "5px" }}>{subtitle}</p>
        <h1 className='head-text'>{title}</h1>
        <p className='sub-para-text' style={{ marginTop: "10px", textAlign: "center" }}>
          {desc}
        </p>
      </div>

      <div className="digital-content-con">
        <div className="digital-video-con">
          <div className="video-sticky-wrapper">
            {mediaType === 'video' && mediaSrc ? (
              <video src={mediaSrc} autoPlay loop muted playsInline className="digital-video"></video>
            ) : mediaType === 'image' && mediaSrc ? (
              <img src={mediaSrc} alt={title} className="digital-video" />
            ) : (
              <div style={{ padding: "20px", color: "#666" }}>Media not available</div>
            )}
          </div>
        </div>

        <div className="digital-cards-con">
          <p className='sub-para-text' style={{ paddingBottom: "25px" }}>
            {cardTitle}</p>
          {cardsList.length > 0 ? (
            cardsList.map((card, idx) => (
              <div
                className="digital-card"
                key={card.id || idx}
                style={{ top: '20vh' }}
              >

                <div className="num">
                  {card.icon ? (
                    (() => {
                      const Icon = card.icon;
                      return <Icon size={22} />;
                    })()
                  ) : (
                    card.id || idx + 1
                  )}
                </div>
                <div className="digital-card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc sub-para-text">{card.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "20px" }}>No cards available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalTrans;
