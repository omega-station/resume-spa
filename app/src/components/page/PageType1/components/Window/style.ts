import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { color } from '../../../../../utility/constant';
import { backgroundStriped } from '../../../../../utility/mixin';
import { StylesProps as Props } from './definition';

const StyledWindow = styled.div<Props>`
  ${props => css`
    ${backgroundStriped('black')};
    position: absolute;
    top: ${`${props.top}px`};
    left: ${`${props.left}px`};
    width: ${`${props.width}px`};
    height: ${`${props.height}px`};
    background-color: black;
    border: 1px double ${color.core.black};
    font-size: 1.15rem;
    line-height: 1.5em;
    z-index: 1000;

    header {
      ${backgroundStriped('light-green')};
      position: relative;
      top: 1px;
      left: 1px;
      width: calc(${props.width}px - 2px);
      height: 35px;
      margin: -1px 0 0 -1px;
      padding: 0 0 0 20px;
      color: ${color.core.black};
      font-size: 1.4em;
      line-height: 35px;
    }

    main {
      overflow: scroll;
      height: calc(100% - 35px);
      padding: 0;
      border: 1px double ${color.pagetype[1].green.dark2};

      .scrollbar-container {
        padding: 20px 25px 20px;

        .ps__rail-y {
          background-color: ${color.pagetype[1].green.dark2};

          &,
          div {
            border-radius: 0;
            width: 14px;
          }

          .ps__thumb-y {
            right: 0;
            background-color: ${color.pagetype[1].green.medium};
          }
        }

        > span > span {
          a {
            padding: 0 4px;
            background-color: ${getRGBA(color.pagetype[1].green.light, 0.7)};
            border: 0;
            color: ${color.core.black};
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

            &:hover {
              background-color: ${getRGBA(color.pagetype[1].green.light, 0.5)};
              color: ${getRGBA(color.pagetype[1].green.light, 0.7)};
            }
          }

          & > p:first-of-type {
            color: ${color.pagetype[1].green.light};
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
                  color: ${color.pagetype[1].green.light};
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
                  color: ${color.pagetype[1].green.light};
                }
              }

              > span {
                display: block;

                &:first-of-type {
                  width: 33.33%;
                  color: ${color.pagetype[1].green.light};
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
  `}
`;

export default StyledWindow;
