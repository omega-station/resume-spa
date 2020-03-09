import styled from '@emotion/styled';
import { color } from '../../../utility/constant';
import { border, padding, defaults } from '../../../utility/mixin';

const StyledPage = styled.div`
  ${defaults('page', '768px')};
  ${padding(true, '25px')};

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
              flex-direction: column !important;
              margin: 0 0 10px;

              > span {
                font-weight: 600;

                &:last-of-type {
                  margin: 8px 0 0;
                  text-align: left;
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
                margin-right: 6px;
                color: ${color.solid.black};
                font-size: 0.85rem;
                font-style: normal;
                letter-spacing: -0.15em;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledPage;
