import React from "react";
import "./Home.css";

import { Helmet } from "react-helmet";
import WeBuildSection from "./Components/WeBuildSection/WeBuildSection/WeBuildSection";
import Header from "./Components/Header/Header";
import OurService from "./Components/OurService/OurService/OurService";
import BrandWeWork from "./Components/BrandWeWork/BrandWeWork/BrandWeWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import TestiMonials from "./Components/TestiMonials/TestiMonials";
import OurTeam from "./Components/OurTeam/OurTeam/OurTeam";
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

      {/* <Contact /> */}
      <Footer />
    </div>
  );
};
export default Home;
