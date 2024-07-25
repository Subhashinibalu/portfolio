
import React, { useEffect } from 'react';


import Contact from './Components/Contact';
import FooterComp from './Components/FooterComp';
import Header from './Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import FooterComponent from './Components/FooterComponent';

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
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/> 
    </Routes>
    <Contact/>
     
    </BrowserRouter>
    
     
       
      
       
    </>
  );
};

export default App;