import getLinkData from "../hooks/useLink";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const links = getLinkData();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fbmykuq", "template_obx0sd8", form.current, {
        publicKey: "ypWHwTr7VUPzllbBM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <footer
      id="footer"
      className="flex flex-col py-10 px-5 sm:px-24 pb-3 bg-[#162133]"
    >
      <header className="text-slate-50 mb-8">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-5">
          Contact Us
        </h1>
        <div className="w-full border-2 border-slate-50 h-[0.5px]"></div>
      </header>
      <div className="w-full max-w-lg flex flex-col gap-5">
        <form className="mb-6" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
          >
            Send message
          </button>
        </form>
      </div>
      <div className="self-center flex flex-wrap justify-start md:justify-center gap-7 my-5 sm:max-w-4xl w-full">
        {links.length > 0 &&
          links.slice(0, 3).map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full"
                  src={link.img}
                  alt={link.name}
                />
                <span>
                  <h1 className="text-xl leading-none mb-1 text-slate-50 font-semibold">
                    {link.name}
                  </h1>
                  <p className="text-lg leading-none text-sky-300">
                    {link.content}
                  </p>
                </span>
              </div>
            </a>
          ))}
      </div>
      <div className="mt-2 w-full border border-gray-500 h-0"></div>
      <div className="mt-2 flex flex-wrap-reverse gap-7 h-max p-3 md:p-5 items-center justify-center sm:justify-between">
        <p className="text-base md:text-lg leading-none mb-1 text-slate-50 font-semibold">
          Copyright © Travellin 2024. All Rights Reserved.
        </p>
        <div className="flex gap-5 items-center leading-3 h-5">
          {links.length > 0 &&
            links.slice(3).map((link) => (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.img}></i>
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
