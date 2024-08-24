import React from "react";
import Nav from "./Navbar";
const PageNotFound=()=>{
    return (
        <>
        <Nav />
        <div className="container mt-10 mx-auto w-4/5 bg-gray-400 text-center p-52  text-white">
        <h1 className="text-center text-5xl">404 page Not Found errors</h1>
        <p className="text-center text-blue-700 text-xl"><button className="btn bg-black text-white p-4">Click to Home Page</button></p>
      </div>
        </>
    )
}

export default PageNotFound