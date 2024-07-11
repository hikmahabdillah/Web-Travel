const Footer = () => {
  return (
    <>
      <footer className="flex flex-col p-10 pb-3 bg-[#162133]">
        <header className="text-slate-50 mb-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-5">Contact Us</h1>
          <div className="w-full border-2 border-slate-50 h-[0.5px]"></div>
        </header>
        <div className="flex flex-col gap-7 md:ms-5 max-w-lg w-full">
            <a href="#" target="_blank" rel="">
          <div className="flex items-center gap-3">
            <img className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full" src="/img/Phone.png" alt="" />
            <span>
              <h1 className="text-xl leading-none mb-1 text-slate-50 font-semibold">Phone</h1>
              <p className="text-lg leading-none text-sky-300">+6282374727384</p>
            </span>
          </div>
            </a>
            <a href="#" target="_blank" rel="">
          <div className="flex items-center gap-3">
            <img className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full" src="/img/Gmail.png" alt="" />
            <span>
              <h1 className="text-xl leading-none mb-1 text-slate-50 font-semibold">Email</h1>
              <p className="text-lg leading-none text-sky-300">hidsnaksdnjsk@gmail.com</p>
            </span>
          </div>
            </a>
            <a href="#" target="_blank" rel="">
          <div className="flex items-center gap-3">
            <img className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full" src="/img/Location.png" alt="" />
            <span>
              <h1 className="text-xl leading-none mb-1 text-slate-50 font-semibold">Location</h1>
              <p className="text-lg leading-none text-sky-300">East Java, Indonesia</p>
            </span>
          </div>
            </a>
          <div className="w-full border border-gray-500 h-0"></div>
        </div>
        <div className="mt-2 flex flex-wrap-reverse gap-7 h-max p-3 md:p-5 items-center justify-center sm:justify-between">
          <p className="text-base md:text-lg leading-none mb-1 text-slate-50 font-semibold">
            Copyright © Travellin 2024. All Rights Reserved.
          </p>
          <div className="flex gap-5 items-center leading-3 h-5">
          <i className="fa-brands fa-facebook fa-2xl text-slate-50"></i>
          <i className="fa-brands fa-youtube fa-2xl text-slate-50"></i>
          <i className="fa-brands fa-instagram fa-2xl text-slate-50"></i>
          <i className="fa-brands fa-whatsapp fa-2xl text-slate-50"></i>
            {/* <img
              src="https://i.pinimg.com/736x/7a/1d/01/7a1d01d5a4ef5899a20a0db1ac1d562f.jpg"
              className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/7a/1d/01/7a1d01d5a4ef5899a20a0db1ac1d562f.jpg"
              className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/7a/1d/01/7a1d01d5a4ef5899a20a0db1ac1d562f.jpg"
              className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/7a/1d/01/7a1d01d5a4ef5899a20a0db1ac1d562f.jpg"
              className="h-12 w-12 p-2 border-2 border-slate-50 rounded-full"
              alt=""
            /> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
