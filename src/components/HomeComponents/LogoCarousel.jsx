import React from "react";
import "../../css/HomeComponents/LogoCarousel.css";

// Images
import img1 from "../../assets/logo.avif";
import img2 from "../../assets/logo.avif";
import img3 from "../../assets/logo.avif";
import img4 from "../../assets/logo.avif";
import img6 from "../../assets/logo.avif";
import img9 from "../../assets/logo.avif";

export default function LogoCarousel({
  title = "Co-Innovative Partnerships",
  partnersImages = []
}) {

  const defaultImages = [img1, img2, img3, img4, img6, img9];
  const imagesToRender = partnersImages.length ? partnersImages : defaultImages;

  return (
    <section className="recognitions-section partners-section">
      <div className="recognitions-container">

        <div className="recognitions-text-col">
          <h2 className="sub-head-text">{title}</h2>
        </div>

        <div className="recognitions-marquee-col">
          <div className="recognitions-marquee-track">

            {imagesToRender.map((img, index) => (
              <div key={`param-${index}`} className="recognition-item">
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="recognition-img"
                />
              </div>
            ))}

            {imagesToRender.map((img, index) => (
              <div key={`dup-${index}`} className="recognition-item">
                <img
                  src={img}
                  alt={`Partner Duplicate ${index + 1}`}
                  className="recognition-img"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}