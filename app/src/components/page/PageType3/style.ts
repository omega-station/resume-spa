import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { color, viewport } from 'utility/constant';
import { boxShadow, defaults, padding, transition } from 'utility/mixin';

WebFont.load({
  google: {
    families: ['PT+Sans:300,400,500,600'],
  },
});

const width = {
  aside: 215,
};

const StyledPage = styled.div`
  ${defaults()};
  ${padding()};
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    ${transition('padding')};
    position: relative;
    width: 100%;
    max-width: 960px;
    min-height: 100%;
    padding: 170px 0 0;

    @media (min-width: ${viewport.mobile[3]}) {
      padding: 200px 0 0;
    }

    @media (min-width: ${viewport.tablet.portrait[0]}) {
      padding: 240px 0 0;
    }

    @media (min-width: ${viewport.tablet.landscape[0]}) {
      padding: 230px 0 0;
    }

    * {
      font-family: 'PT Sans', sans-serif;
    }

    main,
    footer {
      a {
        display: inline-block;
        border-bottom: 1px solid transparent;
        color: ${color.red.medium};
        line-height: 0.9em;

        &:hover {
          border-bottom-color: ${color.red.medium};
        }
      }
    }

    main {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      padding: 0;

      @media (min-width: ${viewport.tablet.landscape[0]}) {
        flex-direction: row;
      }

      > * {
        padding: 20px 0;
        background-color: ${color.white};
      }

      > aside {
        ${transition('padding-bottom')};
        position: relative;
        width: 100%;
        order: 1;
        z-index: 50;
        margin: 10px 0 102px;
        padding: 0 0 40px;

        @media (min-width: ${viewport.mobile[2]}) {
          margin-bottom: 64px;
        }

        @media (min-width: ${viewport.tablet.portrait[0]}) {
          margin-bottom: 45px;
        }

        @media (min-width: ${viewport.tablet.landscape[0]}) {
          ${boxShadow(10, 0, 25, 0, 0.1)};
          width: ${width.aside}px;
          margin: 0;
          order: 0;
        }

        > div {
          h4 {
            margin: 0 0 6px;
            color: ${color.red.medium};
            font-size: 0.9em;
            font-weight: 600;
          }

          &:first-of-type {
            width: 100%;
            margin: 18px 0 30px;
            padding: 0 20px;

            > div {
              padding: 5px;
              border-radius: 4px;
              background-color: ${color.grey.medium2};

              span {
                color: ${color.white} !important;
                word-break: break-all;
              }
            }
          }

          &:last-of-type {
            width: 100%;
            text-align: center;

            a {
              svg {
                font-size: 64px;
                color: ${color.red.medium};

                &:last-of-type {
                  display: none;
                }
              }

              &:hover svg {
                &:first-of-type {
                  display: none;
                }
                &:last-of-type {
                  display: inline;
                }
              }
            }
          }
        }
      }

      > div {
        width: 100%;
        padding: 30px 20px 40px;

        @media (min-width: ${viewport.tablet.landscape[0]}) {
          width: calc(100% - ${width.aside}px);
          padding: 35px 60px 100px 40px;
        }

        section {
          a {
            display: inline-block;
            border-bottom: 1px solid transparent;
            color: ${color.red.medium};
            line-height: 0.9em;

            &:hover {
              border-bottom-color: ${color.red.medium};
            }
          }

          h2 {
            margin: 0 0 20px;
            color: ${color.red.medium};
            font-size: 1.4rem;
            font-weight: 600;
          }

          li,
          p {
            font-size: 1rem;
            line-height: 1.4em;
          }

          p {
            &:first-of-type {
              font-weight: 600;

              a {
                border-bottom-width: 2px;
              }
            }

            &:not(:last-of-type) {
              margin: 0 0 15px;
            }
          }

          ul {
            margin: 15px 0 0;
            padding: 0 0 0 25px;

            li {
              list-style: disc;
              padding: 0 0 0 5px;
            }
          }

          div {
            &.history {
              margin: 0;
              padding: 5px 0 25px;

              > div {
                &:first-of-type {
                  margin: 0 0 8px;

                  > span {
                    &:first-of-type {
                      margin: 0 0 8px;

                      @media (min-width: ${viewport.desktop[3]}) {
                        margin: 0;
                      }
                    }
                  }
                }
              }

              > ul {
                margin-top: 10px;
              }
            }

            &.skillset {
              div {
                &.head {
                  display: none;
                }

                &.body {
                  span {
                    font-size: 1rem;

                    &:first-of-type {
                      color: ${color.red.dark};
                    }

                    &.proficiency {
                      font-size: 0.9rem;

                      &,
                      i {
                        color: ${color.red.medium};
                        font-weight: 600;
                      }

                      i {
                        position: relative;
                        top: 3px;
                        font-size: 1.05rem;
                        letter-spacing: 0.03em;
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

export default StyledPage;
