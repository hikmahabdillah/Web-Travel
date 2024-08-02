import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { getTripData } from "../hooks/useTrip";

const Component = ({ children, imgState }) => {
  return (
    <>
      <section
        className={`bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply h-[41rem] w-full relative flex justify-center`}
        style={{ backgroundImage: `url(${imgState})` }}
      >
        <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-slate-50 absolute z-0"></div>
        <div className="h-full px-8 sm:px-10 md:px-14 w-full max-w-screen-xl flex items-center gap-5 absolute z-10">
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
      A trusted travel service ready to take you to explore the world. We offer various travel packages with experienced guides and professional services. Make your vacation dreams come true with us with ease and comfort.
      </p>

      <a
        href="#packages"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40"
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
    </div>
  );
};

const ImageSlider = ({ setCurrentImageSrc }) => {
  const trips = getTripData();
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const img = currentSlide.querySelector("img");
        if (img) {
          setCurrentImageSrc(img.src);
        }
      });
    }
  }, [swiper, setCurrentImageSrc]);

  return (
    <div className="hidden md:flex md:items-center md:justify-center md:w-1/2">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={trips.length >= 5}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          start: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
        onSwiper={setSwiper}
      >
        {trips.length > 0 &&
          trips.slice(0, 5).map((trip) => (
            <SwiperSlide key={trip.id}>
              <img
                src={trip.img}
                alt={trip.name}
                className="h-96 w-72 shadow-lg"
              />
              <h2 className="text-2xl font-semibold text-slate-50 absolute bottom-5 left-5 z-10">
                {trip.name}
              </h2>
              <div className="overlayGradient h-full w-full bg-gradient-to-b from-transparent via-transparent to-neutral-600 absolute top-0 z-0"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const HeroSection = () => {
  const [currentImageSrc, setCurrentImageSrc] = useState("");

  return (
    <Component imgState={currentImageSrc}>
      <TextHeader />
      <ImageSlider setCurrentImageSrc={setCurrentImageSrc} />
    </Component>
  );
};

export default HeroSection;
