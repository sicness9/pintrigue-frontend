import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  z-index: 671;
  top: 0;
  position: fixed;
  display: block;
  box-sizing: border-box;
`;

export const Content = styled.nav`
  box-sizing: border-box;
  display: block;

  .header-background {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    display: block;

    .nav-container-container {
      display: block;
      box-sizing: border-box;

      .nav-space-controller-container {
        height: 80px;
        width: 100%;
        flex-direction: column;
        margin-bottom: 0;
        margin-top: 0;
        display: flex;

        .nav-bar-container {
          flex: 1 1 auto;
          min-height: 0;
          min-width: 0;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 4px;
          padding-top: 4px;
          display: flex;
          flex-direction: row;

          .nav-bar {
            display: flex;
            flex-direction: row;
            height: 56px;
            align-items: center;
            box-sizing: border-box;
            width: 100%;

            .logo-nav {
              height: 48px;
              width: 48px;
              display: flex;
              align-items: center;
            }

            .home-today-btn-container {
              display: flex;

              @media only screen and (max-width: 850px) {
                display: none;
              }

              .home-btn-container {
                height: 48px;
                min-width: 60px;
                flex: 0 0 auto;

                .nav-home-btn {
                  border-radius: 24px;
                  width: 100%;
                  cursor: pointer;
                  text-decoration: none;
                  white-space: nowrap;
                  height: 48px;
                  padding-left: 16px;
                  padding-right: 16px;
                  background-color: black;
                  color: white;
                  border: none;
                  font-size: 16px;
                  font-weight: bold;
                }
              }

              .today-btn-container {
                height: 48px;
                min-width: 60px;
                flex: 0 0 auto;

                .nav-today-btn {
                  height: 48px;
                  width: 100%;
                  border-radius: 24px;
                  cursor: pointer;
                  color: white;
                  outline: none;
                  padding-left: 16px;
                  padding-right: 16px;
                  flex: 0 0 auto;
                  white-space: nowrap;
                  border: none;
                  background-color: white;
                  color: black;
                  font-size: 16px;
                  font-weight: bold;

                  &:hover {
                    background-color: #f5f5f5;
                  }
                }
              }
            }

            .btns-container {
              align-items: center;
              display: flex;
              flex-direction: row;
              box-sizing: border-box;

              .notification-bell-container {
                position: relative;
                border-radius: 50%;
                width: 100%;
                cursor: pointer;
                display: block;
                box-sizing: border-box;

                .bell-btn {
                  height: 48px;
                  width: 48px;
                  align-items: center;
                  justify-content: center;
                  display: flex;
                  flex-direction: row;
                  cursor: pointer;
                  border: none;
                  border-radius: 50%;
                  background-color: transparent;
                  position: relative;
                  box-sizing: border-box;

                  &:hover {
                    background-color: #f5f5f5;
                  }

                  .bell-logo {
                    display: block;
                    height: 24px;
                    width: 24px;
                    overflow: hidden;
                    cursor: pointer;
                  }

                  .bell-notification-counter {
                    right: 0px;
                    top: 0px;
                    padding: 0px 3px 0px 2px;
                    height: 18px;
                    min-width: 18px;
                    border-radius: 999px;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    background-color: var(--primary-color);
                    display: flex;
                    flex-direction: row;
                    cursor: pointer;

                    .bell-notification-text {
                      text-align: center;
                      word-wrap: break-word;
                      font-weight: 700;
                      font-size: 12px;
                      color: white;
                      padding: 0px 0px 1px 1px;
                    }
                  }
                }
              }

              .notification-inbox-container {
                position: relative;
                border-radius: 50%;
                width: 100%;
                cursor: pointer;

                .inbox-btn {
                  height: 48px;
                  width: 48px;
                  align-items: center;
                  justify-content: center;
                  display: flex;
                  flex-direction: row;
                  cursor: pointer;
                  border: none;
                  border-radius: 50%;
                  background-color: transparent;

                  &:hover {
                    background-color: #f5f5f5;
                  }

                  .inbox-logo {
                    display: block;
                    height: 24px;
                    width: 24px;
                    overflow: hidden;
                    cursor: pointer;
                  }

                  .inbox-notification-counter {
                    right: 0px;
                    top: 0px;
                    padding: 0px 3px 0px 2px;
                    height: 18px;
                    min-width: 18px;
                    border-radius: 999px;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    background-color: var(--primary-color);
                    display: flex;
                    flex-direction: row;
                    cursor: pointer;

                    .inbox-notification-text {
                      text-align: center;
                      word-wrap: break-word;
                      font-weight: 700;
                      font-size: 12px;
                      color: white;
                      padding: 0px 0px 1px 1px;
                    }
                  }
                }
              }

              .user-home-container {
                box-sizing: border-box;
                display: block;
                width: 100%;

                .profile-link {
                  width: 100%;
                  border-radius: 50%;
                  text-decoration: none;
                  cursor: pointer;
                  color: white;
                  outline: none;

                  .profile-img-container {
                    height: 48px;
                    width: 48px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    display: block;

                    &:hover {
                      background-color: #efefef;
                    }

                    .profile-image-wrapper {
                      height: 100%;
                      width: 100%;
                      border-radius: 50%;
                      justify-content: center;
                      align-items: center;
                      display: flex;
                      flex-direction: row;
                      cursor: pointer;
                      color: inherit;

                      .profile-button-size-controller {
                        height: 30px;
                        width: 30px;
                        border-radius: 50%;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        flex-direction: row;
                        cursor: pointer;
                        color: inherit;

                        .profile-btn {
                          width: 24px;
                          height: 24px;
                          border-radius: 50%;
                          position: relative;
                          cursor: pointer;
                          color: inherit;
                          display: block;
                          background-color: #efefef;
                          box-sizing: border-box;

                          .img-container {
                            padding-bottom: 100%;
                            justify-content: center;
                            cursor: pointer;
                            position: absolute;
                            display: flex;
                            flex-direction: row;
                            color: inherit;
                            box-sizing: border-box;
                            left: 25%;
                            top: 25%;

                            .user-logo {
                              width: 12px;
                              height: 12px;
                              overflow: hidden;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

              .header-accounts-options-button {
                box-sizing: border-box;
                display: block;

                .accounts-options-btn {
                  border: 0;
                  outline: none;
                  border-style: none;
                  background-color: transparent;
                  padding-left: 0;
                  padding-right: 0;
                  cursor: pointer;
                  line-height: normal;
                  font-size: 100%;
                  vertical-align: middle;
                  margin: 0px;
                  border-radius: 50%;

                  .menu-space-contraoller-container {
                    border-style: none;
                    border: 0;
                    display: block;
                    cursor: pointer;
                    padding: 0;
                    background: transparent;
                    text-indent: 0;
                    text-shadow: none;
                    text-align: center;

                    .options-image-container {
                      height: 24px;
                      width: 24px;
                      border-radius: 50%;
                      justify-content: center;
                      display: flex;
                      /* background-color: transparent; */
                      cursor: pointer;

                      &:hover {
                        background-color: #efefef;
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
  }
`;
