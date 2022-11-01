import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchAllPins = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      axios
        .get("http://127.0.0.1:8000/api/pins/popular-pins/", {
          params: { limit: 50 },
        })
        .then((res) => {
          setPins(res.data);
        });
    }
    return () => {
      APICall = false;
    };
  }, []);

  return pins;
};
