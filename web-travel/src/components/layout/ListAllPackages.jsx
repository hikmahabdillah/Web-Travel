import { Link } from "react-router-dom";

const ListAllPackages = ({sortedPackages, spanLabel}) => {
  return (
    <>
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
    </>
  )
}

export default ListAllPackages;