import React from "react";

import { Button } from "flowbite-react";

import { FaRegFileCode } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
const About = () => {
  return (
    <div >
      <Header/>
    <div
    className=" px-20 pb-24 pt-5 flex justify-center items-center " id="about">

      
      <div className="p-5 md:p-16 bg-customyellow " id="about" data-aos="fade-up"
            data-aos-easing="linear" >
        <div className="flex flex-wrap justify-center  p-5 gap-x-10">
          <div
            className="  h-fit    "
         
          >
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?size=626&ext=jpg&ga=GA1.1.937687561.1710832007&semt=ais_user"
              className="h-72 mb-10 lg:mb-0  rounded-full lg:rounded-md "
            />
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center  items-center  p-1 -mt-4 lg:ms-6"
          
          >
            <div>
              <p className=" text-3xl text-center lg:text-start font-homefont  ">
                About me
              </p>
              <hr />
              <p className="text-md m-4">
                I am a passionate young developer, learned MERN stack
                development with GUVI. I have a strong understanding of
                front-end with good knowledge in back-end. I am a quick learner
                and a good team player with strong analytical skills, and I am
                confident that I can be a valuable asset to any web development
                team.
              </p>
              <hr />
              <div className="flex  flex-wrap justify-between m-2 text-md">
                <p>
                  <span className="font-semibold">Name</span>
                  <br />
                  Subhashini Balasubramanian
                </p>
                <p>
                  <span className="font-semibold">Education</span>
                  <br />
                  B.E - Electronics and Communication
                </p>
              </div>
              <div className="flex flex-wrap  justify-between m-2 text-md">
                <p>
                  <span className="font-semibold">Experience</span>
                  <br />
                  Fresher
                </p>
                <Button className="hover:rounded-full focus:ring-4  m-3">
                  My Resume&nbsp;
                  <FiDownload className="text-xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-baseline animate-bounce ">
          <Link to='/skills' title="view skills"><FaRegFileCode className="text-5xl font-thin text-gray-500" /></Link>
          
              
            
          
        </div>
      </div></div>
      
    </div>
  );
};

export default About;
