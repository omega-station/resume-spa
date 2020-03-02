import styled from '@emotion/styled';
import { color, breakpoint } from '../../../../utility/constant';
import { border, transition } from '../../../../utility/mixin';

const StyledHeader = styled.header`
  > nav {
    width: 100%;
    max-width: 600px;
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
    margin: 60px 0 120px;
    margin: 4% 0 8%;
    text-align: center;

    div {
      &:first-of-type {

        h1 {
          font-size: 2.5rem;

          &,
          & + h2 {
            ${transition('font-size')};
            font-weight: 600;
            line-height: 1em;

          }

          & + h2 {
            font-size: 1.6rem;
          }

          @media (min-width: ${breakpoint.mobile[4]}) {
            font-size: 4.6rem;

            & + h2 {
              font-size: 2.85rem;
            }
          }
        }
      }

      &:last-of-type {
        ${border('2px', true)}
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 900px;
        margin: 50px auto 70px;
        margin: 4% auto 5%;

        span {
          ${border()}
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-basis: 25%;
          font-size: 1.15rem;
          font-weight: 600;

          &:not(:first-of-type) {
            margin: 2px 0 0 0;
          }
        }

        @media (min-width: ${breakpoint.mobile[3]}) {
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;

          span:not(:first-of-type) {
            margin: 0 0 0 2px;
          }
        }
      }
    }

    nav {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;

      ul {
        ${border('3px', true)}

        @media (min-width: ${breakpoint.tablet.portrait[2]}) {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 2px;
          grid-row-gap: 2px;
        }

        li {
          ${border()}
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          overflow: hidden;

          &:not(:first-of-type) {
              margin: 2px 0 0;
            }


          @media (min-width: ${breakpoint.tablet.portrait[2]}) {
              margin: 0;
          }

          a {
            font-size: 1.25rem;
          }

          img {
            width: 32px;

            &:not(:first-of-type) {
              margin: 0 0 0 5px;
            }

            @media (min-width: ${breakpoint.tablet.portrait[2]}) {
              display: none;

              &:nth-of-type(-n+5) {
                display: inline;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
