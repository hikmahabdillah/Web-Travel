import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  // const [hidden, setHidden] = useState(true);

  const navMobileHandle = () => {
   const navMobile = document.querySelector(".nav-mobile");
    if(navMobile){
      navMobile.classList.toggle("hidden");
    }
    setVisible(!visible);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector("nav.nav-sticky");

      if (header) {
        header.classList.toggle("backdrop-blur-md", window.scrollY > 0);
        header.classList.toggle("backdrop-brightness-50", window.scrollY > 0);
        header.classList.toggle("border-b", window.scrollY > 0);
        header.classList.toggle("border-neutral-600", window.scrollY > 0);
      }

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav
        className={`nav-sticky bg-transparent fixed top-0 left-1/2 transform -translate-x-1/2 z-50 text-slate-100 w-full max-w-[1366px] transition-all duration-700 border-transparent ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full flex items-center justify-between px-7 md:px-12 py-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logoTravellin.png"
              className="h-14 w-full object-cover object-center"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="nav-mobile hidden w-full absolute top-[90px] right-0 md:static md:block md:w-auto transition-all duration-700 rounded-lg"
            id="navbar-dropdown"
          >
            <ul className={`bg-neutral-800 md:bg-transparent flex flex-col items-center font-medium p-4 md:p-0 border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-slate-100 transition-all duration-700 rounded-lg ${
              visible ? "translate-y-0" : "-translate-y-full"
            }`}>
              <li onClick={navMobileHandle}>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:text-blue-700  rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li onClick={navMobileHandle}>
                <a
                  href="#services"
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Services
                </a>
              </li>
              <li onClick={navMobileHandle}>
                <a
                  href="#packages"
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Packages
                </a>
              </li>
              <li onClick={navMobileHandle}>
                <a
                  href="#footer"
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
