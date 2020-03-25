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
    display: block !important;
    width: 33.33%;
    text-align: center;

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
          animation: ${`anim-chart-${props.index} 1500ms ${props.index && props.index * 300}ms ease-out forwards`};

          @keyframes anim-chart-${props.index} {
            from {
              stroke-linecap: round;
            }
            to {
              stroke-dasharray: ${props.percent - 3} 100;
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
  `};
`;

export default StyledChartCircle;
