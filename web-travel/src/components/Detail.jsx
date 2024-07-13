import { getDetailTrip } from "../hooks/useTrip";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchDetailTrip = async () => {
      const tripData = await getDetailTrip(id);
      setTrip(tripData);
    };

    fetchDetailTrip();
  }, [id]);

  const spanLabel = () => {
    switch (trip.typeTrip) {
      case "cheaptrip":
        return (
          <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 w-max mb-2">
            Cheap Trip
          </span>
        );
      case "privatetrip":
        return (
          <span className="bg-gray-100 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 w-max mb-2">
            Private Trip
          </span>
        );
      case "opentrip":
        return (
          <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 w-max mb-2">
            Open Trip
          </span>
        );
      case "longtrip":
        return (
          <span className="bg-yellow-100 text-yellow-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 w-max mb-2">
            Long Trip
          </span>
        );
      default:
        return null;
    }
  };

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section
        id="detailPackages"
        className="px-7 sm:px-10 py-24 flex flex-col items-center bg-gradient-to-b from-neutral-800 via-slate-50 to-slate-50"
      >
        <header className="text-left mb-8 w-full md:max-w-2xl lg:max-w-5xl flex items-center gap-4 justify-between">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-slate-100">
            Detail Package
          </h1>
        </header>
        <div
          key={trip.id}
          className="flex flex-col md:flex-row gap-7 p-4 rounded-lg shadow w-full text-neutral-800 bg-slate-50"
        >
          <img
            src={trip.img}
            alt={trip.name}
            className="object-cover object-center h-full max-h-[30rem] w-full md:w-1/2 rounded-md mb-2"
          />
          <div className="detail flex flex-col w-full flex-1 self-center">
            {spanLabel()}
            <h2 className="text-4xl font-semibold">{trip.name}</h2>
            <p className="text-lg">{trip.location}</p>
            <h3 className="mt-4">Benefits:</h3>
            <ul>
              {trip.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <span className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-bold">IDR {trip.price}K</p>
              <Link
                to="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 text-nowrap"
              >
                {/* <i className="mr-3 fa-solid fa-arrow-left"></i> */}
                Order Now
              </Link>
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
      {/* <div className="my-24 flex justify-center items-center">
      <p>{trip.id}</p>
      <p>{trip.name}</p>
      <p>{trip.img}</p>
      <p>{trip.price}</p>
      <p>{trip.typeTrip}</p>
    </div> */}
    </>
  );
};

export default Detail;
