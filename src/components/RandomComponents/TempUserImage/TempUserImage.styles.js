import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  display: block;

  .user-image-shape-controller {
    padding-bottom: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;
    display: block;
    background-color: #efefef;

    .user-image-space-controller {
      justify-content: center;
      box-sizing: border-box;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      position: absolute;
      display: flex;
      flex-direction: row;
      cursor: pointer;

      .user-initial {
        font-weight: 700;
      }
    }
  }
`;
