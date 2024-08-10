import React from "react"
import ReactDOM from 'react-dom/client'
// import Inline from "./InlineApp";
// import Internal from "./InternalApp";
import External from "./ExternalApp";
import './assets/css/style.css'
const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <>
      {/* inline components reused here */}
      {/* <Inline /> */}

      {/* internal components are reused here */}
      {/* <Internal /> */}

      {/* External components are reused here */}
      <External />

    </>
)