import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedGrid = styled(animated.div)`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  .grid-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    column-gap: 0px;
  }
`;
