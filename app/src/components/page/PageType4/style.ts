import { css } from '@emotion/core';
import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { color, viewport } from '../../../utility/constant';
import { boxShadow, defaults, padding, transition } from '../../../utility/mixin';
import { animListItem, animSlideIn, animSlideUp } from '../../../utility/mixin/anim';
import { getRGBA } from '../../../utility';

WebFont.load({
  google: {
    families: ['Teko:300,400,500,600'],
  },
});

export const anchor = css`
  a {
    display: inline-block;
    color: ${color.red.medium};
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
    padding: 15px 20px;
    background-color: ${color.grey.light};
    border-radius: 5px;
    overflow: hidden;

    &:hover {
      transform: scale(1.02) translateY(0);
    }
  `,
  margin: '30px',
};

const StyledPage = styled.div`
  ${defaults()};
  min-height: 100%;

  .github-corner {
    ${animSlideIn('X', 140, 500, 1000)};
  }

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

      > h2 {
        position: relative;
        margin: 0 0 20px;

        span {
          display: inline-block;
          font-size: 2.8rem;
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
      }

      p {
        ${anchor};
        margin: 0 0 15px;
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
        ul {
          display: flex;
          justify-content: space-between;
          margin: 25px 0 0;

          li {
            ${callout.defaults};
            width: 25%;
            min-height: 136px;
            padding: 20px 30px;

            &:not(:first-of-type) {
              margin: 0 0 0 ${callout.margin};
            }

            span {
              font-size: 1.7rem;
              line-height: 1.2em;

              &.item-icon {
                width: 0;
                margin: 0;
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

        &.waypoint ul {
          ${animListItem('about', 4, '50%', '30px')};
        }
      }

      &:nth-of-type(2) {
        > div {
          display: flex;
          justify-content: space-between;

          .skillset {
            ${callout.defaults};
            width: 50%;

            &:first-of-type {
              > div {
                span {
                  font-size: 1.5rem;

                  &:first-of-type {
                    color: ${color.red.dark};
                  }
                }
              }
            }

            &:last-of-type {
              margin: 0 0 0 ${callout.margin};
              display: flex;
              flex-wrap: wrap;

              > div {
                margin: 0;
                flex-basis: 20%;
              }
            }
          }
        }
      }

      &:nth-of-type(3),
      &:nth-of-type(4) {
        > div {
          .history {
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
              }
            }
          }
        }
      }

      &:nth-of-type(3) {
        > div {
          display: flex;
          flex-wrap: wrap;
          margin: -${callout.margin} 0 0 -${callout.margin};

          .history {
            ${callout.defaults};
            width: calc(50% - ${callout.margin});
            margin: ${callout.margin} 0 0 ${callout.margin};
          }
        }
      }

      &:nth-of-type(4) {
        > div {
          display: flex;
          justify-content: space-between;

          .history {
            ${callout.defaults};
            width: 33.33%;

            &:not(:first-of-type) {
              margin: 0 0 0 ${callout.margin};
            }

            > div {
              &:first-of-type {
                span {
                  &:first-of-type {
                    max-width: 90%;

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
            margin: -${callout.margin} 0 0 -${callout.margin};

            li {
              ${callout.defaults};
              width: calc(33.33% - ${callout.margin});
              min-height: 96px;
              margin: ${callout.margin} 0 0 ${callout.margin};
              padding: 25px 40px;

              &:nth-of-type(4),
              &:nth-of-type(5),
              &:nth-of-type(6) {
                .item-icon svg {
                  font-size: 3.4rem;
                }
              }

              span {
                font-size: 1.75rem;
                line-height: 1.2em;
                width: 100%;

                &.item-icon {
                  width: 0;
                  opacity: 0;
                  margin: 0;
                  color: ${color.red.medium};
                  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));

                  svg {
                    font-size: 3rem;
                  }
                }
              }
            }
          }
        }

        &.waypoint ul {
          ${animListItem('interests', 6, '30%', '40px')};
        }
      }

      &:nth-of-type(6) {
        overflow: hidden;

        > div {
          position: relative;
          perspective: 10000px;

          > a {
            ${boxShadow(0, 0, 3, 0, 0.1)};
            position: absolute;
            top: -50px;
            right: 40px;
            transform: rotateZ(20deg);

            img {
              width: 240px;
            }
          }
        }

        &.waypoint > div > a {
          animation: anim-resume 1200ms 800ms ease-in-out forwards;

          @keyframes anim-resume {
            to {
              top: 180px;
              top: 250px;
              right: 220px;
              right: 310px;
              transform: rotateZ(-25deg) scale(3.2);
              transform: rotateZ(-25deg) scale(4);
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
