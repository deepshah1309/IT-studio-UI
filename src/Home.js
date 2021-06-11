import React from "react";
import "./Home.css";

import { Helmet } from "react-helmet";
import WeBuild from "./Components/WeBuild/WeBuild/WeBuild";
import Header from "./Components/Header/Header";
import OurService from "./Components/OurService/OurService/OurService";
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
      <WeBuild />
      <OurService />
    </div>
  );
};
export default Home;
