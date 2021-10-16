import styled from '@emotion/styled';
import { viewport } from 'utility/constant';
import { border, defaults, padding } from 'utility/mixin';

const StyledPage = styled.div`
  ${defaults('page', viewport.tablet.portrait[0])};
  ${padding('25px')};

  a {
    text-decoration: underline;
  }

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
        &.history {
          > div {
            span {
              font-size: 1.25rem;
            }

            &:first-of-type {
              flex-direction: column !important;
              margin: 0 0 10px;

              > span:last-of-type {
                margin: 8px 0 0;
                text-align: left;
              }
            }
          }

          > ul + ul span {
            font-size: 1rem;
            line-height: 1.3em;
          }
        }

        &.skillset {
          ${border(2, true)};

          > div span {
            ${border()};
          }
        }
      }
    }
  }
`;

export default StyledPage;
