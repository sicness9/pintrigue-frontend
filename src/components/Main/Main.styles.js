import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  overflow: hidden visible;
  box-sizing: border-box;
  display: block;
  overflow: hidden;

  .page-container {
    box-sizing: border-box;
    display: block;
    overflow: hidden;

    .fullpage {
      height: 100%;
      display: block;
      overflow: hidden;

      .fullpage-wrapper {
        box-sizing: border-box;
        display: block;
        overflow: hidden;

        .main {
          height: 100vh;
          width: 100%;
          top: 80px;
          align-content: center;
          justify-content: center;
          overflow: hidden visible;
          box-sizing: border-box;
          background-color: #fff;
          display: block;
          overflow: hidden;
        }
      }
    }
  }
`;

export const TitleContent = styled.div`
  height: calc(30vh + 140px);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;

  .main-title-content {
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    h1 {
      display: block;
      margin-top: 50px;
      margin-bottom: 0;
      font-size: 60px;
      font-weight: 600;
    }
  }
`;

export const AnimatedTitle = styled(animated.div)`
  font-size: 60px;
  margin: 2px;
  font-weight: 600;
  text-align: center;
  overflow: hidden;

  p {
    margin: 0;
  }

  .home-page-food {
    color: rgb(194, 139, 0);
  }

  .home-page-homeDecor {
    color: rgb(97, 140, 123);
  }

  .home-page-fashion {
    color: rgb(0, 118, 211);
  }

  .home-page-gardening {
    color: rgb(64, 122, 87);
  }
`;

export const AnimatedCarousel = styled.div`
  z-index: 999;
  box-sizing: border-box;
  display: block;
  display: flex;
  justify-content: center;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    .dot-0 {
      background-color: rgb(225, 225, 225);
      height: 10px;
      padding: 5px;
      display: inline-block;
      border-radius: 50px;
      border: none;
      outline: none;
      margin: 6px;
      display: inline-block;
      cursor: pointer;
    }

    .dot-1 {
      background-color: rgb(194, 139, 0);
      height: 10px;
      padding: 5px;
      display: inline-block;
      border-radius: 50px;
      border: none;
      outline: none;
      margin: 6px;
      display: inline-block;
      cursor: pointer;
    }

    .dot-2 {
      background-color: rgb(97, 140, 123);
      height: 10px;
      padding: 5px;
      display: inline-block;
      border-radius: 50px;
      border: none;
      outline: none;
      margin: 6px;
      display: inline-block;
      cursor: pointer;
    }

    .dot-3 {
      background-color: rgb(0, 118, 211);
      height: 10px;
      padding: 5px;
      display: inline-block;
      border-radius: 50px;
      border: none;
      outline: none;
      margin: 6px;
      display: inline-block;
      cursor: pointer;
    }

    .dot-4 {
      background-color: rgb(64, 122, 87);
      height: 10px;
      padding: 5px;
      display: inline-block;
      border-radius: 50px;
      border: none;
      outline: none;
      margin: 6px;
      display: inline-block;
      cursor: pointer;
    }
  }
`;
