import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import  './App.css'
import Projects from "./components/Projects";

const App = () => {
  return (
    <div id="main"
      className="h-auto selection:not-sr-only w-auto overflow-x-hidden font-mono"
      // style={{ backgroundImage: `url('/Images/pexels-photo-7130555.webp')` }}
      // style={{
      //   background: " hsla(0, 0%, 100%, 1);",
      //   backgroundImage: "-moz-linear-gradient(360deg, hsla(0, 0%, 100%, 1) 10%, hsla(348, 67%, 88%, 1) 39%, hsla(272, 26%, 72%, 1) 100%)",
      //   backgroundImage: "-webkit-linear-gradient(360deg, hsla(0, 0%, 100%, 1) 10%, hsla(348, 67%, 88%, 1) 39%, hsla(272, 26%, 72%, 1) 100%)",
      //   filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#F5CCD4', GradientType=1)"
      // }}
    >
      <Navbar />
      <Home />
      <Skills />
      <About/>
      <Projects/>
    </div>
  );
};

export default App;
