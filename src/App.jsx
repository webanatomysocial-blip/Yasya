import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";


const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./components/Blog"));
const DynamicBlog = lazy(() => import("./components/DynamicBlog"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));

const ProductEngineering = lazy(() => import("./pages/ServicePages/ProductEngineering"));
const QualityEngineering = lazy(() => import("./pages/ServicePages/QualityEngineering"));
const ERPsystems = lazy(() => import("./pages/ServicePages/ERPsystems"));
const EducationHub = lazy(() => import("./pages/ServicePages/EducationHub"));
const S4Hana = lazy(() => import("./pages/ServicePages/S4Hana"));
const ApplicationManagement = lazy(() => import("./pages/ServicePages/ApplicationManagement"));
const TechFactory = lazy(() => import("./pages/ServicePages/TechFactory"));
const SolutionCIO = lazy(() => import("./pages/ServicePages/SolutionCIO"));
const Talent = lazy(() => import("./pages/ServicePages/Talent"));
const IntegrationBTP = lazy(() => import("./pages/ServicePages/IntegrationBTP"));
const AMSAi = lazy(() => import("./pages/ServicePages/AMSAi"));


function App() {
  return (
    <Suspense fallback={<Loader />}>

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
    </Suspense>
  );
}

export default App;
