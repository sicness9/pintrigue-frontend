import styled from "styled-components";

export const ModalLoginPageStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 400px;
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

  .sign-in-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .login-modal-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;

      .pintrigue-logo-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        .logo-img {
          width: 32px;
        }
      }

      .title-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;

        .title-text {
          font-size: 35px;
          font-weight: 600;
        }
      }
    }

    .form-container {
      width: 268px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0px auto;

      .sign-in-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;

        .username-input-container {
          width: 100%;
          height: 40px;
          padding: 8px 0px 8px 0px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .signin-username-input-field {
            height: 100%;
            width: 250px;
            border-radius: 12px;
            background-color: white;
            border: 2px solid #e2e2e2;
            font-size: 16px;
            padding-left: 10px;
          }
        }

        .password-input-container {
          width: 100%;
          height: 40px;
          padding: 8px 0px 8px 0px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .signin-password-input-field {
            height: 100%;
            width: 250px;
            border-radius: 12px;
            background-color: white;
            border: 2px solid #e2e2e2;
            font-size: 16px;
            padding-left: 10px;
          }
        }
      }

      .forgot-password-link-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 20px;

        .forgot-password-link-text {
          font-size: 14px;
          font-weight: bold;
        }
      }

      .login-btn-container {
        width: 100%;
        padding-bottom: 25px;
        cursor: pointer;

        .login-btn {
          width: 100%;
          height: 40px;
          border-radius: 20px;
          border: none;
          background-color: var(--primary-color);
          color: white;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            background-color: var(--colorRedHovered);
          }

          &:active {
            transform: translateY(2px);
          }
        }
      }
    }

    .divider {
      width: 25%;
      height: 1px;
      background-color: #e2e2e2;
      margin-bottom: 10px;
    }

    .sign-up-link-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .sign-up-text {
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
