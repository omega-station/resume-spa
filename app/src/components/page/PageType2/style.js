import styled from '@emotion/styled';
import { border, padding } from '../../../utility/mixin';

const StyledPage = styled.div`
  ${padding(true, '25px')};

  main {
    display: none;

    section {
      &:not(:last-of-type) {
        margin: 0 0 40px;
      }

      h2 {
        margin: 0 0 10px;
        font-size: 2rem;
        font-weight: 600;
      }

      li,
      p {
        font-size: 1.25rem;
        line-height: 1.3em;
      }

      p {
        width: 60%;

        &:not(:last-of-type) {
          margin: 0 0 10px;
        }
      }

      ul {
        margin: 10px 0 0;
        padding: 0 0 0 25px;

        li {
          list-style: disc;
        }
      }

      div {
        &.history {
          width: 60%;
          margin: 0 0 30px;

          > div {
            span {
              font-size: 1.25rem;
            }

            &:first-of-type {
              display: flex;
              justify-content: space-between;
              margin: 0 0 5px;

              span {
                font-weight: 600;
              }
            }

            &:last-of-type {
              margin: 0 0 5px;
            }
          }

          > ul {
            & + ul {
              padding-left: 5px;

              li {
                display: flex;
                list-style: none;

                span {
                  font-size: 1.1rem;
                  line-height: 1.3em;

                  &:first-of-type {
                    flex-basis: 110px;
                  }
                }
              }
            }
          }
        }

        &.table {
          ${border('2px', true)};
          width: 800px;
          width: 60%;

          &:not(:last-of-type) {
            margin: 0 0 30px;
          }

          > div {
            display: flex;

            &:not(:first-of-type) {
              margin: 2px 0 0;
            }

            &.head {
              font-size: 1.3rem;
              font-weight: 600;
              text-align: center;
            }

            span {
              ${border()};
              display: inline-block;
              padding: 5px;
              font-size: 1.2rem;
              line-height: 1.3em;

              &:not(:first-of-type) {
                margin: 0 0 0 2px;
              }

              &:first-of-type,
              &.bold {
                font-weight: 600;
              }

              &:first-of-type {
                flex-basis: 33.33%;
              }

              &:last-of-type {
                flex-basis: 66.66%;
                /* font-size: 0.9vw; */
              }
            }
          }

          &:last-of-type {
          }
        }
      }
    }
  }
`;

export default StyledPage;
