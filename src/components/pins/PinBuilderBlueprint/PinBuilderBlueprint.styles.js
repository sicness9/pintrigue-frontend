import styled from "styled-components";

export const PinBuilderBlueprintStyles = styled.div`
  margin-bottom: 50px;
  /* margin-top: 20px; */
  height: calc(100% - 150px);

  @media screen and (max-height: 1300px) {
    height: calc(100% - 400px);
  }

  @media screen and (max-height: 1200px) {
    height: calc(100% - 300px);
  }

  @media screen and (max-height: 1150px) {
    height: calc(100% - 150px);
  }

  @media screen and (max-height: 900px) {
    height: calc(100% - 100px);
  }

  .divider {
    width: 100%;
    background-color: #dedede;
    border-bottom: 0.5px solid #dedede;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
  }

  .pin-builder-body-container {
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    height: 575px;
    background-color: #fff;
    border-radius: 16px;

    .board-and-delete-option-container {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .delete-button-container {
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
        background-color: transparent;

        .delete-button {
          border-radius: 50%;
          height: 100%;
          width: 100%;
          border: none;
          background-color: transparent;
          padding-bottom: 5px;
          transition: background-color 0.2s;
          cursor: pointer;

          &:hover {
            background-color: #e2e2e2;
          }
        }
      }

      .board-selection-container {
        height: 45px;
        display: flex;
        flex-direction: row;
        cursor: pointer;

        .board-input-container {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row;
          cursor: pointer;

          .board-input {
            height: 100%;
            width: 100%;
            background-color: #efefef;
            border: none;
            border-radius: 10px 0px 0px 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
            cursor: pointer;

            .button-text {
              font-size: 16px;
              padding-left: 8px;
            }

            .btn-arrow {
              margin-right: 3px;
            }
          }

          .board-save-btn {
            height: 100%;
            width: 75px;
            border: none;
            background-color: var(--primary-color);
            color: white;
            border-radius: 0px 10px 10px 0px;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
            cursor: pointer;

            &:hover {
              background-color: var(--colorRedHovered);
            }

            &:active {
              transform: translateY(2px);
            }
          }
        }
      }
    }

    .pin-details-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      margin-top: 15px;
      align-items: flex-start;
      /* justify-content: center; */

      .upload-space-container {
        /* padding: 0px 20px; */
        padding-left: 20px;
        padding-right: 20px;
        top: 0;
        width: 100%;
        height: 100%;
        position: relative;

        .image-output {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 8px;

          .trash-btn {
            position: absolute;
            top: 40%;
            left: 20px;
            border-radius: 50%;
            height: 48px;
            width: 48px;
            border: none;
            background-color: #efefef;
            padding: 4px;

            &:hover .delete-tooltip {
              visibility: visible;
            }

            .delete-tooltip {
              visibility: hidden;
              width: 80px;
              background-color: #111;
              color: #fff;
              text-align: center;
              border-radius: 6px;
              padding: 5px 0;
              position: absolute;
              z-index: 1;
              left: -15px;
              top: 50px;
              font-size: 12px;
            }

            .trash-btn-image-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              border-radius: 50%;

              &:hover {
                background-color: #e2e2e2;
              }
            }
          }

          .obj {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
            overflow: hidden;
          }
        }

        .pin-image-upload-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: #efefef;
          border-radius: 16px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: auto;

          .upload-container-space-controller {
            margin: auto;
            border: 2px dashed #dedede;
            height: 95%;
            width: 90%;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .upload-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              cursor: pointer;

              .upload-img {
                width: 35px;
                margin-bottom: 20px;
                margin-top: 190px;
                cursor: pointer;
              }

              .label-text {
                width: 225px;
                font-size: 16px;
                word-wrap: break-word;
                word-break: break-word;
                text-align: center;
                margin-bottom: 125px;
              }
            }

            .info-text {
              text-align: center;
              font-size: 14px;
              word-wrap: break-word;
              word-break: break-word;
              width: 225px;
              color: #767676;
            }
          }
        }
      }

      .pin-information-container {
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        /* width: 510px;
        height: 420px; */
        width: 100%;
        height: 100%;

        .container-space-controller {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .pin-title-container {
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .title-input {
              width: 100%;
              height: 50px;
              border: none;
              outline: none;
              font-size: 38px;
              font-weight: bold;
              cursor: text;
              margin-bottom: 5px;
            }
          }

          .user-info-container {
            width: 100%;
            height: 48px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 20px 30px 20px 20px;
            margin-top: 15px;

            .profile-img-container {
              width: 48px;
              height: 48px;
              border-radius: 50%;
              overflow: hidden;
              background-color: #efefef;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 7px;

              img {
                width: 12px;
              }
            }

            .user-info-name {
              .user-info-name-text {
                font-size: 15px;
                font-weight: bold;
              }
            }
          }

          .pin-description-container {
            width: 100%;
            height: 80px;

            .pin-description {
              width: 100%;
              height: 100%;
              border: none;
              outline: none;
              font-size: 16px;
              user-select: text;
            }
          }

          .category-container {
            width: 100%;
            height: 48px;
            margin-top: 20px;

            .category-btn {
              border-radius: 16px;
              height: 35px;
              border: none;
              font-weight: bold;
              font-size: 16px;
              padding-left: 10px;
              padding-right: 10px;
              cursor: pointer;
              transition: background-color 0.2s;

              &:hover {
                background-color: #e2e2e2;
              }
            }

            .category-input {
              width: 100%;
              height: 100%;
              border: none;
              outline: none;
              font-size: 16px;
              user-select: text;
            }
          }
        }
      }
    }
  }
`;
