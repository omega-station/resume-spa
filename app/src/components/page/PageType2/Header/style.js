import styled from '@emotion/styled';
import { color } from '../../../../utility/constant';
import { border } from '../../../../utility/mixin';

const StyledHeader = styled.header`
  > nav {
    width: 600px;
    margin: 0 auto;

    ul {
      ${border('2px', true)}

      li {
        ${border()}
        width: 25%;
        padding: 10px 15px;
        text-align: center;

        &:not(:first-of-type) {
          margin: 0 0 0 2px;
        }

        &.is-current a,
        a:hover {
          color: ${color.solid.blue};
        }

        &.is-current a {
          text-decoration: none;
        }

        a {
          font-size: 1.25rem;
          text-decoration: underline;
        }
      }
    }
  }

  > div {
    margin: 50px 0;
    text-align: center;

    div {
      &:first-of-type {
        h1 {
          font-size: 4.6rem;

          &,
          & + h2 {
            font-weight: 600;
          }

          & + h2 {
            font-size: 2.85rem;
          }
        }
      }

      &:last-of-type {
        ${border('2px', true)}
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 900px;
        margin: 30px auto 0;

        span {
          ${border()}
          flex-basis: 25%;
          font-size: 1.15rem;
          font-weight: 600;

          &:not(:first-of-type) {
            margin: 0 0 0 2px;
          }
        }
      }
    }

    nav {
      width: 800px;
      margin: 50px auto 0;

      ul {
        ${border('3px', true)}
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 2px;
        grid-row-gap: 2px;

        li {
          ${border()}
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;

          a {
            font-size: 1.25rem;
          }

          img {
            width: 32px;

            &:not(:first-of-type) {
              margin: 0 0 0 5px;
            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
