import styled from '@emotion/styled';
import { breakpoint, color } from '../../../../../utility/constant';
import { backgroundStriped, padding, transition } from '../../../../../utility/mixin';

const StyledHeader = styled.header`
  width: 100%;

  > div {
    div {
      ${padding(true, '10px', '25px')};

      pre {
        ${transition('font-size')};

        &:first-of-type {
          font-size: 1.5vw;
        }

        &:last-of-type {
          font-size: 1.7vw;
        }

        @media (min-width: ${breakpoint.mobile[3]}) {
          &:first-of-type {
            font-size: 0.725rem;
          }

          &:last-of-type {
            margin: -8px 0 0;
            font-size: 0.825rem;
          }
        }

        @media (min-width: ${breakpoint.desktop[2]}) {
          &:first-of-type {
            font-size: 1rem;
          }

          &:last-of-type {
            font-size: 1.138rem;
          }
        }
      }
    }
  }

  nav {
    ${backgroundStriped()};
    ${padding(true)};
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 35px;

    ul {
      width: 100%;

      li {
        &:not(:first-of-type) {
          margin: 0 0 0 25px;
        }

        &:last-of-type {
          margin-left: auto;
        }

        a,
        span {
          ${transition('background-color', '.2s')}
          display: inline-block;
          position: relative;
          top: 1px;
          height: 33px;
          padding: 0 5px;
          color: ${color.solid.black};
          font-size: 1.5rem;
          font-size: 1.75rem;
          font-weight: 500;
          line-height: 1.175em;
        }

        &.is-current a {
          background-color: ${color.pagetype[1].alpha.green2};
        }

        &.is-selected a,
        a:hover {
          background-color: ${color.pagetype[1].alpha.green};
        }

        span {
          &:nth-of-type(5),
          &:nth-of-type(6) {
            display: none;
          }
        }
      }

      @media (min-width: ${breakpoint.tablet.portrait[1]}) {
        li span {
          &:nth-of-type(5),
          &:nth-of-type(6) {
            display: inline-block;
          }
        }
      }
    }
  }
`;

export default StyledHeader;