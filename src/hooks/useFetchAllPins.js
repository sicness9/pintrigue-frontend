import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchAllPins = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      axios.get(`${import.meta.env.VITE_API_URL}/pins/all-pins`).then((res) => {
        setPins(res.data);
      });
    }
    return () => {
      APICall = false;
    };
  }, []);

  return pins;
};
