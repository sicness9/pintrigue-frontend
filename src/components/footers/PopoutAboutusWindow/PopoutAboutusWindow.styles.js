import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
`;

export const PopoutWindowContent = styled.div`
  display: block;
  top: 50px;
  left: -250px;
  position: absolute;
  z-index: 700;

  .popout-window-space-controller {
    min-height: 40px;
    min-width: 180px;
    outline: none;
    display: block;

    .aboutus-btn-container {
      min-height: 40px;
      min-width: 250px;
      display: block;
      padding: 5px;
      position: relative;

      .aboutus-btn {
        width: 100%;
        padding: 9px;
        margin: 8px;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        border: 1px solid #efefef;
        border-radius: 16px;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: #ddd;
        }

        .aboutus-text-container {
          margin-left: 5px;
          font-size: 15px;
          font-weight: 700;
          align-self: center;
          .aboutus-text {
          }
        }
      }
    }
  }
`;
