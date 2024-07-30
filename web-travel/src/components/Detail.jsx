import { getDetailTrip } from "../hooks/useTrip";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GalleryModal from "./layout/GalleryModal";
import DetailSection from "./layout/DetailSection";

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
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
      {!trip && <div>Loading...</div>}
      {isModal && (
        <GalleryModal image={gallery} Click={() => setIsModal(!isModal)} />
      )}
      <section
        id="detailPackages"
        className="px-7 sm:px-10 py-24 flex flex-col items-center bg-gradient-to-b from-neutral-800 via-slate-50 to-slate-50 min-h-screen"
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
          <DetailSection
            label={trip.typeTrip}
            name={trip.name}
            location={trip.location}
            benefits={trip.benefits}
            price={trip.price}
            gallery={trip.gallery}
            setIsModal={setIsModal}
            setGallery={setGallery}
            isModal={isModal}
          />
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
