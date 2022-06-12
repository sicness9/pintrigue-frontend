import styled from "styled-components";

export const SearchBarStyles = styled.div`
  display: block;
  min-height: 408px;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }

  .nav-search-container {
    height: 48px;
    border-radius: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;

    .nav-search-item-container {
      padding: 0px 8px 0px 16px;
      height: 100%;
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: row;

      &:focus {
        border: 2px solid lightblue;
      }

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
        box-sizing: border-box;
        display: block;
        background-color: transparent;
        border: none;
        color: rgb(51, 51, 51);
        font-size: 16px;
        font-weight: normal;
        height: 100%;
        outline: none;
        padding: 0px;
        width: 100%;
        line-height: normal;
        margin: 0px;
      }
    }
  }
`;
