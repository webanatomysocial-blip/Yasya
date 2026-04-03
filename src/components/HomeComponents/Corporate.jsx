import React from 'react'
import '../../css/HomeComponents/Corporate.css'
import loc1 from '../../assets/Home/location1.avif'
import loc2 from '../../assets/Home/location2.avif'
const Corporate = () => {
    return (
        <div className='corporate-con'>
            <div className='corporate-wrapper'>
                <div className='corporate-top-row'>
                    <div className='corporate-heading-box'>
                        <div className='corporate-subtitle-box'>
                            <p className='sub-para-text'><span className="leadership-blue-square"></span>LOCATIONS</p>
                        </div>
                        <h1 className='head-text'>Our Global Corporate Presence</h1>
                    </div>
                    <div className='corporate-heading-right'>
                        <p className='para-text'>YASYA operates through strategically structured legal entities across international and Indian markets, ensuring compliance, delivery governance, and global client engagement capability.</p>
                    </div>
                </div>
                <div className="corporate-cards">
                    <div className="corporate-card">
                        <div className="corpor-img">
                            <img src={loc1} alt="" />
                        </div>
                        <div className="corporate-info">
                            <h3 className="para-text" style={{ textAlign: "center" }}>YASYA Technologies Pte Ltd
                                Singapore</h3>
                            <p className="sub-para-text" style={{ textAlign: "center" ,fontSize:"13px",paddingTop:"5px"}}>68 Circular Road, #02-01, Singapore 049422</p>
                        </div>
                    </div>
                    <div className="corporate-card">
                        <div className="corpor-img">
                            <img src={loc2} alt="" />
                        </div>
                        <div className="corporate-info">
                            <h3 className="para-text" style={{ textAlign: "center" }}>YASYA Infotech LLP
                                Hyderabad India</h3>
                            <p className="sub-para-text" style={{ textAlign: "center" ,fontSize:"13px",paddingTop:"5px"}}>Shakti Nilayam, Madhapur, Hyderbad, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Corporate