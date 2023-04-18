import styled from "styled-components";

export const CommentSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

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
      width: 40px;
      top: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      &:hover {
        background-color: var(--greyHover);
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
          width: 16px;
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
    height: 425px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;

    @media screen and (max-width: 1250px) {
      height: 250px;
    }

    .comment {
      width: 100%;
      min-height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 10px;

      .poster_image {
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
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;

        .comment-user-container {
        }

        .commenter-name {
          font-weight: bold;
          margin-right: 5px;
        }

        .comment-detail-functions {
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;

          .post-date {
            font-size: 14px;
            color: grey;
          }

          .reply-btn {
            border: none;
            background-color: transparent;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .reply-btn-text {
              font-weight: 600;
              color: grey;
            }
          }

          .comment-like-btn {
            border: none;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 3px;
            cursor: pointer;

            img {
              width: 15px;
            }

            .comment-likes {
              font-size: 14px;
              color: grey;
            }
          }
        }
      }
    }
  }
`;
