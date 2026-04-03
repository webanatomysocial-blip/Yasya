import React from 'react'
// import '../css/ContactComponents/Contact.css'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import ContactDetails from '../components/ContactComponents/ContactDetails'
import ContactForm from '../components/ContactComponents/ContactForm'
import Cta from '../components/Cta'
import yourNewImage from '../assets/About/banner.avif';
const Contact = () => {
  return (
    <>
      <AboutBanner
        subtitle="CONTACT US"
        title="Let’s Build Your Digital Transformation"
        desc="We’re here to help you unlock the full potential of SAP and AI. Let’s start the conversation."
        cta={false}
        bgImage={yourNewImage}
      />


      <ContactForm />
      <ContactDetails />

      <Cta
        title="Ready to Stabilize and Modernize your SAP Landscape?"
        desc="Let's Engineer Your Next-Stage Growth."
        ctatext='Talk to Experts'
      />
    </>
  )
}

export default Contact