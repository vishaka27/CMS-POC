import React, { useState, useEffect } from "react";
import RenderComponents from "./components.js";

import "./App.scss";

function App() {

  const [components, setComponents] = useState([]);

  useEffect(() => {
    console.log('getting components !');
    fetch('http://localhost:9000/data')
    .then(response => response.json())
    .then(data => setComponents(data));
  },[])

  return (
    <div className="App">
      <h1>Hello Zest !</h1>
      {components.map(block => RenderComponents(block))}
    </div>
  );
}

export default App;