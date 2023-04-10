import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// API mutations
import { useSearchPinMutation } from "../../../slices/pinApiSlice";

// components
import Pin from "../../pins/Pin/Pin";

// styles
import { AnimatedGrid } from "./UserHomeGrid.styles";

const UserHomeGrid = (props) => {
  const [items, set] = useState([]); // Data will be the query I run to get the data
  const [category, setCategory] = useState("");
  const [posted_by, setPosted_by] = useState("");
  const [searchPin, { isLoading }] = useSearchPinMutation();
  let page = 0;

  const loadMorePins = () => {
    searchPin({ category, posted_by, page })
      .unwrap()
      .then((res) => {
        console.log("Checking response", res);
        const newPins = [];
        res.pins.forEach((pin) => {
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
          <Link to={`/pin/${item.pin_id}`} key={index}>
            <Pin
              key={index}
              image_id={{
                url: `${import.meta.env.VITE_CDN_URL}${item.image_id}`,
              }}
            />
          </Link>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </AnimatedGrid>
  );
};

export default UserHomeGrid;
