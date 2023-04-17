import styled from "styled-components";

export const PinDetailsStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
  background-color: white;
  padding-bottom: 10px;
  overflow-y: auto;

  @media screen and (max-width: 1250px) {
    width: 90%;
  }

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
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        &:hover {
          background-color: var(--greyHover);
        }

        .menu-btn {
          height: 100%;
          padding-left: 10px;
          padding-right: 10px;
          background-color: transparent;
          border: none;
          border-radius: 50%;
          padding-bottom: 5px;
          cursor: pointer;

          &:hover {
            background-color: var(--greyHover);
          }

          .like-btn-img {
            width: 100%;
          }
        }
      }

      .pin-like-btn-container {
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        &:hover {
          background-color: var(--greyHover);
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
          cursor: pointer;

          &:hover {
            background-color: var(--greyHover);
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

  .pin-details-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;

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
          background-color: var(--standardGrey);
          border: none;
          border-radius: 24px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            background-color: var(--colorGreyHovered);
          }

          .follow-btn-text {
            font-size: 15px;
            font-weight: bold;
          }
        }
      }
    }

    .pin-comments-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
    }
  }
`;
