import React, { useState, useEffect } from 'react'
import './App.scss';

// COMPONENTS
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'

function App() {

  const [windowWidth, setWindowWidth] = useState(null);
  const [windowScroll, setWindowScroll] = useState(0);
  const [newHeaderStyle, setNewHeaderStyle] = useState(false);
  const [newBurgerStyle, setNewBurgerStyle] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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
    if (windowScroll >= 500) {
      setNewHeaderStyle(true);
    } else {
      setNewHeaderStyle(false);
    }
  }, [windowScroll])

  // useEffect(() => {
  //   console.log(newHeaderStyle)
  // }, [newHeaderStyle])

  // useEffect(() => {
  //   console.log(newBurgerStyle)
  // }, [newBurgerStyle])

   useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setNewBurgerStyle(!newBurgerStyle);
  }

  const updateWindowWidth = () => {
  const width = window.innerWidth;
  setWindowWidth(width);
  }

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} onBurger={handleOpen} />
        <Header windowWidth={windowWidth} newHeaderStyle={newHeaderStyle} newBurgerStyle={newBurgerStyle} onBurger={handleOpen} isOpen={isOpen} />
        <Landing />
        <About />
        {/* Work */}
        {/* Contact */}
        {/* Footer */}
    </div>
  );
}

export default App;
