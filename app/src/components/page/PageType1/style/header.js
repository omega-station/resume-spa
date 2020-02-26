import { css } from '@emotion/core';
import { color } from '../../../../utility/constant';
import { backgroundStriped, padding, transition } from '../../../../utility/mixin';

const header = css`
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
      &:first-of-type {
        ${padding(true, '10px', '25px')};
        flex-basis: 70%;

        pre {
          font-family: monospace;
          white-space: pre;

          &:first-of-type {
            font-size: 0.55vw;
          }

          &:last-of-type {
            margin: -8px 0 0;
            font-size: 0.625vw;
          }
        }
      }

      &:last-of-type {
        ${padding(true, '30px', '30px')};
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        text-align: right;
        justify-content: center;

        span {
          display: inline-block;
          font-size: 1.2em;
          white-space: nowrap;

          &:not(:first-of-type) {
            margin: 3px 0 0;
          }

          &:nth-of-type(3) {
            margin-top: 18px;
          }
        }
      }
    }
  }

  nav {
    ${padding(true)};
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 32px;
    line-height: 36px;
    ${backgroundStriped()};

    ul {
      width: 380px;

      li {
        &.is-current a,
        a:hover {
          background-color: ${color.pagetype[1].alpha.green};
        }

        a {
          ${transition('background-color', '.2s')}
          display: inline-block;
          position: relative;
          top: 1px;
          height: 31px;
          padding: 0 5px;
          color: ${color.solid.black};
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }
  }
`;

export default header;
