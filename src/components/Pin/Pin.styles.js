import styled from "styled-components";

export const PinStyles = styled.div`
  .home-pin {
    width: 236px;
    height: 350px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 16px;
    box-sizing: border-box;
    margin-bottom: 16px;
    margin-top: 16px;
    overflow: hidden;

    .pin-height-controller {
      height: 100%;
      position: relative;

      .pin {
        background-color: transparent;
        position: relative;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
      }
    }
  }
`;
