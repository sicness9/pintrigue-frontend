import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPopularCategories = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      axios
        .get("http://127.0.0.1:8000/api/pins/popular/", {
          params: { limit: 9 },
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
