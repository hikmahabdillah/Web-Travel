import axios from "axios";
import { useEffect, useState } from "react";

const getData = async (callback) => {
  try {
    const response = await axios.get("data/dataDummy.json");
    callback(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    callback([]);
  }
};

const getTripData = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getData((data) => {
      setTrips(data);
    });
  }, []);

  return trips;
};

export default getTripData;
