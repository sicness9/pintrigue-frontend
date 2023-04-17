import styled from "styled-components";

export const CommentSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 17px;

  .comments-header-container {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    .number-of-comments {
      font-size: 20px;
      font-weight: bold;
    }

    .hide-n-show-button-container {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      &:hover {
        background-color: #e2e2e2;
      }

      .hide-n-show-button {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 10px;

        &:hover {
          background-color: #e2e2e2;
        }

        .hide-comment-image {
          width: 18px;
          cursor: pointer;

          &:hover {
            background-color: #e2e2e2;
          }
        }
      }
    }
  }

  .comments-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .comment {
      width: 100%;
      min-height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 10px;

      .poster_image {
        /* width: 100%; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        border-radius: 50%;

        .poster_image_pic {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          object-fit: cover;
        }
      }

      .comment-message {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .commenter-name {
          font-weight: bold;
          margin-right: 5px;
        }
      }
    }
  }
`;
