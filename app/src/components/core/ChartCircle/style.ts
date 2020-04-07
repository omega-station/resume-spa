import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color } from '../../../utility/constant';
import { PropsStyled as Props } from './definition';

const getColor = (percent: number): string => {
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
          stroke: ${getColor(props.percent)};
          stroke-dasharray: 0 100;
          stroke-width: 3;

          ${props.isWaypoint &&
            css`
          animation: ${`anim-chart-${props.animation.index} ${props.animation.duration * 1000}ms ${props.animation.delay * 1000}ms ease-out forwards`};

          @keyframes anim-chart-${props.animation.index} {
            from {
              stroke-linecap: round;
            }
            to {
              stroke-dasharray: ${props.percent - props.animation.percent} 100;
              stroke-linecap: round;
            }
          }
          `}
        }
      }

      text {
        fill: ${color.grey.dark};
        font-size: 0.65rem;
        text-anchor: middle;
        transform: translate(18px, 21px);
      }
    }

    span {
      color: ${color.black};
      font-size: 1.35rem !important;
      font-weight: 500;
    }
  `};
`;

export default StyledChartCircle;
