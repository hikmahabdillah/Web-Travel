import axios from "axios";
import { useEffect, useState } from "react";

const getData = async () => {
  try {
    const response = await axios.get("/data/dataLink.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getLinkData = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const data = await getData();
      setLinks(data);
    };

    fetchLinks();
  }, []);

  return links;
};

export default getLinkData;