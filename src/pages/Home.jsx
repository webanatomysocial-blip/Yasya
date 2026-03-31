import React from "react";
import LogoCarousel from "../components/HomeComponents/LogoCarousel";
import AboutComp from "../components/HomeComponents/AboutComp";
import AddressingCounter from "../components/HomeComponents/AddressingCounter";
import DigitalTrans from "../components/HomeComponents/DigitalTrans";
import Enterprise from "../components/HomeComponents/Enterprise";
import Fusion from "../components/HomeComponents/Fusion";
import CoreFounders from "../components/HomeComponents/CoreFounders";

// Assets
import digitalVideo from "../assets/Home/digital.mp4";

// Lucide Icons
import { LuBrainCircuit, LuSearch, LuNetwork, LuFileJson, LuRepeat } from "react-icons/lu";

const Home = () => {
  const digitalCards = [
    {
      id: 1,
      title: "SAP S/4HANA",
      desc: "Intelligent ERP suite for digital transformation.",
    },
    {
      id: 2,
      title: "AI driven Digital AMS solutions",
      desc: "Premium enterprise quality without the traditional big-firm overhead. Value without the volume.",
    },
    {
      id: 3,
      title: "SAP SuccessFactors",
      desc: "Cloud-based human capital management solutions.",
    },
    {
      id: 4,
      title: "Application Development & Mobility", // fixed typo
      desc: "Custom application development and mobile solutions.",
    },
    {
      id: 5,
      title: "User Experience & Analytics",
      desc: "Enhanced user experiences and data-driven insights.",
    },
    {
      id: 6,
      title: "YASYA One",
      desc: "Comprehensive ERP solutions tailored for small and medium-sized enterprises.",
    },
    {
      id: 7,
      title: "SAP Ariba",
      desc: "Streamlined procurement and supply chain management.",
    },
    {
      id: 8,
      title: "SAP Business Technology Platform (BTP)",
      desc: "Integrated platform for data management, analytics, and application development.",
    },
  ];

  const ExperienceCards = [
    {
      id: 1,
      title: "ABAP Code Intelligence",
      desc: "Reads, interprets, and documents all custom ABAP code automatically, eliminating up to 80% of KT effort.",
      icon: LuBrainCircuit,
    },
    {
      id: 2,
      title: "ConfigLens",
      desc: "Extracts SAP customizing and dependency mappings, giving teams full visibility into business logic and rules.",
      icon: LuSearch,
    },
    {
      id: 3,
      title: "Knowledge Graph Builder",
      desc: "Connects code, configuration, and incidents to enable traceability, root cause identification, and impact analysis.",
      icon: LuNetwork,
    },
    {
      id: 4,
      title: "AutoDoc Portal",
      desc: "Continuously updates system documentation, enabling audit-ready transparency and support readiness.",
      icon: LuFileJson,
    },
    {
      id: 5,
      title: "DevOps Integration",
      desc: "Bridges AI insights to Jira, ADO, and other platforms, aligning AMS operations with business priorities.",
      icon: LuRepeat,
    },
  ];

  return (
    <main>
      <LogoCarousel />
      <AboutComp />
      <AddressingCounter />
      <DigitalTrans
        cardsList={digitalCards}
        mediaType="video"
        mediaSrc={digitalVideo}
        desc={<>In a crowded SAP consulting landscape, YASYA stands apart through <br /> a relentless focus on quality, accountability, and strategic depth.</>}
      />
      <Enterprise />
      <DigitalTrans
        cardsList={ExperienceCards}
        subtitle="Build huge wealth with clear plans and expert guidance"
        title="Experience our ‘YasMyra’"
        cardTitle="Digitized AMS"
        desc={<>Our AI-Driven Digitized AMS Innovation and Fusion LM – The Unique Offering !
          <br />
          <br />
          Re-imagining SAP Application Management Services through intelligent automation, predictive diagnostics, and low-dependency operational models.</>}
        mediaType="video"
        mediaSrc={digitalVideo}
      />
      <Fusion />
      <CoreFounders />
    </main>
  );
};

export default Home;