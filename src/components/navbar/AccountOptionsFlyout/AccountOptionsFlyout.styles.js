import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  visibility: visible;
  top: 60px;
  right: 17px;
  position: absolute;
  display: block;
`;

export const AnimatedPopoutMenu = styled(animated.div)`
  .menu-box {
    min-height: 40px;
    min-width: 180px;
    max-height: 90vh;
    max-width: 90vw;
    outline: none;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    border-radius: 16px;
    box-sizing: border-box;
    display: block;

    .menu-contents-container {
      max-width: 360px;
      position: relative;
      min-height: 40px;
      min-width: 180px;
      max-height: 90vh;
      max-width: 90vw;
      border: none;
      border-radius: 16px;
      display: flex;
      overflow: auto;
      background-color: #fff;

      .contents-space-controller {
        margin-right: 8px;
        margin-left: 8px;
        min-height: 0;
        min-width: 0;
        margin-bottom: 8px;
        margin-top: 8px;
        flex-direction: column;
        display: flex;

        .currently-in-container {
          width: 100%;
          display: block;

          .title-container {
            box-sizing: border-box;
            padding-left: 8px;
            padding-right: 8px;
            display: flex;
            flex-direction: row;

            .currently-in-title {
              text-align: left;
              word-wrap: break-word;
              font-weight: 400;
              font-size: 12px;
              color: #111;
              display: block;
            }
          }

          .header-accountoptionsflyout-container {
            border-radius: 8px;
            width: calc(12 / 12 * 100%);
            cursor: pointer;
            display: block;

            .header-spacing-controller {
              border-radius: 8px;
              box-sizing: border-box;
              padding: 8px;
              flex-direction: column;
              display: flex;
              cursor: pointer;

              &:hover {
                background-color: #efefef;
              }

              .user-info-container {
                flex-direction: row;
                display: flex;
                margin-left: 0;
                margin-right: 0;
                cursor: pointer;

                .user-info-box {
                  flex: 1 1 auto;
                  min-height: 0;
                  min-width: 0;
                  margin-bottom: -2px;
                  margin-top: -2px;
                  flex-direction: column;
                  display: flex;
                  cursor: pointer;

                  .user-info-spacing {
                    margin-bottom: 2px;
                    margin-top: 2px;
                    display: block;
                    cursor: pointer;

                    .user-info-alignment {
                      align-items: center;
                      flex-direction: row;
                      display: flex;
                      margin-left: 0;
                      margin-right: 0;
                      cursor: pointer;

                      .user-link {
                        border-radius: 0;
                        display: block;
                        text-decoration: none;
                        outline: none;
                        color: inherit;
                        cursor: pointer;

                        .user-profile-container {
                          margin-right: 16px;
                          border-radius: 8px;
                          align-items: center;
                          box-sizing: border-box;
                          display: flex;
                          flex-direction: row;

                          .image-userinfo-containers {
                            height: 60px;
                            width: 60px;
                            margin-right: 8px;
                            border-radius: 50%;
                            flex: 0 0 auto;
                            box-sizing: border-box;
                            display: block;

                            .user-image-container {
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
                            }
                          }

                          .userinfo-title-container {
                            max-width: 176px;
                            box-sizing: border-box;
                            display: block;

                            .userinfo-users-name {
                              -webkit-line-clamp: 1;
                              text-align: left;
                              word-wrap: break-word;
                              overflow: hidden;
                              max-width: 100%;
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              font-weight: 700;
                              font-size: 16px;
                              word-break: break-word;
                            }

                            .userinfo-accounttype-container {
                              margin-top: 2px;
                              box-sizing: border-box;
                              display: block;

                              .userinfo-account-type {
                                -webkit-line-clamp: 1;
                                text-align: left;
                                word-wrap: break-word;
                                overflow: hidden;
                                max-width: 100%;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                font-weight: 400;
                                font-size: 14px;
                                word-break: break-word;
                                color: #767676;
                              }
                            }

                            .userinfo-email-container {
                              margin-top: 2px;
                              box-sizing: border-box;
                              display: block;

                              .userinfo-user-email {
                                -webkit-line-clamp: 1;
                                text-align: left;
                                word-wrap: break-word;
                                overflow: hidden;
                                max-width: 100%;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                font-weight: 400;
                                font-size: 14px;
                                word-break: break-word;
                                color: #767676;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }

                .check-image-container {
                  justify-content: center;
                  align-items: center;
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  cursor: pointer;
                }
              }
            }
          }
        }

        .more-options-container {
          margin-top: 16px;
          width: 100%;
          display: block;

          .presentation {
            box-sizing: border-box;
            padding-left: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-top: 8px;
            display: flex;
            flex-direction: row;

            .title {
              text-align: left;
              word-wrap: break-word;
              font-weight: 400;
              font-size: 12px;
              color: #111;
              display: block;
            }
          }

          .menuitem-settings-container {
            border-radius: 8px;
            width: calc(12 / 12 * 100%);
            cursor: pointer;
            display: block;

            &:hover {
              background-color: #efefef;
            }

            .settings-space-controller {
              border-radius: 8px;
              box-sizing: border-box;
              padding: 8px;
              flex-direction: column;
              display: flex;
              cursor: pointer;

              .settings-link {
                border-radius: 0;
                display: block;
                text-decoration: none;
                outline: none;
                color: inherit;
                cursor: pointer;

                .settings-link-direction-controller {
                  flex-direction: row;
                  margin-left: 0;
                  margin-right: 0;
                  display: flex;
                  color: inherit;
                  cursor: pointer;

                  .settings-link-space-controller {
                    flex: 1 1 auto;
                    min-height: 0;
                    min-width: 0;
                    flex-direction: column;
                    margin-bottom: -2px;
                    margin-top: -2px;
                    display: flex;
                    color: inherit;

                    .settings-more-space-controller {
                      margin-bottom: 2px;
                      margin-top: 2px;
                      display: block;
                      color: inherit;
                      cursor: pointer;

                      .settings-link-alignment {
                        align-items: center;
                        flex-direction: row;
                        margin-left: 0;
                        margin-right: 0;
                        display: flex;
                        color: inherit;
                        cursor: pointer;

                        .settings-link-text {
                          text-align: left;
                          overflow: hidden;
                          font-weight: 700;
                          font-size: 16px;
                          cursor: pointer;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          .menuitem-logout-container {
            border-radius: 8px;
            width: calc(12 / 12 * 100%);
            cursor: pointer;
            display: block;

            &:hover {
              background-color: #efefef;
            }

            .logout-space-controller {
              border-radius: 8px;
              box-sizing: border-box;
              padding: 8px;
              flex-direction: column;
              display: flex;
              cursor: pointer;

              .logout-link {
                border-radius: 0;
                display: block;
                text-decoration: none;
                outline: none;
                color: inherit;
                cursor: pointer;

                .logout-link-direction-controller {
                  flex-direction: row;
                  margin-left: 0;
                  margin-right: 0;
                  display: flex;
                  color: inherit;
                  cursor: pointer;

                  .logout-link-space-controller {
                    flex: 1 1 auto;
                    min-height: 0;
                    min-width: 0;
                    flex-direction: column;
                    margin-bottom: -2px;
                    margin-top: -2px;
                    display: flex;
                    color: inherit;

                    .logout-more-space-controller {
                      margin-bottom: 2px;
                      margin-top: 2px;
                      display: block;
                      color: inherit;
                      cursor: pointer;

                      .logout-link-alignment {
                        align-items: center;
                        flex-direction: row;
                        margin-left: 0;
                        margin-right: 0;
                        display: flex;
                        color: inherit;
                        cursor: pointer;

                        .logout-link-text {
                          -webkit-line-clamp: 1;
                          text-align: left;
                          -webkit-box-orient: vertical;
                          display: -webkit-box;
                          overflow: hidden;
                          word-break: break-word;
                          word-wrap: break-word;
                          font-weight: 700;
                          font-size: 16px;
                          cursor: pointer;
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
  }
`;
