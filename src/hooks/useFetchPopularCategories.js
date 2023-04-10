import { useState, useEffect } from "react";

// mutation
import { useGetPopularPinCategoriesMutation } from "../slices/pinApiSlice";

export const useFetchPopularCategories = () => {
  const [pins, setPins] = useState([]);
  const [getPopularPinCategories] = useGetPopularPinCategoriesMutation();

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      getPopularPinCategories()
        .unwrap()
        .then((res) => {
          setPins(res);
        });
    }
    return () => {
      APICall = false;
    };
  }, []);

  return pins;
};
