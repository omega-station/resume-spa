import { css } from '@emotion/core';
import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { getRGBA } from '../../../utility';
import { color, viewport } from '../../../utility/constant';
import { boxShadow, defaults, padding, transition } from '../../../utility/mixin';
import { animListItem, animSlideUp } from '../../../utility/mixin/anim';

WebFont.load({
  google: {
    families: ['Teko:300,400,500,600'],
  },
});

export const anchor = css`
  a {
    display: inline-block;
    color: ${color.red.medium};
    font-size: 1em;
    line-height: 0.9em;

    &:after {
      ${transition('transform', 200)};
      content: '';
      display: block;
      border-bottom: 2px solid ${color.red.medium};
      transform: scaleX(0);
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }
`;

const callout = {
  defaults: css`
    ${boxShadow(0, 1, 4, 0, 0.2)};
    ${transition('transform', 400)};
    margin: 0;
    padding: 10px;
    background-color: ${color.grey.light};
    border-radius: 5px;
    overflow: hidden;

    @media (min-width: ${viewport.mobile[2]}) {
      padding: 15px 20px;
    }

    &:hover {
      transform: scale(1.02) translateY(0);
    }
  `,
  margin: '30px',
};

const StyledPage = styled.div`
  ${defaults()};
  min-height: 100%;

  header,
  footer,
  main {
    width: 100%;

    * {
      font-family: Teko, sans-serif;
      font-size: 1.6rem;
    }

    div,
    section {
      margin: 0 auto;
    }
  }

  main {
    ${padding(['4.5%', '40px'], null, ['4.5%', '60px'])};
    min-height: 100%;
    background-color: ${color.grey.light};

    section {
      ${animSlideUp()};
      ${boxShadow(0, 2, 8, 0, 0.05)};
      padding: 4.5%;
      background-color: ${color.white};
      border-radius: 10px;

      &:not(:first-of-type) {
        margin-top: 4.5%;
      }

      @media (min-width: ${viewport.tablet.landscape[0]}) {
        padding: 40px;

        &:not(:first-of-type) {
          margin-top: 40px;
        }
      }

      > div {
        justify-content: center;
      }

      > h2 {
        position: relative;
        margin: 0 0 8px;

        span {
          display: inline-block;
          font-size: 2.3rem;
          font-weight: 500;
          line-height: 1em;
          color: ${color.black};

          &:last-of-type {
            position: absolute;
            top: 0;
            left: 0;
            color: ${color.red.medium};
            opacity: 0;
            z-index: 100;
          }
        }

        @media (min-width: ${viewport.tablet.portrait[1]}) {
          margin: 0 0 20px;
          margin: 0 0 15px;

          span {
            font-size: 2.8rem;
          }
        }
      }

      p {
        ${anchor};
        width: 100%;
        font-size: 1.5rem;
        line-height: 1.2em;

        &:not(:last-of-type) {
          margin: 0 0 12px;
        }

        @media (min-width: ${viewport.tablet.portrait[1]}) {
          &:not(:last-of-type) {
            margin: 0 0 20px;
          }
        }
      }

      &:nth-of-type(1).waypoint > h2 span {
        &:first-of-type {
          opacity: 0 !important;
        }
        &:last-of-type {
          opacity: 1 !important;
        }
      }

      &:nth-of-type(1) {
        > div {
          div {
            margin: 0 0 calc(${callout.margin} / 1.5);

            p {
              line-height: 1.3em;
            }

            @media (min-width: ${viewport.tablet.portrait[1]}) {
              margin: 0 0 ${callout.margin};

              p {
                font-size: 2rem;
                line-height: 1.2em;
              }
            }
          }

          ul {
            display: flex;
            flex-direction: column;

            @media (min-width: ${viewport.tablet.portrait[1]}) {
              flex-direction: row;
              flex-wrap: wrap;
              margin: -${callout.margin} 0 0 -${callout.margin};

              li {
                width: calc(50% - ${callout.margin}) !important;
                margin: ${callout.margin} 0 0 ${callout.margin} !important;
              }
            }

            li {
              ${callout.defaults};
              width: 100%;
              padding: 0;

              &:not(:first-of-type) {
                margin: 12px 0 0;
              }

              > span {
                width: 100%;
                padding: 20px 30px;

                &:last-of-type {
                  line-height: 1.2em;

                  span {
                    font-size: 1.6rem;
                  }

                  @media (min-width: ${viewport.tablet.portrait[1]}) {
                    span {
                      font-size: 1.8rem;
                    }
                  }

                  @media (min-width: ${viewport.desktop[3]}) {
                    padding-right: 100px;
                  }
                }

                &.item-icon {
                  width: 0;
                  margin: 0;
                  padding-right: 0;
                  opacity: 0;
                  color: ${color.green.medium};
                  font-size: 2.3rem;
                  filter: drop-shadow(0 1px 1px ${getRGBA(color.black, 0.5)});

                  svg {
                    font-size: 1.5em;
                  }
                }
              }
            }
          }
        }

        &.waypoint ul {
          ${animListItem('about', 4, '35%')};

          @media (min-width: ${viewport.tablet.portrait[1]}) {
            ${animListItem('about', 4, '25%')};
          }

          @media (min-width: ${viewport.desktop[0]}) {
            ${animListItem('about', 4, '20%')};
          }
        }
      }

      &:nth-of-type(2) {
        > div {
          display: flex;
          flex-direction: column;

          @media (min-width: ${viewport.tablet.landscape[0]}) {
            flex-direction: row;
          }

          .skillset {
            ${callout.defaults};
            width: 100%;

            @media (min-width: ${viewport.tablet.landscape[0]}) {
              width: 50%;

              &:first-of-type {
                order: 0 !important;
                margin: 0 ${callout.margin} 0 0 !important;
              }
            }

            &:first-of-type {
              order: 1;
              margin: calc(${callout.margin} / 2) 0 0;

              > div {
                span {
                  font-size: 1.3rem;

                  &:first-of-type {
                    font-size: 1.25rem;
                    min-width: 115px;
                    color: ${color.red.dark};
                  }

                  @media (min-width: ${viewport.tablet.portrait[1]}) {
                    font-size: 1.5rem;

                    &:first-of-type {
                      min-width: 140px;
                    }
                  }
                }
              }
            }

            &:last-of-type {
              padding-bottom: 0;
              display: flex;
              flex-wrap: wrap;

              > div {
                margin: 0;
                flex-basis: 50%;

                @media (min-width: ${viewport.mobile[2]}) {
                  flex-basis: 33.33%;
                }

                @media (min-width: ${viewport.mobile[3]}) {
                  flex-basis: 25%;
                }

                @media (min-width: ${viewport.tablet.portrait[1]}) {
                  flex-basis: 20%;
                }

                @media (min-width: ${viewport.tablet.landscape[0]}) {
                  flex-basis: 33.33%;
                }

                @media (min-width: ${viewport.desktop[1]}) {
                  flex-basis: 25%;
                }

                @media (min-width: ${viewport.desktop[3]}) {
                  flex-basis: 20%;
                }
              }
            }
          }
        }
      }

      &:nth-of-type(3),
      &:nth-of-type(4) {
        > div {
          display: flex;
          flex-direction: column;

          .history {
            ${callout.defaults};
            width: 100%;

            &:not(:first-of-type) {
              margin: calc(${callout.margin} / 2) 0 0;
            }

            > div {
              &:first-of-type {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                span {
                  color: ${color.red.dark};

                  &:first-of-type {
                    display: flex;
                    flex-wrap: wrap;
                  }
                }
              }

              @media (max-width: ${viewport.tablet.portrait[1]}) {
                &:first-of-type {
                  margin: 0 0 5px;
                }

                span {
                  font-size: 1.3rem;
                  line-height: 1.25em;
                }
              }
            }

            > ul {
              &:first-of-type {
                margin: 8px 0 12px;
                padding: 0 0 0 32px;
                list-style: disc;

                + ul {
                  padding: 0 0 0 10px;
                }
              }

              li {
                line-height: 1.2em;

                @media (max-width: ${viewport.tablet.portrait[1]}) {
                  &,
                  span {
                    font-size: 1.3rem !important;
                  }
                }
              }
            }
          }
        }
      }

      &:nth-of-type(3) {
        > div {
          .history {
            div:last-of-type {
              @media (max-width: ${viewport.tablet.portrait[1]}) {
                line-height: 1em;
              }
            }
          }

          @media (min-width: ${viewport.tablet.portrait[1]}) {
            flex-direction: row;
            flex-wrap: wrap;
            margin: -${callout.margin} 0 0 -${callout.margin};

            .history {
              width: calc(50% - ${callout.margin});
              margin: ${callout.margin} 0 0 ${callout.margin} !important;
            }
          }
        }
      }

      &:nth-of-type(4) {
        > div {
          @media (min-width: ${viewport.desktop[0]}) {
            flex-direction: row;

            .history {
              width: 33.33%;

              &:not(:first-of-type) {
                margin: 0 0 0 ${callout.margin} !important;
              }
            }
          }

          .history {
            > div {
              &:first-of-type {
                span {
                  white-space: normal;

                  &:first-of-type {
                    max-width: 95%;

                    span {
                      margin: 0;

                      &:not(:last-of-type) {
                        margin: 0 5px 0 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      &:nth-of-type(5) {
        > div {
          > div {
            margin: 0 0 25px;
          }

          > ul {
            display: flex;
            flex-wrap: wrap;

            @media (min-width: ${viewport.tablet.portrait[0]}) {
              margin: -${callout.margin} 0 0 -${callout.margin};
            }

            li {
              ${callout.defaults};
              width: 100%;
              min-height: 96px;
              padding: 0 !important;

              @media (min-width: ${viewport.tablet.portrait[0]}) {
                width: calc(50% - ${callout.margin});
                margin: ${callout.margin} 0 0 ${callout.margin} !important;
              }

              @media (min-width: ${viewport.desktop[0]}) {
                min-height: 149px;
                width: calc(33.33% - ${callout.margin});
              }

              &:not(:first-of-type) {
                margin: 12px 0 0;
              }

              &:nth-of-type(4),
              &:nth-of-type(5),
              &:nth-of-type(6) {
                .item-icon svg {
                  font-size: 3.4rem;
                }
              }

              > span {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
                padding: 10px 20px;

                > span {
                  font-size: 1.5rem;
                  line-height: 1.2em;
                }

                @media (min-width: ${viewport.tablet.portrait[0]}) {
                  padding: 15px 30px;

                  > span {
                    font-size: 1.75rem;
                  }
                }

                @media (min-width: ${viewport.desktop[0]}) {
                  padding: 25px 40px;
                }

                &.item-icon {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  overflow: hidden;
                  width: 0;
                  margin: 0;
                  padding: 0;
                  color: ${color.white};
                  background-color: ${color.red.medium};

                  svg {
                    margin: -2px 0 0;
                    font-size: 3rem;
                    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.5));
                  }
                }
              }
            }
          }
        }

        &.waypoint ul {
          ${animListItem('interests', 6, '70%', 600, 300, false)};
        }
      }

      &:nth-of-type(6) {
        overflow: hidden;

        > div {
          position: relative;
          perspective: 10000px;

          > a {
            ${boxShadow(0, 0, 3, 0, 0.1)};
            display: none;
            position: absolute;
            top: -50px;
            right: 40px;
            transform: rotateZ(20deg);
            z-index: -1;

            @media (min-width: ${viewport.mobile[3]}) {
              display: block;
            }

            img {
              width: 240px;
            }
          }
        }

        &.waypoint > div > a {
          animation: anim-resume 1200ms 800ms ease-in-out forwards;

          @media (min-width: ${viewport.desktop[0]}) {
            @keyframes anim-resume {
              to {
                top: 60px;
                right: 160px;
                transform: rotateZ(-25deg) scale(2);
              }
            }
          }

          @media (min-width: ${viewport.desktop[2]}) {
            @keyframes anim-resume {
              to {
                top: 100px;
                right: 180px;
                transform: rotateZ(-25deg) scale(2.66);
              }
            }
          }

          @media (min-width: ${viewport.desktop[3]}) {
            @keyframes anim-resume {
              to {
                top: 180px;
                right: 200px;
                transform: rotateZ(-25deg) scale(3.33);
              }
            }
          }

          @media (min-width: ${viewport.desktop[4]}) {
            @keyframes anim-resume {
              to {
                top: 250px;
                right: 310px;
                transform: rotateZ(-25deg) scale(4);
              }
            }
          }
        }
      }

      &:nth-of-type(7) {
      }
    }
  }
`;

export default StyledPage;
