
import React, { useEffect } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import FooterComp from './Components/FooterComp';
import Header from './Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
  },[])
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