import React from "react";
import FormContact from "./FormContact";
import MessageContact from "./MessageContact";
import TextContact from "./TextContact";

const Contact = () => {

  return (
    <>
      <div className="container" id="contact" data-aos="fade-right">
        <div className="flex flex-wrap items-center justify-center my-10 lg:min-h-screen lg:my-0">
          <TextContact/>
          <div className="w-full select-none lg:w-1/2 md:w-1/2">
          <FormContact />
          </div>
        </div>
      </div>
      
    <MessageContact/>

    </>
  );
};

export default Contact;
