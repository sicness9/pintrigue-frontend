import styled from "styled-components";

export const DisplayedPinStyles = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  .pin-shape-controller {
    height: 100%;
    width: 100%;
    /* border-radius: 30px 0 0; */
    overflow: hidden;

    .pin {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  }
`;
