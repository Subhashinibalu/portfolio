import React from 'react';
import { Navbar } from "flowbite-react";

const Header = () => {
    return (
        <>
          <Navbar fluid rounded className='bg-blue-200  p-5 shadow-lg  m-4 rounded-full   ' data-aos="fade-in">
        
          <Navbar.Brand href='#'>
     
        <span className="self-center whitespace-nowrap text-xl font-semibold ms-10 " >SUBHASHINI</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='me-10'>
      <Navbar.Link  href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" >
          About
        </Navbar.Link>
        <Navbar.Link  href="#skills">
          Skills
        </Navbar.Link>
        <Navbar.Link href="#projects">Projects</Navbar.Link>
       
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>  
        </>
    );
};

export default Header;