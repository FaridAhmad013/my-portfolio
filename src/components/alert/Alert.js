import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context/Index";
import Body from "./Body";
import Header from "./Header";

const Alert = () => {
  const { message, toggle, setToggle } = useContext(MyContext);
  useEffect(() => {
    setTimeout(() => {
      toggle && setToggle(false);
    }, 3000);
  }, [toggle, setToggle]);
  return (
    <>
      {toggle && (
        <div
          className={`w-full max-w-xs mb-4 rounded-lg shadow-lg border shadow-teal-300 bg-gradient-to-t bg-opacity-60 ${
            message.status === 200
              ? "from-teal-400 to-green-400"
              : "from-red-300 to-rose-300"
          }`}
        >
          <Header />

          <Body />
        </div>
      )}
    </>
  );
};

export default Alert;
