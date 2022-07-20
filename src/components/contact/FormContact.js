import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MyContext } from "../../context/Index";

const FormContact = () => {
  const { loading, disabled, setMessage, setLoading, setDisabled, setToggle } =
    useContext(MyContext);
  const form = useRef();

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
          setMessage(result);
          setToggle(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg px-4">
      <div className="mb-5">
        <label htmlFor="name" className="block text-gray-700">
          Nama Lengkap
        </label>
        <input
          type="text"
          name="name"
          placeholder="Masukan Nama Lengkap kamu"
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
          placeholder="Masukan Alamat Email Kamu"
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
          placeholder="Masukan Isi Pesan yang ingin kamu sampaikan"
          className="w-full px-4 py-2 text-sm duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring lg:text-base"
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
  );
};

export default FormContact;
