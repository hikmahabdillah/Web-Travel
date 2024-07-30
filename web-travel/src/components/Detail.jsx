import { getDetailTrip } from "../hooks/useTrip";
import spanLabel from "./layout/TripLabel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GalleryModal from "./layout/GalleryModal";

const Detail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [gallery, setGallery] = useState("");

  useEffect(() => {
    const fetchDetailTrip = async () => {
      const tripData = await getDetailTrip(id);
      setTrip(tripData);
    };

    fetchDetailTrip();
  }, [id]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isModal && <GalleryModal image={gallery} Click={() => setIsModal(!isModal)}/>}
      <section
        id="detailPackages"
        className="px-7 sm:px-10 py-24 flex flex-col items-center bg-gradient-to-b from-neutral-800 via-slate-50 to-slate-50"
      >
        <header className="text-left mb-8 w-full max-w-5xl flex items-center gap-4 justify-between">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-slate-100">
            Detail Package
          </h1>
        </header>
        <div
          key={trip.id}
          className="flex flex-col lg:flex-row gap-7 p-4 rounded-lg shadow w-full max-w-5xl text-neutral-800 bg-slate-50 "
        >
          <img
            src={trip.img}
            alt={trip.name}
            className="object-cover object-center h-full max-h-[34rem] w-full lg:w-1/2 rounded-md mb-2"
          />
          <div className="lg:py-5 detail flex flex-col w-full flex-1 self-center overflow-hidden	">
            {spanLabel(trip.typeTrip)}
            <h2 className="text-4xl font-semibold">{trip.name}</h2>
            <p className="text-lg">{trip.location}</p>
            <h3 className="mt-4">Benefits:</h3>
            <ul>
              {trip.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <span className="mt-4 flex items-center justify-between">
              <p className="text-2xl font-bold">IDR {trip.price}K</p>
              <Link
                to="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 text-nowrap"
              >
                {/* <i className="mr-3 fa-solid fa-arrow-left"></i> */}
                Order Now
              </Link>
            </span>
            <div className="my-5 w-full border border-gray-300 h-0"></div>
            <h3 className="mb-2 text-xl font-semibold">Gallery</h3>
            <span className="overflow-auto flex items-center gap-5">
              {trip.gallery.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className="min-w-52 h-32 rounded-xl object-cover object-center hover:opacity-65 duration-300 cursor-pointer"
                  onClick={() => {setIsModal(!isModal); setGallery(image)}}
                ></img>
              ))}
            </span>
          </div>
        </div>
        <Link
          to="/#packages"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 mt-8 text-nowrap"
        >
          <i className="mr-3 fa-solid fa-arrow-left"></i>
          Back to Home
        </Link>
      </section>
    </>
  );
};

export default Detail;
