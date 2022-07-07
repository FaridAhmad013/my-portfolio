import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null)
  const [toggle, setToggle] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t96pgfa",
        "template_122b6dm",
        form.current,
        "jgF4wt5kkVQ8dT6mT"
      )
      .then(
        (result) => {
          e.target[0].value = "";
          e.target[1].value = "";
          e.target[2].value = "";
          setMessage(result)
          setToggle(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });

    setTimeout(() => {
       toggle && setToggle(false)
    }, 5000);
  }, [toggle]);

  return (
    <>
      <div className="container" id="contact" data-aos="fade-right">
        <div className="flex flex-wrap items-center justify-center my-10 lg:min-h-screen lg:my-0">
          <div className="w-full text-center lg:w-1/2 md:w-1/2">
            <h1>Get In Touch</h1>
            <h1>Contact me</h1>
            <p>
              Kamu Juga hubungi saya melalui
              <span className="block font-semibold text-indigo-500">
                Email : misakisakaki1998@gmail.com
              </span>
            </p>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full max-w-lg px-4"
            >
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Masukan Nama Lengkap"
                  id="name"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Masukan Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-700">
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Masukan Pesan"
                  className="w-full px-4 py-2 text-sm duration-300 border border-gray-400 rounded-lg focus:outline-none focus:ring lg:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => {
                  setLoading(true);
                  setDisabled(true);
                  setTimeout(() => {
                    setDisabled(false);
                    setLoading(false);
                  }, 1000);
                }}
              >
                <div className="flex">
                  <div>
                    {loading && (
                      <svg
                        className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>Kirim</div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {toggle && (
      <div className="fixed top-[1%] right-[1%]">
        <div className="w-full max-w-xs">
            <div className="bg-green-500 rounded-lg bg-opacity-95 whadow-lg">
                <header className="px-4 py-2 text-sm font-semibold text-white border-b-2 border-green-50">
                    <div className="flex justify-between">
                        <div className="mr-3">Data Berhasil Ditambahkan</div>
                        <button onClick={() => {
                            setToggle(false)
                            setMessage(null)
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
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

export default Contact;
