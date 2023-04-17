import styled from "styled-components";

export const PinViewContainer = styled.div`
  margin: 85px auto 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  overflow: hidden;
  width: 1250px;
  height: 800px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: rgb(0, 0, 0, 0.5) 0px 3px 10px;

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const PinViewContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .pin-image-view-container {
    width: 2250px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
