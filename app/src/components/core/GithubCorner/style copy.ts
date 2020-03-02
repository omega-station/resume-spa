import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { breakpoint } from '../../../utility/constant';
import { transition } from '../../../utility/mixin';
import { Props } from './definition';

const StyledCorner = styled.a<Props>`
  position: fixed;
  top: 0;
  right: 0;

  svg {
    width: 120px;

    & path {
      &:nth-of-type(1) {
        fill: black;
      }

      &:nth-of-type(2) {
        transform-origin: 130px 106px;
      }

      &:nth-of-type(2),
      &:nth-of-type(3) {
        fill: #fff;
      }
    }
  }

  &:hover svg path:nth-of-type(2) {
    animation: none;

    @media (min-width: ${breakpoint.mobile[2]}) {
      animation: anim-tail 560ms ease-in-out;
    }
  }

  @keyframes anim-tail {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
`;

export default StyledCorner;
