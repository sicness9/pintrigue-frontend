import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedMainContentStyles = styled(animated.div)`
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    left: auto;
    right: auto;

  .main-content-container {
    display: flex;
    width: 1750px;
    position: absolute;
    top: 32%;
    left: 3%;
    right: 3%;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

    @media only screen and (max-width: 632px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .column-container {
      display: block;
      width: calc(3 / 12 * 100%);
      
      .presentation {
        display: block;
      }
    }

    .home-pin-container {
        /* margin-top: 0px; */
        box-sizing: border-box;
        display: block;
    }

    .all-pins {
      box-sizing: border-box;
      display: block;
    }

    .home-page-usecase {
      object-fit: cover;
      overflow: visible;
    }
  }
`;
