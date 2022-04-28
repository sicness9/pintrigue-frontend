import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: block;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: block;

  .modal {
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    position: fixed;
  }
`;

export const AnimatedModal = styled(animated.div)`
  position: absolute;
  width: 375px;
  height: 400px;
  padding: 32px 0px;
  margin: auto;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #ffffff;
  border: 0.5px solid black;
  border-radius: 8px;
  box-shadow: rgb(0, 0, 0, 0.5) 0px 2px 10px;
  padding: 4;
  text-align: center;

  .modal-top-content {
    width: 100%;
    height: 325px;

    img {
      margin-bottom: 12px;
      height: 50px;
    }

    h1 {
      margin-bottom: 12px;
    }

    h2 {
      margin-bottom: 12px;
    }

    button {
      width: 80%;
      height: 40px;
      border-radius: 20px;
      border: none;
      margin-bottom: 12px;
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
    }
  }

  .modal-bottom-content {
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 17px;

    .login-switch-account {
      margin-top: 5px;
    }

    a {
      text-decoration: none;
      font-style: none;
      margin-top: 5px;
      color: black;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
