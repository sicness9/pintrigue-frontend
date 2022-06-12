import styled from "styled-components";

export const AutoCompleteList = styled.div`
  .suggestions {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;

    .suggestion-active {
      width: 100%;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    .auto-suggestion {
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 10px;
      cursor: pointer;
      width: 100%;
      height: 25px;

      &:hover {
        background-color: #f5f5f5;
      }

      .search-logo {
        width: 14px;
        align-items: center;
        margin-right: 15px;
      }

      .suggestion-item {
        font-size: 16px;
        font-weight: normal;
        text-decoration: none;
        color: #000;
      }
    }
  }
`;
