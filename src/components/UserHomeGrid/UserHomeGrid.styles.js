import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedGrid = styled(animated.div)`
  height: 100%;
  width: 100%;

  .grid-container {
    display: grid;
  }
`;
