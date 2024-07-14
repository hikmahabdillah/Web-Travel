import getLinkData from "../hooks/useLink";

const Footer = () => {
  const links = getLinkData();
  return (
    <>
      <footer className="flex flex-col p-10 pb-3 bg-[#162133]">
        <header className="text-slate-50 mb-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-5">
            Contact Us
          </h1>
          <div className="w-full border-2 border-slate-50 h-[0.5px]"></div>
        </header>
        <div className="flex flex-col gap-7 md:ms-5 max-w-lg w-full">
          {links.length > 0 &&
            links.slice(0, 3).map((link) => (
              <a key={link.id} href={link.link} target="_blank" rel="">
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
          <div className="w-full border border-gray-500 h-0"></div>
        </div>
        <div className="mt-2 flex flex-wrap-reverse gap-7 h-max p-3 md:p-5 items-center justify-center sm:justify-between">
          <p className="text-base md:text-lg leading-none mb-1 text-slate-50 font-semibold">
            Copyright © Travellin 2024. All Rights Reserved.
          </p>
          <div className="flex gap-5 items-center leading-3 h-5">
            {links.length > 0 &&
              links.slice(3).map((link) => (
                <a key={link.id} href={link.link} target="_blank" rel="">
                  <i className={link.img}></i>
                </a>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
