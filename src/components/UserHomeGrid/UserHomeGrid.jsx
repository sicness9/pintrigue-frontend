import useMeasure from "react-use-measure";
import React, { useState, useEffect, useMemo } from "react";
import { useTransition, animated } from "react-spring";

// hooks
import useMedia from "../../hooks/useMedia";

// components
import Pin from "../Pin/Pin";

// styles
import { AnimatedGrid } from "./UserHomeGrid.styles";

const UserHomeGrid = () => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  const [items, set] = useState(data); // Data will be the query I run to get the data

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)); // Puts the tiles into the smallest column using Math.min
      const x = (width / columns) * column; // x = container width / number of columns * column index
      const y = (heights[column] += child.height / 2) - child.height / 2; // y = height of the current column
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <AnimatedGrid>
      <div
        ref={ref}
        className="grid-container"
        style={{ height: Math.max(...heights) }}
      >
        {transitions((style, item) => (
          <animated.div style={style}>
            {/* <Pin style={{ backgroundImage: }}> need to map pins from the data I get from query */}
          </animated.div>
        ))}
      </div>
    </AnimatedGrid>
  );
};
