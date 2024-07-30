import { getTripData } from "../hooks/useTrip";
import spanLabel from "./layout/TripLabel";
import SearchForm from "./layout/SearchForm";
import FilterModal from "./layout/FilterModal";
import ListAllPackages from "./layout/ListAllPackages";
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
            <SearchForm setSearch={setSearch} />
            <FilterModal
              toggleModal={toggleModal}
              isModalOpen={isModalOpen}
              filter={filter}
              handleChange={handleChange}
              sortBy={sortBy}
              handleSort={handleSort}
              sortType={sortType}
              handleSortType={handleSortType}
            />
          </div>
        </header>
        <ListAllPackages
          sortedPackages={sortedPackages}
          spanLabel={spanLabel}
        />
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
