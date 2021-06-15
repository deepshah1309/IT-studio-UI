import React from "react";
import "./Home.css";

import { Helmet } from "react-helmet";
import WeBuildSection from "./Components/WeBuildSection/WeBuildSection/WeBuildSection";
import Header from "./Components/Header/Header";
import OurService from "./Components/OurService/OurService/OurService";

import Contact from "./Components/Contact/Contact";

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

      <Contact />
    </div>
  );
};
export default Home;
