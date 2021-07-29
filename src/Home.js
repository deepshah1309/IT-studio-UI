import React from "react";
import "./Home.css";

import { Helmet } from "react-helmet";
import WeBuildSection from "./Components/Home/WeBuildSection/WeBuildSection/WeBuildSection";
import Header from "./Components/Home/Header/Header";
import OurService from "./Components/Home/OurService/OurService/OurService";
import BrandWeWork from "./Components/Home/BrandWeWork/BrandWeWork/BrandWeWork";
import Contact from "./Components/Home/Contact/Contact";
import Footer from "./Components/Home/Footer/Footer";
import TestiMonials from "./Components/Home/TestiMonials/TestiMonials";
import OurTeam from "./Components/Home/OurTeam/OurTeam/OurTeam";
const Home = () => {
  return (
    <div className="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Professional way to get optimized IT products"
        />
        <title>Home-IT Studio</title>
      </Helmet>
      <Header />
      <WeBuildSection />

      <OurService />
      <TestiMonials />
      <BrandWeWork />
      <OurTeam />

      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
