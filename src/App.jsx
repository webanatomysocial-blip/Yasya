import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./components/Blog";
import DynamicBlog from "./components/DynamicBlog";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import ProductEngineering from "./pages/ServicePages/ProductEngineering";
import QualityEngineering from "./pages/ServicePages/QualityEngineering";
import ERPsystems from "./pages/ServicePages/ERPsystems";
import EducationHub from "./pages/ServicePages/EducationHub";
import S4Hana from "./pages/ServicePages/S4Hana";
import ApplicationManagement from "./pages/ServicePages/ApplicationManagement";
import TechFactory from "./pages/ServicePages/TechFactory";
import SolutionCIO from "./pages/ServicePages/SolutionCIO";
import Talent from "./pages/ServicePages/Talent";
import IntegrationBTP from "./pages/ServicePages/IntegrationBTP";
import AMSAi from "./pages/ServicePages/AMSAi";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="careers" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />

        <Route path="services/product-engineering" element={<ProductEngineering />} />
        <Route path="services/quality-engineering" element={<QualityEngineering />} />
        <Route path="services/erp-systems" element={<ERPsystems />} />
        <Route path="services/education-hub" element={<EducationHub />} />
        <Route path="services/s4-hana" element={<S4Hana />} />
        <Route path="services/application-management" element={<ApplicationManagement />} />
        <Route path="services/tech-factory" element={<TechFactory />} />
        <Route path="services/solution-cio" element={<SolutionCIO />} />
        <Route path="services/talent-on-demand" element={<Talent />} />
        <Route path="services/integration-btp" element={<IntegrationBTP />} />
        <Route path="services/ams-ai" element={<AMSAi />} />


        <Route path="blogs/:blogId" element={<DynamicBlog />} />
      </Route>
    </Routes>
  );
}

export default App;
