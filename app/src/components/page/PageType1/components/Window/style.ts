import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { viewport, color } from 'utility/constant';
import { backgroundStriped } from 'utility/mixin';
import { StylesProps as Props } from './definition';

const StyledWindow = styled.div<Props>`
  ${props => css`
    ${backgroundStriped('black')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: black;
    border: 1px double ${color.black};
    font-size: 1rem;
    line-height: 1.5em;
    z-index: 1000;

    @media (min-width: ${viewport.tablet.landscape[0]}) {
      position: absolute;
      top: ${`${props.window.top}px`};
      left: ${`${props.window.left}px`};
      width: ${`${props.window.width}px`};
      height: ${`${props.window.height}px`};
      min-height: 0;
      font-size: 1.15rem;
    }

    header {
      ${backgroundStriped('light-green')};
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: 1px;
      left: 1px;
      width: 100%;
      height: 35px;
      margin: -1px 0 0 -1px;
      padding: 0 12px;
      line-height: 35px;

      span,
      svg path {
        color: ${color.black};
      }

      span {
        font-size: 1.7em;
      }

      svg {
        cursor: pointer;
        font-size: 1.7em;
      }

      @media (min-width: ${viewport.tablet.landscape[0]}) {
        width: calc(${props.window.width}px - 2px);
        padding: 0 15px 0 20px;

        span {
          font-size: 1.4em;
        }
      }
    }

    main {
      overflow: scroll;
      height: calc(100% - 35px);
      min-height: calc(100% - 35px);
      padding: 0;
      border: 1px double ${color.green.dark2};

      @media (min-width: ${viewport.tablet.landscape[0]}) {
        min-height: 0;
      }

      .scrollbar-container {
        padding: 12px;

        @media (min-width: ${viewport.tablet.landscape[0]}) {
          padding: 20px;
        }

        .ps__rail-y {
          background-color: ${color.green.dark2};

          &,
          div {
            border-radius: 0;
            width: 14px;
          }

          .ps__thumb-y {
            right: 0;
            background-color: ${color.green.medium};
          }
        }

        > span > span {
          a {
            padding: 0 4px;
            background-color: ${getRGBA(color.green.light, 0.6)};
            border: 0;
            color: ${color.black};
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

            &:hover {
              background-color: ${color.green.light};
            }
          }

          & > p:first-of-type {
            color: ${color.green.light};
          }

          p {
            margin: 0 0 15px;
          }

          ul {
            list-style: disc;
            padding: 0 0 0 20px;

            li {
              padding: 0 0 0 5px;
            }
          }

          .history {
            &:not(:first-of-type) {
              margin: 25px 0 0;
            }

            > div {
              &:first-of-type {
                display: flex;
                flex-direction: column;
                margin: 0 0 10px;

                > span:first-of-type span {
                  color: ${color.green.light};
                }
              }
            }

            > ul {
              &:first-of-type {
                margin: 5px 0 12px;

                & + ul {
                  list-style: none;

                  &,
                  li {
                    padding: 0;
                  }

                  li {
                    display: flex;
                    flex-direction: column;
                    margin: 0 0 10px;

                    @media (min-width: ${viewport.mobile[4]}) {
                      flex-direction: row;
                      margin: 0;

                      span {
                        &:first-of-type {
                          width: 20%;
                        }

                        &:last-of-type {
                          width: 80%;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          .skillset {
            &:not(:first-of-type) {
              margin: 30px 0 0;
            }

            > div {
              display: flex;

              &.header {
                & + .header {
                  margin: -8px 0 0;
                }

                span {
                  color: ${color.green.light};
                }
              }

              > span {
                display: block;

                &:first-of-type {
                  width: 45%;
                  color: ${color.green.light};
                }

                &:last-of-type {
                  width: 55%;
                  word-break: break-word;
                }

                @media (min-width: ${viewport.mobile[4]}) {
                  &:first-of-type {
                    width: 33.33%;
                  }

                  &:last-of-type {
                    width: 66.66%;
                  }
                }
              }
            }
          }
        }
      }
    }
  `}
`;

export default StyledWindow;
