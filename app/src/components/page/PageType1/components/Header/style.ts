import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { viewport, color } from 'utility/constant';
import { backgroundStriped, padding, transition } from 'utility/mixin';

const StyledHeader = styled.header`
  width: 100%;

  > div {
    div {
      ${padding('10px', '25px')};

      pre {
        ${transition('font-size', 100)};

        &:first-of-type {
          font-size: 1.5vw;
        }

        &:last-of-type {
          font-size: 1.7vw;
        }

        @media (min-width: ${viewport.mobile[3]}) {
          &:first-of-type {
            font-size: 0.8vw;
          }

          &:last-of-type {
            margin: -8px 0 0;
            font-size: 0.9vw;
          }
        }
      }
    }
  }

  nav {
    ${backgroundStriped()};
    ${padding()};
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 35px;

    ul {
      width: 100%;
      max-width: 420px;

      @media (min-width: ${viewport.desktop[3]}) {
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
          color: ${color.black};
          font-size: 1.75rem;
          font-weight: 500;
          line-height: 1.175em;
          transition: background-color 0.2s ease-in-out, padding 0.2s ease-in-out;

          @media (min-width: ${viewport.mobile[1]}) {
            padding: 0 15px;
          }
        }

        &.is-current a {
          background-color: ${getRGBA(color.green.light, 0.5)};
        }

        &.is-selected a,
        a:hover {
          background-color: ${getRGBA(color.green.light, 0.7)};
        }

        span {
          &:nth-of-type(5),
          &:nth-of-type(6) {
            display: none;
          }
        }

        @media (min-width: ${viewport.desktop[3]}) {
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

      @media (min-width: ${viewport.tablet.portrait[1]}) {
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
