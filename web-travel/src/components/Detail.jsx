import {getDetailTrip} from "../hooks/useTrip";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail =() => {
  const { id } = useParams();
  // const trip = getDetailTrip(id);

  // if (!trip) {
  //   return <div>Loading...</div>; // Atau tampilkan loader atau pesan lainnya
  // }
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchDetailTrip = async () => {
      const tripData = await getDetailTrip(id);
      setTrip(tripData);
    };

    fetchDetailTrip();
  }, [id]);

  if (!trip) {
    return <div>Loading...</div>; // Atau tampilkan loader atau pesan lainnya
  }

  return(
    <>
    <div className="my-24">
      <p>{trip.id}</p>
      <p>{trip.name}</p>
      <p>{trip.img}</p>
      <p>{trip.price}</p>
      <p>{trip.typeTrip}</p>
    </div>
    </>
  )
}

export default Detail;