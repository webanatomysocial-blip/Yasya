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
import ShiftComp from '../../components/ServiceComponents/ShiftComp';
import SpectrumComp from '../../components/ServiceComponents/SpectrumComp';
import ArchitectureComp from '../../components/ServiceComponents/ArchitectureComp';
import RoadmapComp from '../../components/ServiceComponents/RoadmapComp';
import FeatureOverview from '../../components/ServiceComponents/FeatureOverview';
import { LuGlobe, LuLayers, LuUserCheck, LuCircleCheck } from 'react-icons/lu';


const AMSAi = () => {
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
    const businessProcess = [
        {
            num: "01",
            title: "Student Management",
            anantha: "Admissions, records, exams, grading, placements",
            csr: "",
        },
        {
            num: "02",
            title: "Student Financials",
            anantha: "Fee calculation, invoicing, collections, payment gateway",
            csr: "",
        },
        {
            num: "03",
            title: "Academic Structure",
            anantha: "Curriculum planning, rules, academic calendar",
            csr: "",
        },
        {
            num: "04",
            title: "Faculty & HR",
            anantha: "Recruitment, payroll, performance, self-service",
            csr: "",
        },
        {
            num: "05",
            title: "Materials & Procurement",
            anantha: "Inventory, purchasing, asset management",
            csr: "",
        },
        {
            num: "06",
            title: "Finance & Accounting",
            anantha: "GL, AP, banking, cost & profit center accounting",
            csr: "",
        }
    ]
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
    const FeatureData = [
        {
            title: "Why YASYA for AMS",
            icon: <LuLayers />,
            items: [
                "Proprietary SAP-focused AI",
                "Deep SAP + AI expertise",
                "Seamless ITSM integration",
                "Zero-dependency knowledge transition",
                "Enterprise-grade governance"
            ]
        },
        {
            title: "Deliverables",
            icon: <LuGlobe />,
            items: [
                "Issue tracking & resolution reports",
                "Functional & technical documentation",
                "Management dashboards",
                "SLA reports & dashboards",
                "Monthly performance reports"
            ]
        },
        {
            title: "Engagement Models",
            icon: <LuUserCheck />,
            items: [
                "FTE-based",
                "Shared AMShnical documentation",
                "Onsite / Offshore",
                "e Customer Care Center",
                "Adhoc Support"
            ]
        }
    ]

    return (
        <>
            <AboutBanner
                subtitle=''
                title="AMS AI"
                desc='Revolutionize your SAP support with AI-driven Application Management Services—predictive maintenance, automated resolution, and continuous optimization.'
                cta={true}
                bgImage={yourNewImage}
            />

            <OurStrengths
                subTitle='LOREM IPSUM'
                title="Talent Offerings"
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                strengths={ProductEngineeringData}
                icons={icon1}
            />


            <ShiftComp
                subtitle="THE FUTURE OF SUPPORT"
                title="The YASYA Shift"
                italicTitle='"Our AI understands your SAP system — not just supports it."'
            />

            <SpectrumComp
                subtitle="SERVICE LAYERS"
                title="AMS Spectrum"
                desc="Comprehensive coverage across every layer of your SAP landscape."
            />
            <OurStrengths
                subTitle='INDUSTRY FOCUS'
                title="Industry Verticals"
                desc=''
                strengths={EngData}
                align="center"
                border="1px solid #7a7980ff"
            />


            <LeadershipJourney
                subtitle="OUR LEADERSHIP"
                title={<>Business Process <br />    Coverage</>}
                desc=""
                journeyData={businessProcess}
                bgcolor="#b51b20"

            />

            <ArchitectureComp
                subtitle="TECHNICAL DEPTH"
                title="Architecture Snapshot"
            />


            <RoadmapComp
                subtitle="EXECUTION"
                title="Implementation Roadmap"
            />
            <CounterComp
                subTitle="BUSINESS OUTCOMES"
                title={<>Product Engineering <br /> Outcomes & Impact</>}
                counters={[
                    { end: 30, suffix: "+", label: "Team Members" },
                    { end: 25, suffix: "Y", label: "Leadership Experience" },
                    { end: 3, duration: 1500, label: "Global Offices" },
                    { end: 100, duration: 2500, suffix: "+", label: "Projects Delivered" },
                    { end: 0, duration: 1000, label: "Debt Company" }
                ]}
                padding="100px"
            />
            <FeatureOverview
                subtitle="ENGAGEMENT"
                title="LOREM IPSUM"
                features={FeatureData}
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

export default AMSAi;