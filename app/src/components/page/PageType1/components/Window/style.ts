import styled from '@emotion/styled';
import { color } from '../../../../../utility/constant';
import { getRandom } from '../../../../../utility';
import { backgroundStriped } from '../../../../../utility/mixin';

const size: { [key: string]: string } = {
  width: '40%',
  height: '400px',
};

const StyledWindow = styled.div`
  ${backgroundStriped('black')};
  position: absolute;
  top: ${`${getRandom(300)}px`};
  left: ${`${getRandom(600)}px`};
  width: ${size.width};
  height: ${size.height};
  background-color: black;
  border: 1px double ${color.solid.black};
  font-size: 1.15rem;
  line-height: 1.5em;

  > div {
    overflow: scroll;
    width: 100%;
    height: 100%;
    min-height: 100%;
    border: 1px double ${color.pagetype[1].solid.green4};

    header {
      ${backgroundStriped('light-green')};
      position: fixed;
      width: calc(${size.width} - 2px);
      margin: -1px 0 0 -1px;
      padding: 3px 0 3px 20px;
      color: ${color.solid.black};
      font-size: 1.4em;
    }

    main {
      margin: 0;
      padding: 55px 25px 20px;

      a {
        padding: 0 4px;
        background-color: ${color.pagetype[1].alpha.green};
        border: 0;
        color: ${color.solid.black};
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

        &:hover {
          background-color: ${color.pagetype[1].alpha.green2};
          color: ${color.pagetype[1].alpha.green};
        }
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
          margin: 30px 0 0;
        }

        > div {
          &:first-of-type {
            display: flex;
            flex-direction: column;
            margin: 0 0 10px;

            > span:first-of-type span {
              color: ${color.pagetype[1].solid.green3};
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

      .table {
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
              color: ${color.pagetype[1].solid.green3};
            }
          }

          > span {
            display: block;

            &:first-of-type {
              width: 33.33%;
              color: ${color.pagetype[1].solid.green3};
            }

            &:last-of-type {
              width: 66.66%;
            }
          }
        }
      }
    }
  }
`;

export default StyledWindow;
