import styled from "styled-components";

export const SearchSuggestionsStyles = styled.div`
  max-width: 832px;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;

  .search-suggestion-container {
    box-sizing: border-box;
    display: block;

    .search-suggestion {
      box-sizing: border-box;
      margin-bottom: 8px;
      padding-left: 4px;
      padding-right: 4px;
      display: block;

      .suggest-link {
        border-radius: 16px;
        display: block;
        width: calc(12 / 12 * 100%);
        text-decoration: none;
        cursor: pointer;
        color: inherit;
        outline: none;

        .suggestion-shape-controller {
          width: 192px;
          height: 84px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          will-change: transform;
          display: block;
          cursor: pointer;

          @media screen and (max-width: 768px) {
            height: 175px;
          }

          .suggestion-image-title-container {
            height: 100%;
            box-sizing: border-box;
            position: relative;
            display: block;
            cursor: pointer;

            .suggestion-background-img {
              background-color: rgb(255, 255, 255);
              position: relative;
              background-size: cover;
              background-position: 50%;
              background-repeat: no-repeat;
              height: 100%;
              width: 100%;
              display: block;
              cursor: pointer;
            }

            .suggestion-title-container {
              box-sizing: border-box;
              left: 0;
              bottom: 0;
              right: 0;
              top: 0;
              position: absolute;
              overflow: hidden;
              display: block;
              cursor: pointer;

              .suggestion-title-background {
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.4);
                box-sizing: border-box;
                display: block;
                cursor: pointer;
              }

              .suggestion-title-size-controller {
                height: 84px;
                width: 192px;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                top: 0;
                position: absolute;
                padding-left: 12px;
                padding-right: 12px;
                display: flex;
                flex-direction: row;

                .suggestion-title-space-controller {
                  flex-direction: column;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  display: flex;
                  cursor: pointer;

                  .suggestion-title-text {
                    text-align: center;
                    word-wrap: break-word;
                    font-weight: 700;
                    font-size: 16px;
                    color: #fff;
                    display: block;

                    @media screen and (max-width: 768px) {
                      margin-top: 150px;
                      font-size: 21px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
