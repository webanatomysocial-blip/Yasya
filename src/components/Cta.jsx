import React from 'react'
import { Link } from 'react-router-dom'
import ctaImg from '../assets/sublogo.avif'
import '../css/Cta.css'
import { FaArrowRight } from 'react-icons/fa'
const Cta = ({ title = "", ctatext = "", desc = "",bg="#B51B20" }) => {
    return (
        <div className='cta-con'>
            <div className="cta-wrapper" style={{backgroundColor:bg}}>

                <div className="cta-left-con">
                    <h1 className='head-text' style={{color:"white"}}>{title}</h1>
                    <Link className='black-bg-btn' to="#" style={{border:"2px solid white",backgroundColor:"transparent",color:"white"}}>{ctatext} <FaArrowRight/></Link>
                </div>
                <div className="cta-right-con">
                    <img src={ctaImg} alt="" />
                    <p className='para-text' style={{color:"white"}}>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Cta