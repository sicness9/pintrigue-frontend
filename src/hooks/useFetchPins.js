import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPins = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      axios.get(`${import.meta.env.VITE_API_URL}/pins/`).then((res) => {
        setPins(res.data.pins);
      });
      return () => {
        APICall = false;
      };
    }
  }, []);

  return pins;
};
