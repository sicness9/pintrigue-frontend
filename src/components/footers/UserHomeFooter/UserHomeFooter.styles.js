import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled(animated.div)`
  box-sizing: border-box;
  display: block;
  right: 0;
  position: absolute;
`;

export const FooterContent = styled(animated.div)`
  display: block;

  .footer-btns-container {
    z-index: 999;
    right: 0;
    margin-right: 16px;
    margin-left: 16px;
    box-sizing: border-box;
    bottom: 0;
    position: fixed;
    margin-top: 16px;
    margin-bottom: 16px;
    display: block;

    .create-pin-btn-container {
      display: block;
      box-sizing: border-box;
      margin-bottom: 10px;
      cursor: pointer;

      .create-pin-btn-space-controller {
        margin-right: 8px;
        margin-left: 8px;
        box-sizing: border-box;
        display: block;
        cursor: pointer;

        .create-pin-btn {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          padding: 13px;
          background-color: #fff;
          border: 4px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

          &:hover {
            background-color: #ddd;
          }

          &:active {
            transform: scale(0.9);
          }

          .create-pin-btn-image-container {
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      }
    }

    .aboutus-btn-container {
      display: block;
      box-sizing: border-box;
      margin-bottom: 22px;
      cursor: pointer;

      .aboutus-btn-space-controller {
        margin-right: 8px;
        margin-left: 8px;
        box-sizing: border-box;
        display: block;
        cursor: pointer;

        .aboutus-btn {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          padding: 13px;
          background-color: #fff;
          border: 4px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

          &:hover {
            background-color: #ddd;
          }

          &:active {
            transform: scale(0.9);
          }

          .aboutus-btn-image-container {
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
