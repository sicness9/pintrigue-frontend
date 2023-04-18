import styled from "styled-components";

export const PinStyle = styled.div`
  width: 236px;
  height: 350px;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 16px;
  box-sizing: border-box;
  margin-bottom: 16px;
  margin-top: 16px;
  overflow: hidden;
  cursor: pointer;

  .pin-size-controller {
    height: 100%;
    width: 100%;
    position: relative;
    cursor: pointer;

    .pin {
      position: relative;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      cursor: pointer;
      position: relative;
    }
  }
`;
