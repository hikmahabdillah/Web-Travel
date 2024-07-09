const Component = ({ children }) => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('https://i.pinimg.com/564x/10/0e/e4/100ee45e43f7c1e7ec8801750d14929d.jpg')] bg-gray-300 bg-blend-multiply h-[41rem] w-full bg-cover relative flex justify-center">
        <div className="h-full w-full bg-gradient-to-b from-transparent from-0% via-transparent via-75% to-slate-50 to-100% absolute z-0"></div>
        <div className="h-full px-10 md:px-14 mx-auto max-w-screen-xl flex items-center gap-5 absolute z-10">
          {children}
        </div>
        <img
          src="/img/mountains line.png"
          className="absolute -bottom-[5em] left-0 w-full max-w-2xl"
          alt=""
        />
      </section>
    </>
  );
};

const TextHeader = () => {
  return (
    <div className="flex flex-col justify-center w-full md:w-1/2">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Your <span className="text-[#FACC16]">Journey</span>
        <br /> Your Story
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste blanditiis
        nulla ea magnam corporis. Mollitia aperiam labore aspernatur eligendi.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-100 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

const ImageSlider = () => {
  return (
    <div className="hidden md:flex md:items-center md:justify-center md:w-1/2 ">
      <div className="bg-center bg-no-repeat bg-cover bg-[url('https://i.pinimg.com/564x/6b/a4/cc/6ba4cc76c17b74c9e6e3f3719ad59bc8.jpg')] h-96 w-72 rounded-xl shadow-lg"></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Component>
      <TextHeader />
      <ImageSlider />
    </Component>
  );
};

export default HeroSection;
