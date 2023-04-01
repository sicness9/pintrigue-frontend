import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  margin-left: 10px;
  /* width: 100%; */
  height: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  height: 48px;
  min-width: 60px;
  cursor: pointer;
  align-items: center;

  .btn-container {
    display: flex;
    background-color: ${(props) => (props.open ? "#111" : "#fff")};
    padding: 12px;
    border-radius: 30px;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => (props.open ? "none" : "#e2e2e2")};
    }

    .home-btn {
      /* background-color: ${(props) => (props.open ? "#111" : "#fff")}; */
      background-color: transparent;
      color: ${(props) => (props.open ? "#fff" : "#111")};
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      border: none;
      transition: background-color 0.2s ease-in-out;
      text-decoration: none;

      a:link {
        text-decoration: none;
      }
    }

    &:hover {
      background-color: ${(props) => (props.open ? "none" : "#e2e2e2")};
    }

    img {
      margin-top: 3px;
      cursor: pointer;
    }
  }
`;

export const PopoutContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 20px;

  .popout-shape-controller {
    position: relative;
    min-width: 175px;
    min-height: 80px;
    border-radius: 14px;
    background-color: #fff;
    display: block;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    .popout-space-controller {
      position: relative;
      height: 100%;
      width: 100%;
      display: block;
      box-sizing: border-box;

      .popout-options-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px;
        gap: 5px;

        .popout-home-option-container {
          display: block;
          width: 100%;

          a.active {
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: flex-start;
            border: none;
            border-radius: 6px;
            align-items: center;
            transition: background-color 0.2s;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;

            .popout-option-text {
              font-size: 16px;
              font-weight: 500;
              padding-left: 5px;
              display: flex;
              align-items: center;
              text-decoration: none;

              a.active {
                align-items: center;
              }

              .nav-checkmark {
                margin-left: 75px;
                height: 16px;
              }
            }
          }

          .home-btn {
            background-color: #fff;
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: flex-start;
            border: none;
            border-radius: 6px;
            align-items: center;
            transition: background-color 0.2s;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;

            &:hover {
              background-color: #efefef;
            }

            .popout-option-text {
              font-size: 16px;
              font-weight: 500;
              padding-left: 5px;
              display: flex;
              align-items: center;
              text-decoration: none;
            }
          }
        }

        .popout-today-option-container {
          display: block;
          width: 100%;

          .today-link {
            text-decoration: none;

            .today-btn {
              background-color: #fff;
              width: 100%;
              height: 35px;
              display: flex;
              justify-content: flex-start;
              border: none;
              border-radius: 6px;
              align-items: center;
              transition: background-color 0.2s;
              cursor: pointer;

              &:hover {
                background-color: #efefef;
              }

              .popout-option-text {
                font-size: 16px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
`;
