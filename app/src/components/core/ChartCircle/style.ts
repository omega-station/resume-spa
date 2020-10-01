import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color } from '../../../utility/constant';
import { PropsStyled as Props } from './definition';

const getColor = (percent: any): string => {
  switch (true) {
    case percent >= 85:
      return color.red.medium;
    case percent >= 75:
      return color.red.medium2;
    default:
      return color.red.dark;
  }
};

const StyledChartCircle = styled.div<Props>`
  ${props => css`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      display: block;
      margin: 0 auto;
      max-width: 85%;
      max-height: 250px;

      path {
        fill: none;

        &:first-of-type {
          stroke: ${color.grey.light2};
          stroke-width: 4;
        }

        &:last-of-type {
          stroke: ${getColor(props.animation.percent)};
          stroke-dasharray: 0 100;
          stroke-width: 3;
          animation: ${`anim-chart-${props.animation.key} ${props.animation.duration * 1000}ms ${props.animation.delay * 1000}ms ease-out forwards`};

          @keyframes anim-chart-${props.animation.key} {
            from {
              stroke-linecap: round;
            }
            to {
              stroke-dasharray: ${props.animation.percent - props.animation.offset} 100;
              stroke-linecap: round;
            }
          }
        }
      }

      text {
        fill: ${color.grey.dark};
        font-size: 0;
        text-anchor: middle;
        animation: ${`anim-text-${props.animation.key} ${props.animation.duration * 500}ms ${props.animation.delay * 1000}ms forwards`};

        @keyframes anim-text-${props.animation.key} {
          to {
            font-size: 0.65rem;
            font-size: 0.75rem;
          }
        }
      }
    }

    span {
      overflow: hidden;
      display: block;
      width: 100%;
      height: 40px;
      margin: 12px 0;
      color: ${color.black};
      font-size: 1.35rem !important;
      font-weight: 500;
      line-height: 1em;
      text-align: center;
    }
  `};
`;

export default StyledChartCircle;
