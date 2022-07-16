import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context/Index";

const MessageContact = () => {
    const {
        toggle,
        setToggle,
        setMessage,
        message
    } = useContext(MyContext)

    useEffect(() => {  
      setTimeout(() => {
        toggle && setToggle(false)
     }, 5000);
    }, [toggle]);

  return (
    <>
      {toggle && (
        <div className="fixed top-[1%] right-[1%]">
          <div className="w-full max-w-xs">
            <div className="bg-green-500 rounded-lg bg-opacity-95 whadow-lg">
              <header className="px-4 py-2 text-sm font-semibold text-white border-b-2 border-green-50">
                <div className="flex justify-between">
                  <div className="mr-3">Data Berhasil Ditambahkan</div>
                  <button
                    onClick={() => {
                      setToggle(false);
                      setMessage(null);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </header>
              <section className="px-4 py-2 text-sm leading-relaxed text-white">
                {message.text}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageContact;
