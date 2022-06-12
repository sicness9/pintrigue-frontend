import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;

  .search-btn {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    border: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #e2e2e2;
    }

    .search-btn-image-container {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;
