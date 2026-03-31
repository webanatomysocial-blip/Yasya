import React, { useState, useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../../css/HomeComponents/AddressingCounter.css'
import logo from '../../assets/sublogo.avif'

const useCountUp = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true)
      }
    }, { threshold: 0.2 })

    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    let startTime = null
    let animationFrame
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * endValue))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, endValue, duration])

  return { count, elementRef }
}

const CounterItem = ({ label, endValue, suffix = '' }) => {
  const { count, elementRef } = useCountUp(endValue)
  return (
    <div className="counter-item" ref={elementRef}>
      <span className="counter-label">{label}</span>
      <h2 className="counter-number">{count}{suffix}</h2>
    </div>
  )
}

const AddressingCounter = () => {
  return (
    <div className="counter-con">
      <div className="counter-wrapper">
        
        <div className="counter-top-row">
          <div className="counter-heading-box">
            <p className="counter-subtitle">Committed to clients, focused on results</p>
            <h1 className="counter-title">Addressing the realities of business &amp; improve work</h1>
          </div>
          <div className="counter-arrow-box">
            <img src={logo} alt="Arrow Loop" />
          </div>
        </div>

        <div className="counter-bottom-row">
          <div className="counter-desc-box">
            <p className="counter-desc">
              We are the foundation behind enterprise stability &amp; intelligent transformation.
            </p>
            <button className="counter-btn">
              More About Us <FaArrowRight />
            </button>
          </div>
          
          <div className="counter-grid-box">
            <div className="counter-grid">
              <CounterItem label="Years of Experience" endValue={25} suffix="+" />
              <CounterItem label="Global Regions" endValue={4} />
              <CounterItem label="Industry Verticals" endValue={8} suffix="+" />
              <CounterItem label="Value Driven" endValue={100} suffix="%" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddressingCounter