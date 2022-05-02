import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedGrid = styled(animated.div)`
  height: 100%;
  width: 1700px;
  margin: 0 auto;

  .grid-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 10px;
  }
`;
