import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { viewport, color } from '../../../../../utility/constant';
import { boxShadow, transition } from '../../../../../utility/mixin';
import { PropsStyled } from './definition';

const StyledHeader = styled.header<PropsStyled>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 960px;
  z-index: 500;

  nav {
    width: 100%;

    &:first-of-type {
      height: 35px;
      background-color: ${color.grey.dark};

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        @media (min-width: ${viewport.mobile[2]}) {
          justify-content: flex-end;
          padding: 0 20px 0 0;
        }

        li {
          &:not(:last-of-type) {
            margin: 0 10px 0 0;
          }

          a {
            ${boxShadow(0, 2, 4, 0, 0.3)};
            display: inline-block;
            padding: 3px 8px 2px;
            background-color: ${color.grey.dark};
            border: 1px solid ${color.grey.medium};
            border-radius: 5px;
            color: ${color.white};
            font-size: 0.8em;
            font-weight: 600;
            line-height: 1.3em;
            white-space: nowrap;
          }

          &.is-current a,
          a:hover {
            background-color: ${getRGBA(color.black, 0.5)};
          }
        }
      }
    }

    &:last-of-type {
      position: relative;
      ${boxShadow(0, 2, 3)};
      min-height: 35px;
      background-color: ${color.grey.dark};
      z-index: 100;

      ul {
        position: relative;
        width: 100%;
        min-height: inherit;
        padding: 0 20px 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        @media (min-width: 840px) {
          flex-direction: row;
          padding-bottom: 0;
        }

        li {
          display: none;
          width: 100%;
          height: 35px;
          padding: 10px 20px;
          color: ${color.white};
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1em;
          text-align: center;

          &:not(:first-of-type) {
            border-top: 1px solid ${color.grey.medium};
          }

          &:hover,
          &.is-current {
            color: ${color.red.medium};
          }

          &.is-current {
            cursor: default;
          }

          &.item-toggle {
            display: block;
            position: absolute;
            top: 0;
            right: 20px;
            width: auto;
            border: 0;
            padding: 7px 0 0;
            color: ${color.white} !important;
            font-size: 1.3rem;
          }

          @media (min-width: 840px) {
            display: block;
            width: auto;
            height: auto;
            padding: 0;
            border: 0 !important;
            font-size: 0.9rem;
            line-height: 1.1em;

            &:not(:first-of-type) {
              margin: 0 0 0 18px;
            }

            &.item-toggle {
              display: none;
            }
          }

          ${props =>
            props.isMenuOpen &&
            css`
              display: block;
            `}
        }
      }
    }
  }

  > div {
    position: relative;
    user-select: none;
    z-index: 200;

    > div {
      height: 100%;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.2);

      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &.overlay {
          background: rgb(0, 0, 0);
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%);
        }

        &.copy {
          h1,
          h2 {
            position: absolute;
            bottom: 12px;
            left: 20px;
            color: ${color.white};
            line-height: 0.92em;
          }

          h1 {
            margin: 0 0 10px;
            font-size: 1.95rem;
            font-weight: 700;

            @media (min-width: ${viewport.mobile[2]}) {
              margin: 0 0 2.325vw;
              font-size: 6.45vw;
            }

            @media (min-width: ${viewport.tablet.portrait[3]}) {
              margin: 0 0 20px;
              font-size: 3.675rem;
            }
          }

          h2 {
            margin: 0 0 0 2px;
            color: ${color.grey.medium};
            color: ${color.red.medium};
            font-size: 0.84rem;
            font-weight: 700;
            letter-spacing: 0.21em;

            @media (min-width: ${viewport.mobile[2]}) {
              margin: 0 0 0 0.4vw;
              font-size: 2.78vw;
            }

            @media (min-width: ${viewport.tablet.portrait[3]}) {
              margin: 0 0 0 4px;
              font-size: 1.58rem;
            }
          }
        }
      }

      img {
        ${transition('height')};
        display: block;
        width: 960px;
        height: 90px;
        object-fit: cover;

        @media (min-width: ${viewport.mobile[3]}) {
          height: 120px;
        }

        @media (min-width: ${viewport.tablet.portrait[0]}) {
          height: 160px;
        }
      }
    }
  }
`;

export default StyledHeader;
