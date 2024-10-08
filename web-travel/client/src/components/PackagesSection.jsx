import { useContext } from "react";
import { getTripData } from "../hooks/useTrip";
import spanLabel from "./layout/TripLabel";
import { FilterTrip } from "../context/FilterTrip";
import { Link } from "react-router-dom";

const FilterInput = ({filter, handleChange}) => {
  return (
    <>
      <div className="flex gap-4 items-center max-w-xs w-full">
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
        </div>
    </>
  )
}

const DisplayTrip = ({ filteredPackages }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-center justify-items-center w-full md:max-w-2xl lg:max-w-5xl">
        {filteredPackages.slice(0, 6).map((trip) => (
          <div
            key={trip.id}
            className="flex flex-col p-4 rounded-lg shadow w-full max-w-80 text-neutral-800"
          >
            {spanLabel(trip.typeTrip)}
            <img
              src={trip.img}
              alt={trip.name}
              className="object-cover object-center h-52 w-full rounded-md mb-2"
            />
            <h2 className="text-2xl font-semibold">{trip.name}</h2>
            <p className="text-base">{trip.location}</p>
            <div className="mt-6 flex items-end justify-between">
              <p className="text-2xl font-bold">IDR {trip.price}K</p>
              <Link to={`/detail-package/${trip.id}`} className="text-lg font-semibold flex items-center">
                Detail <i className="ms-1 fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const PackagesSection = () => {
  const trips = getTripData();
  const { filter, setFilter } = useContext(FilterTrip);

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  const filteredPackages = filter ? trips.filter((pkg) => pkg.typeTrip === filter) : trips;

  return (
    <section id="packages" className="px-7 sm:px-10 my-24 flex flex-col items-center">
      <header className="text-left mb-8 w-full md:max-w-2xl lg:max-w-5xl flex flex-wrap items-center gap-4 justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Choose Your Package
          </h1>
          <p className="text-base md:text-lg font-semibold text-gray-600">
            Here are top package recommendations
          </p>
        </div>
        <FilterInput filter={filter} handleChange={handleChange}/>
      </header>
      <DisplayTrip filteredPackages={filteredPackages} />
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
  );
};

export default PackagesSection;
