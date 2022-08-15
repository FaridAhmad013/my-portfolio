import React from "react";
import Alert from "../../components/alert/Alert";
import FormContact from "./components/FormContact";
import MessageContact from "./components/MessageContact";
import TextContact from "./components/TextContact";

const Contact = () => {
  return (
    <>
      <div className="container" id="contact" data-aos="fade-right">
        <div className="flex flex-wrap items-center justify-center my-10 lg:min-h-screen lg:my-0">
          <TextContact />
          <div className="w-full select-none lg:w-1/2 md:w-1/2">
            <FormContact />
          </div>
        </div>
      </div>

      {/* <MessageContact/> */}
      <div className="fixed top-[4%] right-[4%]">
        <Alert />
      </div>
    </>
  );
};

export default Contact;
