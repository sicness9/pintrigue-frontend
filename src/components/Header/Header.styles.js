import styled from "styled-components";

export const Content = styled.nav`
  z-index: 1;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: row;

  .nav-bar {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
    flex-direction: row;

    .logo-nav {
      display: flex;
      align-items: center;

      .logo {
        height: 45px;
        width: 45px;
        padding-left: 5px;
        padding-right: 5px;
      }

      h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #e60023;
        margin-left: 10px;
      }
    }

    .header-btn-container {
      display: flex;
      gap: 12px;

      .log-in-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e60023;
        border: none;
        color: white;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
        padding: 12px;
        padding-right: 12px;
        padding-bottom: 8px;
        padding-top: 8px;
        min-width: 60px;
        border-radius: 24px;
        transition: background-color 0.15s, color 0.15s;

        &:hover {
          background-color: #880115;
          color: #fff;
        }

        @media only screen and (max-width: 632px) {
          padding: 18px 12px;
          height: 58px;
          width: 60px;
          right: 0px;
        }
      }

      .sign-up-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #efefef;
        border: none;
        color: black;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
        padding: 12px;
        padding-right: 12px;
        padding-bottom: 8px;
        padding-top: 8px;
        min-width: 60px;
        border-radius: 24px;
        transition: background-color 0.15s, color 0.15s;
        visibility: visible;

        &:hover {
          background-color: #e2e2e2;
        }

        @media only screen and (max-width: 632px) {
          display: none;
        }
      }
    }
  }
`;
