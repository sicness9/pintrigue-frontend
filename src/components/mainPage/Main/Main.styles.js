import styled from "styled-components";
import { animated } from "react-spring";

export const EntireScreenWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  left: 0;
`;

export const Wrapper = styled.div`
  top: 80px;
  height: 100%;
  width: 100%;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  left: 0;

  .page-container {
    width: 100%;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;

    .main {
      top: 80px;
      width: 1750px;
      height: 100%;
      box-sizing: border-box;
      position: relative;
      display: block;
      margin: auto;
    }
  }
`;

export const TitleContent = styled.div`
  height: 30%;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  align-items: center;

  .home-main-title {
    margin: 2px;
    font-size: 60px;
    font-weight: 600;
    box-sizing: border-box;
    display: block;
    /* position: fixed; */
  }
`;

export const AnimatedTitle = styled(animated.div)`
  height: 60px;
  width: 65%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 48px;
  display: flex;
  flex-direction: row;

  p {
    font-size: 60px;
    margin: 0px;
    font-weight: 600;
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0px;
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
  z-index: 1;
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
