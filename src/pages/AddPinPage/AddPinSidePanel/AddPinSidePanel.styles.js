import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  height: 90vh;
  width: 50px;
`;

export const Content = styled.div`
  background-color: #fff;
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
  height: 60px;
  width: 40px;

  .add-new-pin-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .add-new-pin-btn {
      border: none;
      background: transparent;
      height: 100%;
      width: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 15px;
      }
    }
  }
`;

export const Divider = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  height: 1px;
  width: 100%;
  background-color: black;
`;
