import { Button, Footer, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiMedium } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-gray-400  " id="contact">
        <hr />
        <div className="flex flex-wrap justify-evenly mt-5">
          <form className="w-full  md:w-1/3  flex flex-col ">
            <Label value="GET IN TOUCH" className="font-homefont text-2xl" />
            <TextInput className="mt-2 w-full mb-5" placeholder="Your Name" />

            <TextInput className="mt-2 w-full mb-5" placeholder="Your email" />

            <Textarea
              className="mt-2 w-full mb-5"
              placeholder="Your enquiry"
              required
              rows={4}
            />
            <div className=" flex justify-end">
              {" "}
              <Button className="w-fit px-6 bg-transparent border-2 border-white text-white">Send</Button>
            </div>
          </form>
          <div className=" flex justify-start w-full md:w-1/3 mt-2">
            <div>
              <p className="  font-homefont ">MOBILE NUMBER</p>
              <p className="md:text-2xl my-1 font-semibold md:mb-3">
                +91 8248063195
              </p>
              <p className="  font-homefont ">EMAIL</p>
              <p className="md:text-2xl my-1 text-sm md:font-semibold md:mb-3">
                subhashiniulk@gmail.com
              </p>
              <p className="  font-homefont ">SOCIAL ACCOUNTS</p>
              <div className=" flex justify-start gap-7 my-3">
                <a href="https://github.com/Subhashinibalu" target="_blank">
                  {" "}
                  <FaGithub className="md:text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/subhashini-balasubramanian-4426882b3/"
                  target="_blank"
                >
                  <FaLinkedin className=" md:text-3xl" />
                </a>
                <a href="https://medium.com/@subhashiniulk" target="_blank">
                  <SiMedium className="md:text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex flex-wrap justify-center  gap-x-10 m-5">
          <p className=" text-gray-500 mt-5 md:text-start text-center  order-1 md:order-0">
            &copy;{year} Subhashini || All Rights Reserved
          </p>
       
        </div>
        <hr />
      </div>
    </>
  );
};

export default Contact;
