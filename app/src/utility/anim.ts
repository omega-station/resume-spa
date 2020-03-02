import { css, SerializedStyles } from '@emotion/core';

const anim = (name: string): SerializedStyles => css`
  ${name === 'color-cycle' &&
    css`
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
    `}
`;

export default anim;
