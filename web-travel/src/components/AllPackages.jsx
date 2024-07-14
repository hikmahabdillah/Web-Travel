import { getTripData } from "../hooks/useTrip";
import spanLabel from "./TripLabel";
import { FilterTrip } from "../context/FilterTrip";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useDebounce } from "use-debounce";

const AllPackages = () => {
  const trips = getTripData();
  const { filter, setFilter } = useContext(FilterTrip);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortType, setSortType] = useState("asc");
  const [debounceValue] = useDebounce(search, 500);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // event handler
  const handleChange = (event) => setFilter(event.target.value);
  const handleSort = (event) => setSortBy(event.target.value);
  const handleSortType = (event) => setSortType(event.target.value);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const searchPackages = debounceValue
    ? trips.filter((pkg) =>
        pkg.name.toLowerCase().includes(debounceValue.toLowerCase())
      )
    : trips;

  const filteredPackages = filter
    ? searchPackages.filter((pkg) => pkg.typeTrip === filter)
    : searchPackages;

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "name") {
      return sortType === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === "price") {
      return sortType === "asc" ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <section
        id="allpackages"
        className="px-7 sm:px-10 py-24 flex flex-col items-center bg-gradient-to-b from-neutral-800 via-slate-50 to-slate-50"
      >
        <header className="text-left mb-8 w-full md:max-w-2xl lg:max-w-5xl flex flex-wrap items-center gap-5">
          <span className="self-start">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-slate-100">
              Choose Your Package
            </h1>
            <p className="text-base md:text-lg font-semibold text-gray-300">
              All packages
            </p>
          </span>
          <div className="feature flex flex-wrap items-center justify-start sm:justify-end gap-5 w-full">
            <form
              className="w-full max-w-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex">
                <label
                  htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="rounded-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search Name"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
            <button
              onClick={toggleModal}
              className="block w-max text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
            >
              <i className="fa-solid fa-filter fa-lg mr-2" style={{color: "#f7f7f7"}}></i>
              Filter
            </button>

            {/* <!-- Top Right Modal --> */}
            {isModalOpen && (
            <div
              id="top-right-modal"
              className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="fixed top-5 right-5 z-50  w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-slate-100 rounded-lg shadow ">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                    <h3 className="text-xl font-medium text-gray-900">
                      Filter & Sort
                    </h3>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5 space-y-4">
                    <span className="flex gap-4 items-center max-w-sm w-full bg-slate-50 rounded-lg py-1 px-3">
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
                          className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          onChange={handleChange}
                        >
                          <option value="">All Type</option>
                          <option value="longtrip">Long Trip</option>
                          <option value="opentrip">Open Trip</option>
                          <option value="privatetrip">Private Trip</option>
                          <option value="cheaptrip">Cheap Trip</option>
                        </select>
                      </form>
                    </span>
                    <span className="flex gap-4 items-center max-w-sm w-full bg-slate-50 rounded-lg py-1 px-3">
                      <p className="text-base md:text-lg font-semibold text-gray-600 text-nowrap">
                        Sort By :
                      </p>
                      <form className="w-full">
                        <label htmlFor="underline_select" className="sr-only">
                          Underline select
                        </label>
                        <select
                          id="underline_select"
                          value={sortBy}
                          className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          onChange={handleSort}
                        >
                          <option value="">All Type</option>
                          <option value="name">Name</option>
                          <option value="price">Price</option>
                        </select>
                      </form>
                    </span>
                    <span className="flex gap-4 items-center max-w-sm w-full bg-slate-50 rounded-lg py-1 px-3">
                      <p className="text-base md:text-lg font-semibold text-gray-600 text-nowrap">
                        Asc / Desc :
                      </p>
                      <form className="w-full">
                        <label htmlFor="underline_select" className="sr-only">
                          Underline select
                        </label>
                        <select
                          id="underline_select"
                          value={sortType}
                          className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          onChange={handleSortType}
                        >
                          <option value="">Random</option>
                          <option value="asc">ascending</option>
                          <option value="desc">descending</option>
                        </select>
                      </form>
                    </span>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b ">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </header>
        {!trips && (
          <div>
            <h2 className="text-2xl text-neutral-800 font-semibold">Loading...</h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-center justify-items-center w-full md:max-w-2xl lg:max-w-5xl">
          {sortedPackages.length > 0 &&
            sortedPackages.map((trip) => (
              <div
                key={trip.id}
                className="flex flex-col p-4 rounded-lg shadow w-full max-w-80 text-neutral-800 bg-slate-50"
              >
                {spanLabel(trip.typeTrip)}
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

export default AllPackages;
