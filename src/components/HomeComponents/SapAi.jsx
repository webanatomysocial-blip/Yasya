import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../css/HomeComponents/SapAi.css';
import Tab1 from '../../assets/Home/Tab1.avif';

const slideData = [
  {
    id: 1,
    title: "ERP (Enterprise Resource Planning)",
    image: Tab1,
  },
  {
    id: 2,
    title: "Cloud Computing and allied Services",
    image: Tab1,
  },
  {
    id: 3,
    title: "Mobility",
    image: Tab1,
  },
  {
    id: 4,
    title: "Analytics & Business Intelligence",
    image: Tab1,
  },
  {
    id: 5,
    title: "AI Solutions & Automation",
    image: Tab1,
  },
];

const SapAi = () => {
  return (
    <div className="sap-ai-con">
      <div className="sap-ai-wrapper">
        
        <div className="sap-ai-top-row">
          <div className="sap-ai-heading-box">
            <div className="sap-ai-subtitle-box">
              <p className="sub-para-text"><span className="leadership-blue-square"></span>OUR VALUES</p>
            </div>
            <h1 className="head-text">SAP with Generative AI</h1>
          </div>
          
          <div className="sap-ai-heading-right">
            <p className="para-text">
              Advanced AI-driven solutions for optimized business processes
            </p>
          </div>
        </div>

        <div className="sap-ai-carousel-con">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.sap-ai-next-btn',
              prevEl: '.sap-ai-prev-btn',
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.2,
              },
            }}
            className="sap-ai-swiper"
          >
            {slideData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="sap-ai-card">
                  <div className="sap-ai-card-image-box">
                    <img src={slide.image} alt={slide.title} />
                    <div className="sap-ai-card-title-box">
                      <p>{slide.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="sap-ai-nav-btns">
            <button className="sap-ai-prev-btn" aria-label="Previous Slide">
              <FaChevronLeft size={20} />
            </button>
            <button className="sap-ai-next-btn" aria-label="Next Slide">
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SapAi;
