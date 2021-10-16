import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, viewport } from 'utility/constant';
import { transition } from 'utility/mixin';
import { animColorCycle, animOctoarm } from 'utility/mixin/anim';
import { Props } from './definition';

const StyledCorner = styled.a<Props>`
  ${props => css`
    display: block;
    position: fixed;
    opacity: 0;
    z-index: -1000;

    @media (min-width: ${viewport.desktop[0]}) {
      opacity: 1;
      z-index: 1000;
    }

    svg {
      display: block;
    }

    &.mode-alternate,
    &.mode-circle,
    &.mode-square {
      ${transition('transform')}
      padding: 0;
      color: ${props.color};
      border: 0 !important;
      font-size: 4em;
      transform: rotate(45deg) scale(0.8);

      ${props.isLeft &&
      css`
        transform: rotate(-45deg) scale(0.8);
      `}

      ${props.isSmall &&
      css`
        transform: rotate(45deg) scale(0.6) translate(0, -30px);
      `}

      ${props.isLeft &&
      props.isSmall &&
      css`
        transform: rotate(-45deg) scale(0.6) translate(0, -30px);
      `}

      @media (min-width: ${viewport.mobile[2]}) {
        &:hover svg path {
          ${animColorCycle};
        }
      }
    }

    &.mode-alternate,
    &.mode-circle {
      top: 15px;
      right: 15px;

      ${props.isLeft &&
      css`
        left: 15px;
        right: auto;
      `}
    }

    &.mode-circle,
    &.mode-square {
      span {
        display: block;
        background-color: ${props.fill};
      }
    }

    &.mode-alternate {
      top: 12px;
    }

    &.mode-circle {
      span {
        border-radius: 50%;
        transform: scale(1.1);

        svg {
          transform: scale(1.05);
        }
      }
    }

    &.mode-square {
      top: 18px;
      right: 24px;

      ${props.isLeft &&
      css`
        left: 24px;
        right: auto;
      `}

      span {
        transform: scale(1.05);

        svg {
          transform: scale(1.15);
        }
      }
    }

    &.mode-triangle {
      animation: none;
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

        &:nth-of-type(1),
        &:nth-of-type(2) {
          animation: none;
        }

        @media (min-width: ${viewport.mobile[2]}) {
          &:nth-of-type(1) {
            ${animColorCycle};
          }

          &:nth-of-type(2) {
            ${animOctoarm};
          }
        }
      }
    }
  `}
`;

export default StyledCorner;
