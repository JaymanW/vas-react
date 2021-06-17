import React, { useState, useEffect } from 'react'
import './App.css';

// COMPONENTS
import Header from './components/Header'

function App() {

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const updateWindowWidth = () => {
  const width = window.innerWidth;
  setWindowWidth(width);
  }

  return (
    <div className="App">
      <Header windowWidth={windowWidth}/>
      {/* Landing */}
      {/* About */}
      {/* Work */}
      {/* Contact */}
      {/* Footer */}
    </div>
  );
}

export default App;
