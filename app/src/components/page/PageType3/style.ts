import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { color } from '../../../utility/constant';
import { boxShadow, defaults, padding } from '../../../utility/mixin';

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
    padding: 250px 0 0;

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
      min-height: 100%;
      padding: 0;

      > * {
        padding: 20px 0;
        background-color: ${color.core.white};
      }

      > aside {
        ${boxShadow('10px', 0, '25px', 0, 0.1)};
        position: relative;
        width: 200px;
        /* padding-left: 10px;
        padding-right: 10px; */
        z-index: 50;

        > div {
          h4 {
            margin: 0 0 4px;
            color: ${color.pagetype[3].red};
            font-size: 0.85em;
            font-weight: 600;
          }

          &:first-of-type {
            width: 170px;
            margin: 0 auto 30px;

            h4 {
              color: ${color.core.black};
            }

            > div {
              padding: 5px;
              border: 1px solid ${color.core.grey.light2};
              border-radius: 4px;

              span {
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
        width: calc(100% - 200px);
        padding: 35px 60px 100px 40px;

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
