import React, { useState, useEffect } from "react";
import RenderComponents from "./components.js";

import "./App.scss";

function App() {

  const [components, setComponents] = useState([]);

  useEffect(() => {
    console.log('getting components !');
    fetch('https://my-json-server.typicode.com/vishaka27/CMS-POC/db')
    .then(response => response.json())
    .then(data => setComponents(data.data));
  },[])

  return (
    <div className="App">
      {components.map(block => RenderComponents(block))}
    </div>
  );
}

export default App;