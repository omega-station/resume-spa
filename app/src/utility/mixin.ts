import { css, SerializedStyles } from '@emotion/core';
import { breakpoint, color, global, transition as _transition } from './constant';

export const animation = (name: string = 'slideup', duration: string = '1500ms', fillmode: string = 'forwards'): SerializedStyles => css`
  @media (min-width: 480px) {
    position: relative;
    opacity: 0;
    animation-name: ${name};
    animation-duration: ${duration};
    animation-fill-mode: ${fillmode};
  }
`;

const black: string = color.solid.black;
const green: string = color.pagetype[1].solid.green;
const green2: string = color.pagetype[1].solid.green2;
const green3: string = color.pagetype[1].solid.green3;

export const backgroundStriped = (color: string = 'green'): SerializedStyles => css`
  ${color === 'black' &&
    css`
      background-image: linear-gradient(0deg, ${green2} 25%, ${black} 25%, ${black} 50%, ${green2} 50%, ${green2} 75%, ${black} 75%, ${black} 100%);
    `}

  ${color === 'green' &&
    css`
      background-image: linear-gradient(0deg, ${green} 25%, ${black} 25%, ${black} 50%, ${green} 50%, ${green} 75%, ${black} 75%, ${black} 100%);
    `}

  ${color === 'light-green' &&
    css`
      background-image: linear-gradient(0deg, ${green3} 25%, ${black} 25%, ${black} 50%, ${green3} 50%, ${green3} 75%, ${black} 75%, ${black} 100%);
    `}

  background-size: 4px 4px;
`;

export const border = (width = '1px', isInverse = false) => css`
  border: ${width} solid ${color.solid.black};
  padding: 2px;

  ${isInverse === false &&
    css`
      border-bottom-color: ${color.solid.grey.medium2};
      border-right-color: ${color.solid.grey.medium2};
    `}

  ${isInverse === true &&
    css`
      border-top-color: ${color.solid.grey.medium2};
      border-left-color: ${color.solid.grey.medium2};
    `}
`;

export const defaults = (type = 'page', maxWidth: string = 'none'): SerializedStyles => css`
  ${type === 'page' &&
    css`
      position: relative;
      min-width: 320px;
      max-width: ${maxWidth};
      height: 100%;
      background-color: ${color.solid.white};
    `}
`;

export const hover = (padding: string = '2px', border: string = '2px'): SerializedStyles => css`
  padding-bottom: ${padding};
  border-bottom: ${border} solid transparent;
  transition: border-bottom ${_transition.duration} ease-in-out;

  &:hover {
    border-bottom-color: inherit;
  }
`;

export const padding = (isOnlySides: boolean = false, top: string = '0', bottom: string = '0'): SerializedStyles => css`
  ${_padding(isOnlySides, top, bottom, global.padding.mobile)}
  transition: padding ${_transition.duration} ease-in-out;

  @media (min-width: ${breakpoint.desktop[0]}) {
    ${_padding(isOnlySides, top, bottom, global.padding.desktop)}
  }
`;

const _padding = (isOnlySides: boolean, top: string, bottom: string, padding: string): SerializedStyles => css`
  ${isOnlySides === true &&
    css`
      padding: ${top} ${padding} ${bottom};
    `}
  ${isOnlySides === false &&
    css`
      padding: ${top !== '0' ? top : padding} ${padding} ${bottom !== '0' ? bottom : padding};
    `}
`;

export const transition = (property: string, duration: string = _transition.duration, ease: string = 'ease-in-out'): SerializedStyles => css`
  transition: ${property} ${duration} ${ease};
`;
