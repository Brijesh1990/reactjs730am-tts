import React from "react";
import ReactDOM from 'react-dom/client'
// import App from "./Container";
// import Display from "./Card";
import Tops from "./TopsApp";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
     {/* <App /> */}
     {/* <Display /> */}
     <Tops /> 
    </>
)