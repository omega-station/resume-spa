import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { breakpoint, color } from '../../../utility/constant';
import { boxShadow, defaults, padding, transition } from '../../../utility/mixin';

WebFont.load({
  google: {
    families: ['PT+Sans:300,400,500,600'],
  },
});

const StyledPage = styled.div`
  ${defaults()};
  ${padding(true)};
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-family: 'PT Sans', sans-serif;
  }

  > div {
    position: relative;
    width: 100%;
    max-width: 960px;
    min-height: 100%;
    padding: 240px 0 0;

    @media (min-width: ${breakpoint.tablet.landscape[0]}) {
      padding: 230px 0 0;
    }

    main,
    footer {
      a {
        display: inline-block;
        border-bottom: 1px solid transparent;
        color: ${color.pagetype[3].red};
        line-height: 0.9em;

        &:hover {
          border-bottom-color: ${color.pagetype[3].red};
        }
      }
    }

    main {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      padding: 0;

      @media (min-width: ${breakpoint.tablet.landscape[0]}) {
        flex-direction: row;
      }

      > * {
        padding: 20px 0;
        background-color: ${color.core.white};
      }

      > aside {
        ${transition('padding-bottom')};
        position: relative;
        width: 100%;
        order: 1;
        z-index: 50;
        margin: 10px 0 162px;
        padding: 0 0 40px;

        @media (min-width: ${breakpoint.mobile[2]}) {
          margin-bottom: 131px;
        }

        @media (min-width: ${breakpoint.mobile[3]}) {
          margin-bottom: 68px;
        }

        @media (min-width: ${breakpoint.tablet.portrait[2]}) {
          margin-bottom: 47px;
        }

        @media (min-width: ${breakpoint.tablet.landscape[0]}) {
          ${boxShadow('10px', 0, '25px', 0, 0.1)};
          width: 200px;
          margin: 0;
          order: 0;
        }

        > div {
          h4 {
            margin: 0 0 6px;
            color: ${color.pagetype[3].red};
            font-size: 0.9em;
            font-weight: 600;
          }

          &:first-of-type {
            width: 100%;
            margin: 18px 0 30px;
            padding: 0 30px;

            @media (min-width: ${breakpoint.tablet.landscape[0]}) {
              padding: 0 15px;
            }

            > div {
              padding: 5px;
              border-radius: 4px;
              background-color: ${color.core.grey.light2};

              span {
                color: ${color.core.white} !important;
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
                color: ${color.pagetype[3].red};

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
        padding: 30px 30px 40px;

        @media (min-width: ${breakpoint.tablet.landscape[0]}) {
          width: calc(100% - 200px);
          padding: 35px 60px 100px 40px;
        }

        section {
          a {
            display: inline-block;
            border-bottom: 1px solid transparent;
            color: ${color.pagetype[3].red};
            line-height: 0.9em;

            &:hover {
              border-bottom-color: ${color.pagetype[3].red};
            }
          }

          h2 {
            margin: 0 0 20px;
            color: ${color.pagetype[3].red};
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
            }

            &.skillset {
              div {
                &.head {
                  display: none;
                }

                span {
                  font-size: 1rem;

                  &:first-of-type {
                    color: ${color.pagetype[3].red2};
                  }

                  &.proficiency {
                    font-size: 0.8rem;
                    color: ${color.pagetype[3].red2};

                    i {
                      position: relative;
                      top: 3px;
                      color: ${color.pagetype[3].red};
                      letter-spacing: 0.02em;
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
