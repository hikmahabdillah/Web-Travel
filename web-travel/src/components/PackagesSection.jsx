import getTripData from "../hooks/useTrip";
import { Link } from "react-router-dom";

const PackagesSection = () => {
  const trips = getTripData();
  console.log(trips);

  return (
    <>
      <section className="px-7 sm:px-10 my-24 flex flex-col items-center">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Choose Your Package</h1>
          <p className="text-base md:text-lg font-semibold text-gray-600">
            Top Benefits when using our services
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-center place-items-center w-full md:max-w-2xl lg:max-w-5xl">
          {trips.length > 0 &&
            trips.slice(0, 6).map((trip) => (
              <div
                key={trip.id}
                className="flex flex-col p-4 rounded-lg shadow w-full max-w-80 text-neutral-800"
              >
                <img
                  src={trip.img}
                  alt={trip.name}
                  className="object-cover object-center h-52 w-full rounded-md mb-2"
                />
                <h2 className="text-2xl font-semibold">{trip.name}</h2>
                <p className="text-base">{trip.location}</p>
                <span className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-bold">IDR {trip.price}K</p>
                  <p className="text-lg font-semibold">Detail</p>
                </span>
              </div>
            ))}
        </div>
        <Link
          to="/all-package"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 mt-8"
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
