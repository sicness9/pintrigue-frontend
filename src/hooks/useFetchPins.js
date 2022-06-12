import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPins = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      axios.get("http://127.0.0.1:8000/api/pins/").then((res) => {
        setPins(res.data.pins);
      });
      return () => {
        APICall = false;
      };
    }
  }, []);

  return pins;
};
