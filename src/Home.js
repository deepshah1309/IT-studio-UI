import React from "react";
import "./Home.css";

import { Helmet } from "react-helmet";
import WeBuild from "./Components/WeBuild/WeBuild/WeBuild";
import Header from "./Components/Header/Header";
<<<<<<< HEAD
import OurService from "./Components/OurService/OurService/OurService";
=======
import Contact from "./Components/Contact/Contact";
import { Helmet } from "react-helmet";
import WeBuild from "./Components/WeBuild/WeBuild/WeBuild";
import Map from "./Components/Contact/Map";

>>>>>>> master
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
<<<<<<< HEAD
      <OurService />
=======
      <Contact />
>>>>>>> master
    </div>
  );
};
export default Home;
