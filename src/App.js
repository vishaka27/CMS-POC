import React, { useState, useEffect } from "react";
import RenderComponents from "./components.js";
import Header from './components/Header';
import Footer from './components/Footer';

const logoSrc = 'https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/05/Zest-Logo_300-98-01-1.png';

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
      <Header logo={logoSrc} header={'Offers'} />
      {components.map(block => RenderComponents(block))}
      <Footer />
    </div>
  );
}

export default App;