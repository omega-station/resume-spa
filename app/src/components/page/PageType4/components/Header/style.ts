import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { color, viewport } from '../../../../../utility/constant';
import { boxShadow, padding, transition } from '../../../../../utility/mixin';
import { PropsStyled as Props } from './definition';

const animHeader = css`
  animation: anim-slidein 1s ease-in-out 0.5s forwards;
  @keyframes anim-slidein {
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledHeader = styled.header<Props>`
  ${animHeader};
  ${transition('height')};
  overflow: hidden;
  transform: ${props => `translateY(-${props.isMobile ? 300 : 240}px)`};

  &,
  .content {
    height: ${props => `${props.isMobile ? 300 : 240}px`};
  }

  .parallax-banner-layer-0 {
    transform: rotate(180deg);
  }

  .content {
    ${padding('0px', '0px', ['4.5%', '100px'])}
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: height 300ms ease-in-out, padding 300ms ease-in-out;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 66.66%;
      width: 70%;
      margin: 0;

      h1,
      h2 {
        display: block;
        width: 240px;
        text-shadow: 0 1px 2px ${getRGBA(color.black, 0.4)};
      }

      h1 {
        font-size: 4.5rem;
        font-weight: 500;
        line-height: 0.8em;
        color: ${color.red.medium};
      }

      h2 {
        margin: 0 0 0 4px;
        font-size: 2.1rem;
        font-size: 1.87rem;
        letter-spacing: 0.11em;
        line-height: 1em;
        color: ${color.black};
      }

      @media (min-width: ${viewport.tablet.landscape[1]}) {
        position: relative;
        top: 10px;

        h1,
        h2 {
          width: 100%;
        }

        h1 {
          font-size: 5rem;
          line-height: 0.3em;
        }

        h2 {
          font-size: 2.5rem;
          line-height: 1.4em;
        }
      }
    }

    > nav {
      width: 33.33%;
      width: 30%;
      width: auto;
      margin: 0 4.5% 0 0;

      @media (min-width: ${viewport.mobile[4]}) {
        width: 400px;

        ul {
          flex-direction: row !important;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: -5px;

        @media (min-width: ${viewport.mobile[4]}) {
          top: 0;
        }

        li {
          ${boxShadow(0, 0, 4, 0, 0.4)};
          background-color: ${color.red.dark};

          &:not(:last-of-type) {
            position: relative;
            margin: 0;
            padding: 10px;
            border-radius: 50%;
            transform: scale(0.8);
            transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
            z-index: 100;

            &.is-current,
            &:not(.is-current):hover {
              background-color: ${color.red.medium};

              a {
                top: 1px;
              }
            }

            &.is-current {
              transform: scale(0.85);
            }

            @media (min-width: ${viewport.mobile[4]}) {
              transform: scale(1);

              &.is-current,
              &:not(.is-current):hover {
                transform: scale(1.4);
              }
            }
          }

          &:last-of-type {
            position: absolute;
            top: 5%;
            left: auto;
            width: 6px;
            height: 90%;
            z-index: 0;

            @media (min-width: ${viewport.mobile[4]}) {
              top: auto;
              left: 5%;
              width: 90%;
              height: 6px;
            }
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
