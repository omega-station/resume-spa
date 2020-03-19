import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { breakpoint, color } from '../../../../../utility/constant';
import { backgroundStriped, padding, transition } from '../../../../../utility/mixin';

const StyledHeader = styled.header`
  width: 100%;

  > div {
    div {
      ${padding(true, '10px', '25px')};

      pre {
        ${transition('font-size', '.1s')};

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
      max-width: 420px;

      @media (min-width: ${breakpoint.desktop[3]}) {
        max-width: none;
      }

      li {
        &.list-item-extra {
          display: none;
        }

        a,
        span {
          display: inline-block;
          position: relative;
          top: 1px;
          height: 33px;
          padding: 0 5px;
          color: ${color.core.black};
          font-size: 1.75rem;
          font-weight: 500;
          line-height: 1.175em;
          transition: background-color 0.2s ease-in-out, padding 0.2s ease-in-out;

          @media (min-width: ${breakpoint.mobile[1]}) {
            padding: 0 15px;
          }
        }

        &.is-current a {
          background-color: ${getRGBA(color.pagetype[1].green.light, 0.5)};
        }

        &.is-selected a,
        a:hover {
          background-color: ${getRGBA(color.pagetype[1].green.light, 0.7)};
        }

        span {
          &:nth-of-type(5),
          &:nth-of-type(6) {
            display: none;
          }
        }

        @media (min-width: ${breakpoint.desktop[3]}) {
          &:not(:first-of-type) {
            margin: 0 0 0 25px;
          }

          &:last-of-type {
            margin-left: auto;
          }

          &.list-item-extra {
            display: block;
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
