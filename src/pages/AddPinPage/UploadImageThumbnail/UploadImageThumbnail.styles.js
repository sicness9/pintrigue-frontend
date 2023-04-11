import styled from "styled-components";

export const ThumbnailStyles = styled.div`
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
        cursor: pointer;

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
`;
