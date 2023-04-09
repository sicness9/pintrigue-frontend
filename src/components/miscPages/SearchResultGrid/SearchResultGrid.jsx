import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// mutations
import { useSearchPinMutation } from "../../../slices/pinApiSlice";

// components
import Pin from "../../pins/Pin/Pin";

// styles
import { AnimatedGrid } from "./SearchResultGrid.styles";

const SearchResultGrid = (props) => {
  const [items, set] = useState([]); // Data will be the query I run to get the data
  const [category, setCategory] = useState(props.category);
  const [posted_by, setPosted_by] = useState("");
  let page = 0;

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
          <Link key={index} to={`/pin/${item.pin_id}`}>
            <Pin
              key={index}
              image_id={{
                url: `${process.env.REACT_APP_CDN_URL}${item.image_id}`,
              }}
            />
          </Link>
        ))}
      </div>
    </AnimatedGrid>
  );
};

export default SearchResultGrid;
