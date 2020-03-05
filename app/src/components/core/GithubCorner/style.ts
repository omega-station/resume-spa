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
      display: block;
      width: 70px;

      @media (min-width: ${breakpoint.tablet.portrait[0]}) {
        width: 100px;
      }

      @media (min-width: ${breakpoint.desktop[1]}) {
        width: 130px;
      }

      & path {
        &:nth-of-type(1) {
          fill: ${props.fill};
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

    &:hover svg path {
      &:nth-of-type(1) {
        animation: none;

        @media (min-width: ${breakpoint.mobile[2]}) {
          animation: anim-color-cycle 500ms infinite;
        }
      }

      &:nth-of-type(2) {
        animation: none;

        @media (min-width: ${breakpoint.mobile[2]}) {
          animation: anim-octoarm 700ms ease-out infinite;
        }
      }
    }

    @keyframes anim-octoarm {
      0%,
      75% 100% {
        transform: rotate(0);
      }
      35% {
        transform: rotate(-25deg);
      }
      85% {
        transform: rotate(10deg);
      }
    }
  `}
`;

export default StyledCorner;
