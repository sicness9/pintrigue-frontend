import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  .close-modal-button-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    cursor: pointer;

    .clode-modal-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: transparent;
      border-radius: 50%;
      padding: 8px;

      &:hover {
        background-color: #efefef;
      }

      .close-button-image-container {
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .modal-top-content {
    width: 100%;
    height: 325px;

    img {
      margin-bottom: 12px;
      height: 50px;
    }

    h1 {
      margin-bottom: 12px;
    }

    h2 {
      margin-bottom: 12px;
    }

    .login-button {
      padding: 8px 10px 8px 10px;
      border-radius: 20px;
      border: none;
      margin-bottom: 12px;
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: var(--colorRedHovered);
      }
    }
  }

  .modal-bottom-content {
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 17px;

    .login-switch-account {
      margin-top: 5px;
      cursor: pointer;

      .signin-dif-account {
        text-decoration: none;
        font-style: none;
        margin-top: 5px;
        color: black;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .login-sign-up {
      margin-top: 5px;
      cursor: pointer;

      .signup-tag {
        text-decoration: none;
        font-style: none;
        margin-top: 5px;
        color: black;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
