import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 80px;
  display: flex;
  flex-direction: column;

  .settings-page-container {
    margin-top: 80px;
    padding: 15px;
    display: flex;
    flex-direction: column;

    .manage-photo-container {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;

      .photo-n-btn-container {
        height: 120px;
        width: 120px;
      }
    }

    .user-info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;

      .user-handle {
        font-size: 40px;
        color: #5f5f5f;
        padding: 5px;
      }

      .follower-count {
        padding: 5px;
      }
    }

    .share-edit-container {
      display: flex;
      justify-content: center;
      padding: 5px;
      width: 100%;

      button {
        padding: 0px 13px 0px 13px;
        border-radius: 30px;
        border: none;
        margin-right: 5px;
        height: 45px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background-color: var(--greyHover);
        }

        &:active {
          transform: translateY(2px);
        }
      }
    }

    .user-pin-mgmt-container {
      width: 100%;
      height: 61px;
      padding: 5px;
      margin-top: 30px;

      .pin-mgmt-nav {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .created-btn-container {
          .under-btn {
            border-bottom: 3px solid black;
            width: 60px;
            margin-left: 5px;
            border-radius: 2px;
            margin-top: 5px;
          }
        }

        .saved-btn-container {
          .under-btn {
            border-bottom: 3px solid black;
            width: 45px;
            margin-left: 5px;
            border-radius: 2px;
            margin-top: 5px;
          }
        }

        button {
          border: none;
          margin-right: 15px;
          height: 30px;
          background-color: transparent;
          border-radius: 7px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            background-color: var(--greyHover);
          }
        }
      }
    }
  }
`;
