import React, { useState, useEffect } from 'react'
import './App.scss';

// COMPONENTS
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'

function App() {

  const [windowWidth, setWindowWidth] = useState(null);
  const [windowScroll, setWindowScroll] = useState(0);
  const [newHeaderStyle, setNewHeaderStyle] = useState(false);

  useEffect(() => {
    updateWindowWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setWindowScroll(window.pageYOffset)
      );
    }
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  useEffect(() => {
    if (windowScroll >= 200) {
      setNewHeaderStyle(true);
    } else {
      setNewHeaderStyle(false);
    }
  }, [windowScroll])

  // useEffect(() => {
  //   console.log(newHeaderStyle)
  // }, [newHeaderStyle])

  const updateWindowWidth = () => {
  const width = window.innerWidth;
  setWindowWidth(width);
  }

  return (
    <div className="App">
      <Header windowWidth={windowWidth} newHeaderStyle={newHeaderStyle} />
      <Landing />
      <About />
      {/* Work */}
      {/* Contact */}
      {/* Footer */}
    </div>
  );
}

export default App;
