import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedMainContentStyles = styled(animated.div)`
  display: grid;
  width: 100%;
  position: absolute;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  left: auto;
  right: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: center;
  align-items: center;

  .column-container {
    display: block;
    width: calc(3 / 12 * 100%);

    .presentation {
      display: block;

      .home-pin-container {
        box-sizing: border-box;
        display: block;
      }

      .all-pins {
        box-sizing: border-box;
        display: block;
      }
    }
  }

  .home-page-usecase {
    object-fit: cover;
    overflow: visible;
  }
`;
