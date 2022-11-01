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

  .modal-box {
    min-height: 400px;
    padding: 20px 10px 24px;
    box-sizing: border-box;
    display: block;

    .modal-logo-container {
      display: block;
      height: 45px;
      margin: 5px auto 8px;
      width: 45px;

      .modal-logo {
        display: block;
        height: 40px;
        width: 40px;
      }
    }

    .modal-title-container {
      margin: 0px auto 18px;
      width: 400px;
      box-sizing: border-box;
      display: block;

      .modal-title {
        color: rgb(51, 51, 51);
        font-size: 36px;
        font-weight: 600;
        letter-spacing: -1.2px;
        padding-left: 16px;
        padding-right: 16px;
        word-break: break-word;

        h1 {
          display: block;
          margin-block-start: 0.67em;
          margin-block-end: 0.67em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
      }
    }

    .container-for-sub-title {
      margin: 0px auto 18px;
      width: 270px;
      box-sizing: border-box;
      display: block;

      .sub-title-container {
        margin-bottom: 32px;
        margin-top: -16px;

        .sub-title {
          text-align: center;
          word-wrap: break-word;
          font-weight: 400;
        }
      }
    }

    .signup-options {
      text-align: center;
      margin: 0px auto;
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 100%;

      .form-container {
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 268px;

        .register-form {
          width: 100%;
          form {
            display: block;
            margin-top: 0em;
          }

          .emailInputField {
            box-sizing: border-box;
            display: block;
            width: 100%;

            fieldset {
              display: block;
              margin-inline-start: 2px;
              margin-inline-end: 2px;
              padding-block-start: 0.35em;
              padding-inline-start: 0.75em;
              padding-inline-end: 0.75em;
              padding-block-end: 0.625em;
              min-inline-size: min-content;
              border: none;
            }

            .email-label-container {
              box-sizing: border-box;
              clip: rect(0 0 0 0);
              border: 0;
              height: 1px;
              margin: -1px;
              padding: 0;
              position: absolute;
              white-space: nowrap;
              width: 1px;

              .email-label {
                cursor: pointer;
                display: block;
              }
            }

            .email-input-container {
              box-sizing: border-box;
              position: relative;
              display: block;
              width: 100%;

              input {
                border-color: #cdcdcd;
                box-sizing: border-box;
                min-height: 48px;
                padding: 8px 16px;
                width: calc(12 / 12 * 100%);
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                appearance: none;
                border-radius: 16px;
                border-style: solid;
                border-width: 2px;
                color: #111;
                background-color: #fff;
                line-height: normal;
                text-indent: 0px;
                word-spacing: normal;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                cursor: text;
                border-image: initial;

                select,
                textarea {
                  margin: 0;
                  vertical-align: middle;
                }
              }
            }
          }

          .passwordInputField {
            box-sizing: border-box;
            display: block;

            fieldset {
              display: block;
              margin-inline-start: 2px;
              margin-inline-end: 2px;
              padding-block-start: 0.35em;
              padding-inline-start: 0.75em;
              padding-inline-end: 0.75em;
              padding-block-end: 0.625em;
              min-inline-size: min-content;
              border: none;
            }

            .password-label-container {
              box-sizing: border-box;
              clip: rect(0 0 0 0);
              border: 0;
              height: 1px;
              margin: -1px;
              padding: 0;
              position: absolute;
              white-space: nowrap;
              width: 1px;

              .password-label {
                cursor: pointer;
                display: block;
              }
            }

            .password-input-container {
              box-sizing: border-box;
              position: relative;
              display: block;

              input {
                border-color: #cdcdcd;
                box-sizing: border-box;
                min-height: 48px;
                padding: 8px 16px;
                width: calc(12 / 12 * 100%);
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                appearance: none;
                border-radius: 16px;
                border-style: solid;
                border-width: 2px;
                color: #111;
                background-color: #fff;
                line-height: normal;
                text-indent: 0px;
                word-spacing: normal;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                cursor: text;
                border-image: initial;

                select,
                textarea {
                  margin: 0;
                  vertical-align: middle;
                }
              }
            }
          }

          .usernameInputField {
            box-sizing: border-box;
            display: block;

            fieldset {
              display: block;
              margin-inline-start: 2px;
              margin-inline-end: 2px;
              padding-block-start: 0.35em;
              padding-inline-start: 0.75em;
              padding-inline-end: 0.75em;
              padding-block-end: 0.625em;
              min-inline-size: min-content;
              border: none;
            }

            .username-label-container {
              box-sizing: border-box;
              clip: rect(0 0 0 0);
              border: 0;
              height: 1px;
              margin: -1px;
              padding: 0;
              position: absolute;
              white-space: nowrap;
              width: 1px;

              .username-label {
                cursor: pointer;
                display: block;
              }
            }

            .username-input-container {
              box-sizing: border-box;
              position: relative;
              display: block;

              .username-input {
                border-color: #cdcdcd;
                box-sizing: border-box;
                min-height: 48px;
                padding: 8px 16px;
                width: calc(12 / 12 * 100%);
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                appearance: none;
                border-radius: 16px;
                border-style: solid;
                border-width: 2px;
                color: #111;
                background-color: #fff;
                line-height: normal;
                text-indent: 0px;
                word-spacing: normal;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                cursor: text;
                border-image: initial;

                select,
                textarea {
                  margin: 0;
                  vertical-align: middle;
                }
              }
            }
          }

          .registerFormSubmitButton {
            box-sizing: border-box;
            display: block;
            margin-bottom: 20px;

            button {
              border: 0px;
              height: 40px;
              display: inline-block;
              border-radius: 20px;
              padding: 0px 18px;
              font-size: 15px;
              font-weight: bold;
              cursor: pointer;
              margin-top: 10px;
              vertical-align: middle;
              text-align: center;
              background-color: var(--primary-color);
              color: rgb(255, 255, 255);
              width: 90%;
              line-height: normal;
            }
          }
        }
      }

      .divider {
        width: 40%;
        height: 1px;
        background-color: #cdcdcd;
      }

      .active-account-container {
        display: flex;
        justify-content: center;

        .already-have-account-button {
          margin-top: 10px;
          box-sizing: border-box;
          display: block;
          background: none;
          border: none;
          text-align: left;
          color: rgb(51, 51, 51);
          margin-left: 5px;
          font-weight: bold;
          cursor: pointer;
          line-height: normal;
          font-size: 12px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
