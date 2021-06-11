import React from "react";
import "./Home.css";
import Header from "./Components/Header/Header";
import {Helmet} from "react-helmet";
import WeBuild  from "./Components/WeBuild/WeBuild";
const Home=()=>{
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
                <Header/>
                <WeBuild/>
        </div>
    )
}
export default Home;