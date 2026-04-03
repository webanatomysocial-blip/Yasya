import React from 'react'
import AboutBanner from '../../components/AboutComponents/AboutBanner'
import OurStrengths from '../../components/AboutComponents/OurStrengths'
import { FaCode, FaCloud, FaPaintBrush, FaPlug, FaTools, FaSync } from 'react-icons/fa'
import CounterComp from '../../components/AboutComponents/CounterComp'
import Cta from '../../components/Cta'
import Faq from '../../components/AboutComponents/Faq'
import yourNewImage from '../../assets/About/banner.avif';
const ProductEngineering = () => {
  const ProductEngineeringData = [
    {
      title: "Full-Stack Development",
      description: "End-to-end application development using modern frameworks: React, Angular, Node.js, Python, Java, .NET"
    },
    {
      title: "Cloud & Platform Engineering",
      description: "Cloud-native solutions on AWS, Azure & GCP with Kubernetes, serverless, and Infrastructure-as-Code"
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design with prototyping, user research, accessibility compliance, and design systems"
    },
    {
      title: "API & Integration",
      description: "RESTful/GraphQL APIs, microservices, event-driven architecture, and enterprise integration patterns"
    },
    {
      title: "DevOps & SRE",
      description: "CI/CD pipelines, automated testing, monitoring, SRE practices, and release engineering"
    },
    {
      title: "Product Modernization",
      description: "Legacy system re-engineering, tech debt reduction, database migration, and cloud lift-and-shift"
    }
  ];

  const EngData = [

    {
      title: "Manufacturing Leader",
      description: "Built a real-time IoT dashboard and predictive analytics platform handling 10M+ data points daily, enabling proactive maintenance decisions."
    },
    {
      title: "Energy & Utilities",
      description: "Cloud-native solutions on AWS, Azure & GCP with Kubernetes, serverless, and Infrastructure-as-Code"
    },
    {
      title: "Process Industry",
      description: "Human-centered design with prototyping, user research, accessibility compliance, and design systems"
    }
  ];
  const FaqData = [
            {
                question: "What industries do you specialize in?",
                answer: "We specialize in Manufacturing, Energy & Utilities, Process Industry, and Retail. Our team has deep domain expertise across these sectors to deliver tailored SAP solutions."
            },
            {
                question: "How long does a typical implementation take?",
                answer: "Implementation timelines vary based on scope and complexity. A standard S/4HANA conversion usually takes 4-7 months, while full-scale greenfield implementations can take 9-12 months."
            },
            {
                question: "Do you provide support after go-live?",
                answer: "Yes, we offer comprehensive post-go-live support and AMS (Application Management Services) to ensure your enterprise platform continues to run smoothly and adapt to your changing needs."
            },
            {
                question: "How do you handle data migration?",
                answer: "We use proven methodologies and tools (like S4H Right Data Tool) for automated data cleansing, validation, and migration, ensuring 100% data integrity throughout the transition."
            }
        ]
        
  const icon1 = [
    <FaCode />,
    <FaCloud />,
    <FaPaintBrush />,
    <FaPlug />,
    <FaTools />,
    <FaSync />
  ];
  const icon2 = [
    <FaCode />,
    <FaCloud />,
    <FaPaintBrush />,

  ];
  return (
    <>
      <AboutBanner
        subtitle=''
        title="Product Engineering"
        desc='Transform your business with Yasya’s Product Engineering services. We design, develop, and deliver scalable, high-performance software products that drive real business value. From concept to launch and beyond, our expert team ensures your product stands out in the market.'
        cta={true}
        bgImage={yourNewImage}
      />

      <OurStrengths
        subTitle='BUILDING TOMORROW’S PRODUCTS TODAY'
        title="Product Engineering"
        desc='We follow an agile-first methodology, partnering with clients from ideation through deployment and beyond. Our engineering teams leverage modern tech stacks, cloud-native architectures, and DevOps best practices to deliver scalable, maintainable products that drive measurable business outcomes.'
        strengths={ProductEngineeringData}
        icons={icon1}
      />

      <CounterComp
        subTitle="BUSINESS OUTCOMES"
        title={<>Product Engineering <br /> Outcomes & Impact</>}
        counters={[
      {end: 30, suffix: "+", label: "Team Members" },
      {end: 25, suffix: "Y", label: "Leadership Experience" },
      {end: 3, duration: 1500, label: "Global Offices" },
      {end: 100, duration: 2500, suffix: "+", label: "Projects Delivered" },
      {end: 0, duration: 1000, label: "Debt Company" }
      ]}
      padding="100px"
     />

      <OurStrengths
        subTitle='BUILDING TOMORROW’S PRODUCTS TODAY'
        title=""
        desc=''
        strengths={EngData}
        icons={icon2}
      />

      <OurStrengths
        subTitle='BUILDING TOMORROW’S PRODUCTS TODAY'
        title="Industry Verticals"
        desc=''
        strengths={EngData}
        align="center"
        border="1px solid #7a7980ff"
      />

      <Faq 
        faqs={FaqData}
      />

      <Cta
        title="Ready to Transform Your Product Vision into Reality?"
        desc="Let’s discuss how Yasya’s Product Engineering services can accelerate your product development and drive measurable business outcomes."
        ctatext='Talk to Experts'
      />

    </>
  )
}

export default ProductEngineering