import { css } from '@emotion/core';
import { color } from '../../../../utility/constant';
import { backgroundStriped, padding } from '../../../../utility/mixin';

const footer = css`
  ${backgroundStriped()};
  ${padding(true, '12px', '12px')};
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  &,
  div {
    width: 100%;
    height: 35px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      &,
      * {
        color: ${color.solid.black};
        font-size: 1.25rem;
        font-weight: 500;
      }

      &:not(:last-of-type) {
        margin-right: 25px;
      }

      &:first-of-type {
        margin-right: auto;
        font-weight: 600;
      }

      a:hover {
        border-bottom: 2px solid ${color.solid.black};
      }
    }
  }
`;

export default footer;
