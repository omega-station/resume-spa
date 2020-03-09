import { css } from '@emotion/core';
import styled from '@emotion/styled';
import anim from '../../../utility/anim';
import { breakpoint, color } from '../../../utility/constant';
import { transition } from '../../../utility/mixin';
import { Props } from './definition';

const StyledCorner = styled.a<Props>`
  ${props => css`
    ${anim('color-cycle')};
    position: fixed;
    top: 0;
    right: 0;
    border: 0 !important;

    ${props.isLeft &&
      css`
        left: 0;
        right: auto;
        transform: scale(-1, 1);
      `}

    svg {
      ${transition('width')}
      display: block;
      width: 60px;

      @media (min-width: ${breakpoint.mobile[3]}) {
        width: 100px;
      }

      @media (min-width: ${breakpoint.tablet.landscape[0]}) {
        width: 140px;
      }

      & path {
        ${transition('fill', '.3s', 'ease-out')};

        &:nth-of-type(1) {
          fill: ${props.fill};
        }

        &:nth-of-type(2) {
          transform-origin: 130px 106px;
        }

        &:nth-of-type(2),
        &:nth-of-type(3) {
          fill: ${props.color};
        }
      }
    }

    &:hover svg path {
      &:nth-of-type(2),
      &:nth-of-type(3) {
        fill: ${color.solid.white};
      }

      &:nth-of-type(1) {
        animation: none;

        @media (min-width: ${breakpoint.mobile[2]}) {
          animation: anim-color-cycle 800ms infinite;
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
