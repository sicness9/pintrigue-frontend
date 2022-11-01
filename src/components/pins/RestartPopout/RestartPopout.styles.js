import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  min-width: 150px;
  min-height: 50px;
  overflow: hidden;
  border-radius: 16px;
  background-color: #fff;
  top: 230px;
  left: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const Content = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .delete-button-container-menu {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    .delete-button-menu {
      width: 90%;
      height: 100%;
      border: none;
      padding: 3px;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #e2e2e2;
      }

      .button-text {
        /* width: 100%; */
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }
    }
  }
`;
