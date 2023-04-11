import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// mutations
import { useSearchPinMutation } from "../../../slices/pinApiSlice";

// components
import Pin from "../../../components/pins/Pin/Pin";

// styles
import { AnimatedGrid } from "./SearchResultGrid.styles";

const SearchResultGrid = (props) => {
  const [items, set] = useState([]); // Data will be the result of the query
  const [category, setCategory] = useState(props.category);
  const [posted_by, setPosted_by] = useState("");
  const [searchPin, { isLoading }] = useSearchPinMutation();
  let page = 0;

  console.log("Data:", items);

  const loadMorePins = async () => {
    await searchPin({
      category,
      posted_by,
      page,
    })
      .unwrap()
      .then((res) => {
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
          <Link key={index} to={`/pin/${item.pin_id}`}>
            <Pin
              key={index}
              image_id={{
                url: `${import.meta.env.VITE_CDN_URL}${item.image_id}`,
              }}
            />
          </Link>
        ))}
      </div>
    </AnimatedGrid>
  );
};

export default SearchResultGrid;
