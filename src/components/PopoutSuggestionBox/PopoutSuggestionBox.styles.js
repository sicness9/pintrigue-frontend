import styled from "styled-components";

export const PopoutSuggestionBoxStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 500;
  box-sizing: border-box;
  left: 0;
  top: 80px;
  right: 0;
  bottom: 0;
  position: fixed;
  display: block;

  .suggestion-box-container {
    border-radius: 0px 0px 16px 16px;
    min-width: 408px;
    top: 0px;
    width: 79%;
    box-sizing: border-box;
    left: 225px;
    position: absolute;
    overflow: hidden;
    display: block;

    @media screen and (max-width: 768px) {
      left: 50px;
    }

    .suggestion-box-size-controller {
      max-height: 449px;
      box-sizing: content-box;
      overflow-y: scroll;
      width: calc(100% + 17px);
      display: block;

      .suggestion-box-space-controller {
        border-radius: 0px 0px 16px 16px;
        padding-bottom: 16px;
        padding-top: 12px;
        width: calc(100% - 17px);
        box-sizing: border-box;
        display: block;
        background-color: #fff;

        .suggestion-box-header-container {
          box-sizing: border-box;
          display: block;

          .header-title-container {
            margin-left: 20px;
            margin-right: 4px;
            align-items: center;
            box-sizing: border-box;
            padding-bottom: 8px;
            padding-top: 8px;
            margin-top: 8px;
            display: flex;
            flex-direction: row;

            .header-title-text {
              -webkit-line-clamp: 1;
              text-align: left;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              max-width: 100%;
              overflow: hidden;
              word-break: break-word;
              word-wrap: break-word;
              font-weight: 400;
            }
          }

          .suggestion-result-container {
            max-width: 832px;
            flex-wrap: wrap;
            box-sizing: border-box;
            margin-bottom: 20px;
            padding-left: 16px;
            padding-right: 16px;
            display: flex;
            flex-direction: row;
          }
        }
      }
    }
  }
`;
