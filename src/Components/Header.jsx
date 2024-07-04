import React from 'react';
import { Navbar } from "flowbite-react";

const Header = () => {
    return (
        <>
          <Navbar fluid rounded className='bg-blue-200  p-5 shadow-lg  m-4 rounded-full   ' >
        
          <Navbar.Brand >
     
        <span className="self-center whitespace-nowrap text-xl font-semibold ms-10 ">SUBHASHINI</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='me-10'>
      <Navbar.Link  href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" >
          About
        </Navbar.Link>
        <Navbar.Link  href="#">
          Skills
        </Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
       
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>  
        </>
    );
};

export default Header;