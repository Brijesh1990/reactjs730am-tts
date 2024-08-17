import React from "react";
import Header from "./components/user/Header";
import Slider from "./components/user/Slider";
import Content from "./components/user/Content";
import Footer from "./components/user/Footer";
const Layout=()=>{

    return(
        <>
        {/* header here */}
        <Header />
        {/* slider here */}
        <Slider />
        {/* content here */}
        <Content />
        {/* footer here */}
        <Footer />
        </>
    )
}
export default Layout