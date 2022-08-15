import React, { useContext } from "react";
import { MyContext } from "../../context/Index";

const Body = () => {
  const { message } = useContext(MyContext);
  return (
    <>
      <section className="px-2 py-2 text-sm leading-relaxed text-white">
        <p>{message.text ?? "OK"}</p>
      </section>
    </>
  );
};

export default Body;
