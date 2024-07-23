import React from 'react';
import './App.css';
const React_Version=React.version;

function App() {
  return (
    <div className="App">
     <h1>I am just check version of react js</h1>
     <h3>The version of React js is : {React_Version}</h3>
    </div>
  );
}

export default App;
