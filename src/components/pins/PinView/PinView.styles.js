import styled from "styled-components";

export const PinViewContainer = styled.div`
  top: 80px;
  box-sizing: border-box;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  overflow: auto;
`;

export const PinViewContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .pin-image-view-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .pin-image-view-header {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .pin-header-back-btn {
        padding: 0px 10px;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        flex-direction: row;

        .back-btn {
          padding: 10px;
          cursor: pointer;
          border: none;
          border-radius: 50%;
          background-color: transparent;

          &:hover {
            background-color: #e2e2e2;
          }

          .back-btn-image {
            width: 20px;
          }
        }
      }

      .pin-fullscreen-btn {
        padding: 0px 10px;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        flex-direction: row;

        .fullscreen-btn {
          padding: 10px;
          cursor: pointer;
          border: none;
          border-radius: 50%;
          background-color: transparent;

          &:hover {
            background-color: #e2e2e2;
          }

          .resize-btn-image {
            width: 20px;
          }
        }
      }
    }

    .pin-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;

      .pin-space-controller {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;

        .pin-shape-controller {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;

          .pin {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

  .pin-other-content-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 32px;
    padding-right: 32px;
    background-color: white;

    .pin-other-content-header-container {
      width: 100%;
      height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 32px;
      padding-bottom: 25px;

      .like-and-menu-btns-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 48px;
        gap: 10px;

        .menu-btn-container {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #e2e2e2;
          }

          .menu-btn {
            height: 100%;
            padding-left: 10px;
            padding-right: 10px;
            background-color: transparent;
            border: none;
            border-radius: 50%;
            padding-bottom: 5px;

            &:hover {
              background-color: #e2e2e2;
            }

            .like-btn-img {
              width: 100%;
            }
          }
        }

        .pin-like-btn-container {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #e2e2e2;
          }

          .pin-like-btn {
            height: 100%;
            padding-left: 10px;
            padding-right: 10px;
            background-color: transparent;
            border: none;
            border-radius: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            &:hover {
              background-color: #e2e2e2;
            }

            .like-btn-img {
              width: 22px;
            }
          }
        }
      }

      .save-button-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        cursor: pointer;

        .save-button {
          height: 100%;
          padding: 0px 20px 0px 20px;
          background-color: var(--primary-color);
          border: none;
          border-radius: 24px;
          color: white;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            background-color: var(--colorRedHovered);
          }

          .save-btn-text {
            font-size: 15px;
            font-weight: bold;
          }
        }
      }
    }

    .pin-likes-container {
      width: 100%;
      height: 32px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      .like-img-container {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .pins-likes-image {
          width: 22px;
        }
      }

      .pin-like-details-container {
        height: 100%;
      }
    }

    .pin-title-container {
      width: 100%;
      height: 48px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      .pin-title-text {
        font-size: 36px;
        font-weight: bold;
        color: #111111;
      }
    }

    .pin-publish-info-container {
      width: 100%;
      height: 21px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 17px;

      .publish-info-text {
        font-size: 16px;
        color: #767676;
      }
    }

    .pin-comments-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .pin-owner-info-container {
        width: 100%;
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;

        .pin-owner-profile-container {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;

          .pin-owner-image-container {
            height: 100%;
            width: 48px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-right: 5px;

            .user-profile-image {
              width: 100%;
              border-radius: 50%;
              overflow: hidden;
            }
          }

          .pin-owner-name-stats-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            .pin-owner-name-container {
              height: 19px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;

              .owner-name-text {
                font-size: 15px;
                font-weight: bold;
              }
            }

            .pin-owner-stats-container {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;

              .owner-stats-text {
                height: 19px;
                font-size: 14px;
              }
            }
          }
        }

        .follow-btn-container {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .follow-btn {
            height: 100%;
            padding: 0px 16px 0px 16px;
            background-color: #e2e2e2;
            border: none;
            border-radius: 24px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .follow-btn-text {
              font-size: 15px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;
