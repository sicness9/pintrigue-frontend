import styled from "styled-components";

export const FeedPin = styled.div`
  background-color: #e2e2e2;
  height: 100%;
  width: 100%;
  margin-left: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;

  .image-container {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      background-size: auto;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 8px;
      overflow: hidden;
    }
  }
`;
