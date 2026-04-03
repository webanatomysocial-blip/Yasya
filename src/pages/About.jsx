import React from 'react'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import OurStory from '../components/AboutComponents/OurStory'
import OurValues from '../components/AboutComponents/OurValues'
import Different from '../components/AboutComponents/Different'
import OurStrengths from '../components/AboutComponents/OurStrengths'
import Leadership from '../components/AboutComponents/Leadership'
import ClientBase from '../components/AboutComponents/ClientBase'
import LeadershipJourney from '../components/AboutComponents/LeadershipJourney'
import Cta from '../components/Cta'
import CounterComp from '../components/AboutComponents/CounterComp'
import yourNewImage from '../assets/About/banner.avif';

const About = () => {
  const journeyData = [
  {
    num: "01",
    title: "Domains",
    anantha: "Anantha : GFCL (PSU) and Murugappa Group \u2013 Fertilizers & Chemical",
    csr: "CSR : GFCL (PSU) and Murugappa Group \u2013 Fertilizers & Chemical + NFCL"
  },
  {
    num: "02",
    title: "SAP \u2013 Consultant / Sr. Project Mgr",
    anantha: "Anantha : LGS Global, HP Middle East, SEAL Infotech \u2013 India /Qatar/ Africa",
    csr: "CSR : Birla soft, SEAL Infotech (HCL)"
  },
  {
    num: "03",
    title: "Regional Delivery Manager",
    anantha: "Anantha : SEAL Infotech (HCL)",
    csr: "CSR : Atum IT ( DH & SAP COE)"
  },
  {
    num: "04",
    title: "Country Manager",
    anantha: "Anantha : YASH Technologies",
    csr: "CSR : YASH Technologies ( GAMS BU Head )"
  },
  {
    num: "05",
    title: "Vice President \u2013 Global Technology Track",
    anantha: "Anantha : Suneratech Inc (Sutherland)",
    csr: null
  },
  {
    num: "06",
    title: "Independent Director",
    anantha: "Anantha : Abhiyanta \u2013 India / Singapore",
    csr: "CSR : Jeesha Info services (COO)"
  },
  {
    num: "07",
    title: "Co-Founder",
    anantha: "Anantha : Abhiyanta SG",
    csr: null
  },
  {
    num: "08",
    title: "Founder \u2013 YASYA",
    anantha: "Anantha",
    csr: "CSR"
  }
];

  return (
    <>
      <div className="about-page-container">
        <AboutBanner bgImage={yourNewImage} />
        <OurStory
                  img={yourNewImage}
                  subtitle="ABOUT US"
                  title="Our Story"
                  desc={<>YASYA Technologies is a global SAP and digital transformation partner headquartered in Singapore (68 Circular Road, #02-01), with delivery operations in Hyderabad, India.
                        <br />
                        <br />
                        Founded by Anantha Yellapragada and Srinivas Reddy Chinnam (CSR), two industry veterans with over 25 years each in SAP enterprise delivery, YASYA was built on a simple premise: bring enterprise-grade SAP expertise to companies without the overhead of large consulting firms.
                        <br />
                        <br />
                        Our engagements span RISE with SAP, S/4HANA, SuccessFactors, SAP Ariba, AI-driven AMS, and Higher Education ERP — powered by a team of 30+ consultants, 7 industry SMEs, and a dedicated Global Capability Lab in Bangalore.</>}
         />
          <CounterComp 
           counters={[
            { end: 30, suffix: "+", label: "Team Members" },
            { end: 25, suffix: "Y", label: "Leadership Experience" },
            { end: 3, duration: 1500, label: "Global Offices" },
            { end: 100, duration: 2500, suffix: "+", label: "Projects Delivered" },
            { end: 0, duration: 1000, label: "Debt Company" }
           ]}
           />
        <OurValues />
        <Different />
        <OurStrengths />
        <Leadership />
        <ClientBase />

        <LeadershipJourney subtitle='OUR PROMOTERS PROFESSIONAL JOURNEY' title='Leadership Journey' desc={<>25+ Years of SAP & Industry<br />Transformation Across Global Enterprises</>}journeyData={journeyData}/>

        <Cta
          title={<>Transform Your SAP<br /> Support into an Intelligent System</>}
          desc="Let's Engineer Your Next-Stage Growth."
          ctatext="Talk to Experts"
          bg="#281BCE"
      />
    </div>
    </>
  )
}

export default About