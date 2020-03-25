import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color } from '../../../../../utility/constant';
import { boxShadow, padding } from '../../../../../utility/mixin';
import { getRGBA } from '../../../../../utility';

const animHeader = css`
  animation: anim-slidein 1s ease-in-out 0.5s forwards;
  @keyframes anim-slidein {
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledHeader = styled.header`
  ${animHeader};
  height: 300px;
  overflow: hidden;
  background-color: ${color.white};
  transform: translateY(-300px);

  .parallax-banner-layer-0 {
    transform: rotate(180deg);
  }

  .content {
    ${padding('120px', '90px', ['4.5%', '100px'])};
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 100;

    > div {
      width: 66.66%;

      h1,
      h2 {
        text-shadow: 0 1px 2px ${getRGBA(color.black, 0.4)};
      }

      h1 {
        font-size: 5rem;
        font-weight: 500;
        line-height: 0.3em;
        color: ${color.red.medium};
      }

      h2 {
        margin: 0 0 0 4px;
        font-size: 2.5rem;
        letter-spacing: 0.11em;
        line-height: 1.4em;
        color: ${color.red.dark};
        color: ${color.black};
      }
    }

    > nav {
      width: 33.33%;

      ul {
        position: relative;
        align-items: center;

        li {
          ${boxShadow(0, 0, 4, 0, 0.4)};
          background-color: ${color.red.dark};

          &:not(:last-of-type) {
            position: relative;
            padding: 6px;
            border-radius: 50%;
            transition: background-color 300ms ease-in-out, transform 180ms ease-in-out;
            z-index: 100;

            &.is-current,
            &:not(.is-current):hover {
              background-color: ${color.red.medium};
              transform: scale(1.3);
            }
          }

          &:last-of-type {
            position: absolute;
            left: 5%;
            width: 90%;
            height: 6px;
            z-index: 0;
          }

          a {
            position: relative;
            top: 2px;
            color: ${color.white};
          }
        }
      }
    }
  }
`;

export default StyledHeader;
