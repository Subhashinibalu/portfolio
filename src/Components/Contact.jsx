import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-blue-200  p-10 " id="contact">
        <div className="flex flex-wrap justify-center  gap-x-10">
          <form className="w-full  md:w-1/3 flex flex-col ">
            <Label value="Name" />
            <TextInput className="mt-2 w-full mb-5" placeholder="Your Name" />
            <Label value="Your email" />
            <TextInput
              className="mt-2 w-full mb-5"
              placeholder="name@mail.com"
            />
            <Label value="Meassage" />
            <Textarea
              className="mt-2 w-full mb-5"
              placeholder="Leave a message..."
              required
              rows={4}
            />
            <Button className="w-fit px-6">Submit</Button>
          </form>

          <div className=" flex justify-center  rounded-md ">
            <div className="p-10 m-10" data-aos="zoom-in"  
     data-aos-anchor-placement="bottom-bottom">
              <p className=" text-4xl font-serif font-bold  ">Contact Me</p>
              <br />
              <p className="font-sans">subhashiniulk@gmail.com</p>
              <br />
              <p>9489435945/ 8248063195</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
