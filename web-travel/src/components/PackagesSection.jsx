import {getTripData} from "../hooks/useTrip";
import { Link } from "react-router-dom";
import { useState } from "react";

const PackagesSection = () => {
  const trips = getTripData();
  const [filter, setFilter] = useState("cheaptrip");

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value); // Print nilai baru yang dipilih
  };

  const spanLabel = () => {
    switch (filter) {
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

  const filteredPackages = trips.filter((pkg) => pkg.typeTrip === filter);

  return (
    <>
      <section
        id="packages"
        className="px-7 sm:px-10 my-24 flex flex-col items-center"
      >
        <header className="text-left mb-8 w-full md:max-w-2xl lg:max-w-5xl flex items-center gap-4 justify-between">
          <span>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Choose Your Package
            </h1>
            <p className="text-base md:text-lg font-semibold text-gray-600">
              Here is top packages recommendation
            </p>
          </span>
          <span className="flex gap-4 items-center max-w-xs w-full">
            <p className="text-base md:text-lg font-semibold text-gray-600 text-nowrap">
              Filter By Type :
            </p>
            <form className="w-full">
              <label htmlFor="underline_select" className="sr-only">
                Underline select
              </label>
              <select
                id="underline_select"
                value={filter}
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={handleChange}
              >
                <option value="longtrip">Long Trip</option>
                <option value="opentrip">Open Trip</option>
                <option value="privatetrip">Private Trip</option>
                <option value="cheaptrip">Cheap Trip</option>
              </select>
            </form>
          </span>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-center w-full md:max-w-2xl lg:max-w-5xl">
          {filteredPackages.length > 0 &&
            filteredPackages.slice(0, 6).map((trip) => (
              <div
                key={trip.id}
                className="flex flex-col p-4 rounded-lg shadow w-full max-w-80 text-neutral-800"
              >
                {spanLabel()}
                <img
                  src={trip.img}
                  alt={trip.name}
                  className="object-cover object-center h-52 w-full rounded-md mb-2"
                />
                <h2 className="text-2xl font-semibold">{trip.name}</h2>
                <p className="text-base">{trip.location}</p>
                <span className="mt-6 flex items-end justify-between h-full">
                  <p className="text-2xl font-bold">IDR {trip.price}K</p>
                  <Link to={`/detail-package/${trip.id}`}>
                    <p className="text-lg font-semibold">
                      Detail <i className="ms-1 fa-solid fa-arrow-right "></i>
                    </p>
                  </Link>
                </span>
              </div>
            ))}
        </div>
        <Link
          to="/all-package"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 mt-8"
        >
          See All
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
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
        </Link>
      </section>
    </>
  );
};

export default PackagesSection;
