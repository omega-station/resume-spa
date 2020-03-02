import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { breakpoint } from '../../../utility/constant';
import { transition } from '../../../utility/mixin';
import anim from '../../../utility/anim';
import { Props } from './definition';

const StyledCorner = styled.a<Props>`
  ${props => css`
    ${anim('color-cycle')};
    position: fixed;
    top: 0;
    right: 0;

    svg {
      ${transition('width')}
      width: 80px;

      @media (min-width: ${breakpoint.tablet.portrait[0]}) {
        width: 120px;
      }

      @media (min-width: ${breakpoint.desktop[1]}) {
        width: 160px;
      }

      & path {
        &:nth-of-type(1) {
          fill: ${props.fill};
          ${props.isAnimated &&
            css`
              animation: anim-color-cycle 2000ms infinite;
            `}
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
  `}
`;

export default StyledCorner;