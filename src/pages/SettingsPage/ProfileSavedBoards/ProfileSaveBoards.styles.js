import styled from "styled-components";

export const SavedBoardsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .filter-bar {
    width: 93%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: none;
      border-radius: 100px;
      height: 45px;
      width: 45px;
      cursor: pointer;

      img {
        margin-top: 4px;
      }

      &:hover {
        background-color: var(--greyHover);
      }
    }
  }
`;
