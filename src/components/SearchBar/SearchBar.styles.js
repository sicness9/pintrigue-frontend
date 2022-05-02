import styled from "styled-components";

export const SearchBarStyles = styled.div`
  width: 100%;

  .nav-search-container {
    min-width: 408px;
    flex: 1 1 auto;
    min-height: 0;
    padding-left: 8px;
    padding-right: 8px;
    box-sizing: border-box;
    display: block;
    width: 100%;

    .nav-search-container-for-container {
      height: 48px;
      border-radius: 24px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: row;
      width: 100%;

      &:focus {
        border: 2px solid lightblue;
      }

      .nav-search-item-container {
        border: none;
        height: 100%;
        padding: 0px 0px 0px 16px;
        flex: 1 1 auto;
        min-height: 0;
        min-width: 0;
        position: relative;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 100%;

        .search-logo-container {
          margin-right: 8px;
          flex: 0 0 auto;
          box-sizing: border-box;
          display: block;

          .search-logo {
            height: 16px;
            width: 16px;
            overflow: hidden;
          }
        }

        .nav-search {
          height: 100%;
          flex: 1 1 auto;
          min-height: 0;
          min-width: 0;
          background-color: transparent;
          border: none;
          color: #333;
          font-size: 16px;
          font-weight: normal;
          outline: none;
          padding: 0;
          width: 100%;
          line-height: normal;

          input {
            margin: 0;
            vertical-align: middle;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            appearance: auto;
            cursor: text;
            letter-spacing: normal;
            word-spacing: normal;
            width: 100%;
          }
        }
      }
    }
  }
`;
