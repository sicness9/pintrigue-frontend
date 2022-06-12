import styled from "styled-components";

export const Wrapper = styled.div`
  top: 80px;
  box-sizing: border-box;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  overflow: auto;
`;

export const PinBuilderContent = styled.div`
  height: 100%;
  flex: 1 1 auto;
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 35px;
  width: 880px;
  position: relative;

  .under-button {
    border-bottom: 3px solid black;
    width: 80%;
    margin-left: 10px;
  }

  .pin-builder-header-container {
    height: 50px;
    padding-top: 20px;
    padding-bottom: 45px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    .create-pin-btn-container {
      padding: 1px 0px;
      cursor: pointer;

      .create-pin-btn {
        padding: 8px;
        cursor: pointer;
        border: none;
        border-radius: 10px;

        &:hover {
          background-color: ${(props) =>
            props.createPinPageActive ? "transparent" : "#e2e2e2"};
        }

        .create-pin-text {
          font-size: 16px;
          font-weight: bold;
        }
      }

      /* .under-button {
        border-bottom: 3px solid black;
        width: 80%;
        margin-left: 12px;
      } */
    }

    .cancel-btn-container {
      padding: 12px 0px;
      cursor: pointer;

      .cancel-btn {
        padding: 8px;
        margin-left: 2px;
        cursor: pointer;
        border: none;
        border-radius: 10px;

        &:hover {
          background-color: ${(props) =>
            props.cancelPageActive ? "none" : "#e2e2e2"};
        }

        .cancel-btn-text {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
`;
