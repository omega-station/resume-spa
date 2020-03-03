import styled from '@emotion/styled';
import { breakpoint } from '../../../utility/constant';
import { border, padding } from '../../../utility/mixin';

const StyledPage = styled.div`
  ${padding(true, '25px')};
  max-width: 1024px;

  main {
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
        width: 100%;

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
        width: 100%;

        &.history {
          margin: 0 0 30px;

          > div {
            span {
              font-size: 1.25rem;
            }

            &:first-of-type {
              margin: 0 0 10px;

              > span {
                font-weight: 600;

                &:last-of-type {
                  margin: 8px 0 0;

                  @media (min-width: ${breakpoint.desktop[3]}) {
                    margin: 0;
                  }
                }
              }
            }
          }

          > ul + ul span {
            font-size: 1rem;
            line-height: 1.3em;
          }
        }

        &.table {
          ${border('2px', true)};

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
              overflow-wrap: anywhere;

              &:not(:first-of-type) {
                margin: 0 0 0 2px;
              }

              &:first-of-type,
              &.proficiency {
                font-weight: 600;
              }

              &:first-of-type {
                flex-basis: 33.33%;
                min-width: 140px;
              }

              &:last-of-type {
                flex-basis: 66.66%;
              }

              &.proficiency i {
                margin-right: 8px;
                font-size: 0.975rem;
                font-style: normal;
                letter-spacing: -0.1em;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledPage;
