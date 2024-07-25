import React from 'react';
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-4'>
          <Navbar fluid rounded className=' bg-customyellow p-5 shadow-lg  mx-4  rounded-full   ' data-aos="fade-in" data-aos-duration="1500"
            data-aos-easing="linear">
        
          <Navbar.Brand href='#'>
     
        <span className="self-center whitespace-nowrap text-xl font-semibold font-namefont  ms-10 " >Subhashini</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='me-10'>
      <Navbar.Link  ><Link to='/'>Home</Link></Navbar.Link>
        <Navbar.Link  ><Link to='/about'>About</Link></Navbar.Link>
          
        <Navbar.Link  ><Link to='/skills'>Skills</Link></Navbar.Link>
        <Navbar.Link  ><Link to='/projects'>Projects</Link></Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>  
        </div>
    );
};

export default Header;