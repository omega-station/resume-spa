import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { animColorCycle, animOctoarm } from '../../../utility/mixin/anim';
import { viewport, color } from '../../../utility/constant';
import { transition } from '../../../utility/mixin';
import { Props } from './definition';

const StyledCorner = styled.a<Props>`
  ${props => css`
    position: fixed;
    top: 0;
    right: 0;
    border: 0 !important;
    z-index: 1000;

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

      ${props.isSmall &&
        css`
          width: 80px !important;
        `}

      @media (min-width: ${viewport.mobile[3]}) {
        width: 100px;
      }

      @media (min-width: ${viewport.tablet.landscape[0]}) {
        width: 140px;
      }

      & path {
        ${transition('fill', 300, 'ease-out')};

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
        fill: ${color.white};
      }

      &:nth-of-type(1) {
        animation: none;

        @media (min-width: ${viewport.mobile[2]}) {
          ${animColorCycle};
        }
      }

      &:nth-of-type(2) {
        animation: none;

        @media (min-width: ${viewport.mobile[2]}) {
          ${animOctoarm};
        }
      }
    }

  `}
`;

export default StyledCorner;
