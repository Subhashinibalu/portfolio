import React from "react";
import MyImg from "../assets/subha.png";
import Yellowbg from "../assets/yellowbg.png";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className=" bg-blue-300 ">
      <Header/>
      {/* HOME*/}

      <div className="  flex flex-row items-center md:justify-center relative  md:p-32 " 
            data-aos="fade-up"
            data-aos-easing="linear">
        <div className="w-full  lg:w-1/2 flex  justify-center z-40 md:items-center  md:mr-11  lg:mr-0     ">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start ">
        <h1
            className="text-2xl  lg:text-5xl  md:text-start text-center font-homefont "
          >
            Hi there!
            <br /> I&apos;m <span className="text-customyellow ">Subhashini</span>
          </h1>
          <p
            
            className=" pt-3 pb-3 md:text-start text-center"
          >
            A Full Stack Web Developer from Tamilnadu.
          </p>
          <br />

          <div className="flex    ">
            <Button      
              className="w-fit hover:rounded-full focus:ring-4 bg-gradient-to-r from-customyellow via-customyellow2 to-customyellow3"
            ><Link to='/about'>Know More About Me</Link>
              
            </Button>
          </div>
        </div>
          
        </div>
        <div
          className="w-full  lg:w-1/2 flex  md:h-96  md:justify-center justify-end "
        >
          <img src={Yellowbg}  
           className=" lg:h-full md:z-10 md:absolute  md:h-full  md:-mt-36 lg:-mt-36 hidden md:block  lg:block"/>
          <img src={MyImg} className=" h-96 md:h-96 lg:w-64  md:rounded-full md:z-20 md:absolute" />
        </div>
      </div>
    </div>
  );
};

export default Home;
