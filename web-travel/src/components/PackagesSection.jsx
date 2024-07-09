import getTripData from "../hooks/useTrip";

const PackagesSection = () => {
  const trips = getTripData();
  console.log(trips);

  return (
    <>
      <ul className="my-24 px-5">
        {trips.length > 0 &&
          trips.map((trip) => (
            <li key={trip.id} className="my-5">
              <div>{trip.name}</div>
              <div>
                <img
                  src={trip.img}
                  alt={trip.name}
                  height={"200px"}
                  width={"200px"}
                />
              </div>
              <div>
                {trip.benefits.map((benefit, index) => (
                  <span key={index}>
                    {benefit} <br />
                  </span>
                ))}
              </div>
              <div>{trip.typeTrip}</div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PackagesSection;
