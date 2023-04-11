import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  .error-container {
    display: flex;
    justify-content: center;
    padding-top: 80px;
    height: 100%;

    .error-title {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      margin-top: 10%;

      .error-text {
        font-size: 50px;
        font-weight: bold;
      }

      .gif {
        width: 300px;
        margin-left: 100px;
        margin-top: 20px;
      }
    }
  }
`;
