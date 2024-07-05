import React from "react";
import MyImg from "../assets/subha.png";

import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      {/* ABOUT */}

      <div className="  flex flex-row items-center md:justify-center  md:p-32 ">
        <div className="w-full  lg:w-1/3  flex flex-col justify-center  md:mr-11  lg:mr-0  items-center md:items-start ">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            className="text-2xl  lg:text-4xl font-semibold md:text-start text-center "
          >
            Hi there!
            <br /> I&apos;m Subhashini
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="linear"
            className=" pt-3 pb-3 md:text-start text-center"
          >
            A Full Stack Web Developer from Tamilnadu.
          </p>
          <br />

          <div className="flex    ">
            <Button
              href="#about"
              data-aos="fade-up"
              data-aos-easing="linear"
             
              className="w-fit hover:rounded-full focus:ring-4"
            >
              Know More About Me
            </Button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="w-full  lg:w-1/3 flex    md:justify-start justify-end "
        >
          <img src={MyImg} className=" h-96 md:h-80 lg:h-96 md:rounded-full " />
        </div>
      </div>
    </>
  );
};

export default Home;
