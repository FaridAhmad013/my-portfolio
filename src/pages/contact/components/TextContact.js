import React, { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";

const TextContact = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, []);

  return (
    <div className="w-full text-center lg:w-1/2 md:w-1/2">
      <h1>Get In Touch</h1>
      <h1>Contact me</h1>
      <p>
        Kamu Juga hubungi saya melalui
        <span className="block font-semibold text-indigo-500">
          Email :
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=misakisakaki1998@gmail.com">
            misakisakaki1998@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
};

export default TextContact;
