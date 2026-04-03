import React from 'react'
import AboutBanner from '../../components/AboutComponents/AboutBanner'
import OurStrengths from '../../components/AboutComponents/OurStrengths'
import { FaCode, FaCloud, FaPaintBrush, FaPlug, FaTools, FaSync } from 'react-icons/fa'
import CounterComp from '../../components/AboutComponents/CounterComp'
import Cta from '../../components/Cta'
import Faq from '../../components/AboutComponents/Faq'
import OurStory from '../../components/AboutComponents/OurStory'
import yourNewImage from '../../assets/About/banner.avif';
import LeadershipJourney from '../../components/AboutComponents/LeadershipJourney';


const ApplicationManagement = () => {
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
                title="Application Management "
                desc='Leverage our deep SAP expertise to ensure your enterprise applications run reliably, securely, and efficiently—freeing your team to focus on strategic innovation.'
                cta={true}
                bgImage={yourNewImage}
            />


            <OurStory
                img={yourNewImage}
                subtitle="About Us"
                title="Reliable, Always-On SAP Application Management"
                desc={<>24×7 support with intelligent automation and proactive governance.
                    <br />
                    <br />
                    Enterprise resource planning systems are complete, integrated platforms, either on-premises or in the cloud, managing all aspects of a production-based or distribution business. Furthermore, ERP systems support all aspects of financial management, human resources, supply chain management, and manufacturing with your core accounting function.</>}
            />


            <OurStrengths
                subTitle='LOREM IPSUM'
                title="CAPABILITIES"
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                strengths={ProductEngineeringData}
                icons={icon1}
            />
            <OurStrengths
                subTitle='LOREM IPSUM'
                title="AI-DRIVEN AMS"
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                strengths={ProductEngineeringData}
                icons={icon1}
            />
            <OurStrengths
                subTitle='LOREM IPSUM'
                title="BENEFITS"
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                strengths={ProductEngineeringData}
                icons={icon1}
            />
            <OurStrengths
                subTitle='LOREM IPSUM'
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

export default ApplicationManagement;