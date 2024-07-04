
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import FooterComp from './Components/FooterComp';
import Header from './Components/Header';





const App = () => {
  return (
    <>
    <Header/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       <FooterComp/>
      
       
    </>
  );
};

export default App;