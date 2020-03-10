import styled from '@emotion/styled';
import { breakpoint, color } from '../../../../../utility/constant';
import { border, transition } from '../../../../../utility/mixin';

const StyledHeader = styled.header`
  > nav {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    ul {
      ${border('2px', true)}
      display: flex;
      flex-wrap: wrap;
      margin: -2px 0 0 -2px;
      padding: 0 2px 2px 0;

      li {
        ${border()}
        width: calc(50% - 2px);
        margin: 2px 0 0 2px;
        padding: 10px 15px;
        text-align: center;

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

      @media (min-width: ${breakpoint.mobile[0]}) {
        flex-wrap: nowrap;

        li {
          width: 25%;
        }
      }
    }
  }

  > div {
    margin: 10% 0;
    text-align: center;

    @media (min-width: ${breakpoint.mobile[3]}) {
      margin: 6% 0 10%;
    }

    div {
      &:first-of-type {

        h1 {
          font-size: 2.85rem;
          margin: 0 0 6px;

          &,
          & + h2 {
            ${transition('font-size')};
            font-weight: 600;
            line-height: 1em;

          }

          & + h2 {
            font-size: 1.8rem;
          }

          @media (min-width: ${breakpoint.mobile[4]}) {
            font-size: 4.6rem;
            margin: 0;

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
        margin: 12% auto 6%;

        @media (min-width: ${breakpoint.mobile[3]}) {
          margin: 6% auto;
        }

        span {
          ${border()}
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-basis: 25%;
          font-size: 1.15rem;
          font-weight: 600;
          padding: 8px;

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
            &:not(:first-of-type) {
              margin: 0;
            }
          }

          a {
            font-size: 1.25rem;
          }

          img {
            display: none;
            width: 32px;

            &:nth-of-type(-n+7) {
              display: inline;
            }

            &:not(:first-of-type) {
              margin: 0 0 0 5px;
            }

            @media (min-width: ${breakpoint.mobile[0]}) {
              display: inline !important;
            }

            @media (min-width: ${breakpoint.tablet.portrait[2]}) {
              display: none !important;

              &:nth-of-type(-n+4) {
                display: inline !important;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
