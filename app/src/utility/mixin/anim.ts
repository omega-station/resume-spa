import { css, SerializedStyles } from '@emotion/core';
import 'animate.css/animate.css';
import { section, viewport } from '../constant';

export const animColorCycle: SerializedStyles = css`
  animation: anim-color-cycle 800ms infinite;
  @keyframes anim-color-cycle {
    0% {
      fill: #80f31f;
    }
    5% {
      fill: #a5de0b;
    }
    10% {
      fill: #c7c101;
    }
    15% {
      fill: #e39e03;
    }
    20% {
      fill: #f6780f;
    }
    25% {
      fill: #fe5326;
    }
    30% {
      fill: #fb3244;
    }
    35% {
      fill: #ed1868;
    }
    40% {
      fill: #d5078e;
    }
    45% {
      fill: #b601b3;
    }
    50% {
      fill: #9106d3;
    }
    55% {
      fill: #6b16ec;
    }
    60% {
      fill: #472ffa;
    }
    65% {
      fill: #2850fe;
    }
    70% {
      fill: #1175f7;
    }
    75% {
      fill: #039be5;
    }
    80% {
      fill: #01beca;
    }
    85% {
      fill: #0adca8;
    }
    90% {
      fill: #1df283;
    }
    95% {
      fill: #3afd5d;
    }
    100% {
      fill: #5cfd3a;
    }
  }
`;

export const animOctoarm: SerializedStyles = css`
  animation: anim-octoarm 700ms ease-out infinite;
  @keyframes anim-octoarm {
    0%,
    75%,
    100% {
      transform: rotate(0);
    }
    35% {
      transform: rotate(-25deg);
    }
    85% {
      transform: rotate(10deg);
    }
  }
`;

export const animListItem = (name: string, count: number, width: number | string = 0, duration: number = 700, delay: number = 500, hasBounce = true) => {
  return css`
    ${Array(count)
      .fill(0)
      .map((item: string, i: number): string => {
        const delay0 = i * delay;
        const delay1 = delay0 + duration;
        return `li:nth-of-type(${i + 1}) .item-icon {
        animation: anim-list-${name} ${duration}ms ${delay0}ms ease-in-out forwards
                   ${hasBounce ? `, bounceIn ${duration}ms ${delay1}ms ease-in-out forwards` : ''};
        }`;
      })
      .join('')};

    @keyframes ${`anim-list-${name}`} {
      to {
        width: ${width};
      }
    }
  `;
};

export const animSlideIn = (direction: string, offset: number, duration: number, delay: number): SerializedStyles => css`
  @media (min-width: ${viewport.mobile[2]}) {
    animation: ${`anim-slidein ${duration}ms ${delay}ms ease-in-out forwards`};
    transform: ${`translate${direction}(${offset}px)`};
    @keyframes anim-slide-in {
      to {
        transform: translateX(0);
      }
    }
  }
`;

export const animSlideUp = (delay: number = 300, duration: number = 1500): SerializedStyles => css`
  @media (min-width: ${viewport.mobile[2]}) {
    position: relative;
    opacity: 0;
    ${section.map((item: string, i: number): string => `&:nth-of-type(${i + 1}) { animation: anim-slideup ${duration}ms ${delay * i}ms forwards; }`).join('')};
    @keyframes anim-slideup {
      from {
        opacity: 0;
        top: 150px;
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
  }
`;
