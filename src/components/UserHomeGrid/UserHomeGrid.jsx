import useMeasure from "react-use-measure";
import React, { useState, useEffect, useMemo } from "react";
import { useTransition, animated } from "react-spring";
import axios from "axios";

// hooks
import useMedia from "../../hooks/useMedia";
import { useFetchPins } from "../../hooks/useFetchPins";

// components
import Pin from "../Pin/Pin";

// styles
import { AnimatedGrid } from "./UserHomeGrid.styles";

const UserHomeGrid = () => {
  // const data = useFetchPins();
  const [items, set] = useState([]); // Data will be the query I run to get the data
  const [category, setCategory] = useState("");
  const [posted_by, setPosted_by] = useState("");
  let page = 0;

  // console.log("Received data: ", data);

  // useEffect(() => {
  //   const pins = Array.from(data);
  //   set(pins);
  // }, [data]);

  console.log("Data:", items);

  const loadMorePins = () => {
    axios
      .get("http://127.0.0.1:8000/api/pins/search/", {
        params: {
          category: category,
          posted_by: posted_by,
          page: page,
        },
      })
      .then((res) => {
        const newPins = [];
        res.data.pins.forEach((pin) => {
          newPins.push(pin);
        });
        set((prevPins) => [...prevPins, ...newPins]);
      });
    page += 1;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePins();
    }
  };

  useEffect(() => {
    loadMorePins();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatedGrid>
      <div className="grid-container">
        {items.map((item, index) => (
          <Pin
            key={index}
            image_id={{
              url: `${process.env.REACT_APP_CDN_URL}${item.image_id}`,
            }}
          />
        ))}
      </div>
    </AnimatedGrid>
  );
};

export default UserHomeGrid;
