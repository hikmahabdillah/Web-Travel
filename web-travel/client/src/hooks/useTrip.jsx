import axios from "axios";
import { useEffect, useState } from "react";

const getData = async () => {
  try {
    const response = await axios.get("/data/dataDummy.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getTripData = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await getData();
      setTrips(data);
    };

    fetchTrips();
  }, []);

  return trips;
};

export const getDetailTrip = async (id) => {
  const data = await getData();
  const tripData = data.find((det) => det.id === parseInt(id));
  console.log(tripData)
  return tripData || null; 
};
