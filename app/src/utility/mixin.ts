import { css, SerializedStyles } from '@emotion/core';
import { breakpoint, color, padding as _padding, transition as _transition } from './constant';

export const animation = (name: string = 'slideup', duration: string = '1500ms', fillmode: string = 'forwards'): SerializedStyles => css`
  @media (min-width: 480px) {
    position: relative;
    opacity: 0;
    animation-name: ${name};
    animation-duration: ${duration};
    animation-fill-mode: ${fillmode};
  }
`;

const black: string = color.core.black;
const green: { [key: string]: string } = {
  light: color.pagetype[1].green.light,
  medium: color.pagetype[1].green.medium,
  dark: color.pagetype[1].green.dark2,
};

export const backgroundStriped = (color: string = 'green'): SerializedStyles => css`
  ${color === 'black' &&
    css`
      background-image: linear-gradient(0, ${green.dark} 25%, ${black} 25%, ${black} 50%, ${green.dark} 50%, ${green.dark} 75%, ${black} 75%, ${black} 100%);
    `}

  ${color === 'green' &&
    css`
      background-image: linear-gradient(
        0,
        ${green.medium} 25%,
        ${black} 25%,
        ${black} 50%,
        ${green.medium} 50%,
        ${green.medium} 75%,
        ${black} 75%,
        ${black} 100%
      );
    `}

  ${color === 'light-green' &&
    css`
      background-image: linear-gradient(0, ${green.light} 25%, ${black} 25%, ${black} 50%, ${green.light} 50%, ${green.light} 75%, ${black} 75%, ${black} 100%);
    `}

  background-size: 4px 4px;
`;

export const border = (width = '1px', isInverse = false) => css`
  border: ${width} solid ${color.core.black};
  padding: 2px;

  ${isInverse === false &&
    css`
      border-bottom-color: ${color.core.grey.medium2};
      border-right-color: ${color.core.grey.medium2};
    `}

  ${isInverse === true &&
    css`
      border-top-color: ${color.core.grey.medium2};
      border-left-color: ${color.core.grey.medium2};
    `}
`;

export const boxShadow = (
  offsetX: number | string = 0,
  offsetY: number | string = 0,
  radiusBlur: number | string = '3px',
  radiusSpread: number | string = 0,
  alpha: number = 0.3,
  isInset: boolean = false
): SerializedStyles => css`
  box-shadow: ${isInset && 'inset'} ${offsetX} ${offsetY} ${radiusBlur} ${radiusSpread} rgba(0, 0, 0, ${alpha});
`;

export const defaults = (type = 'page', maxWidth: string = 'none'): SerializedStyles => css`
  ${type === 'page' &&
    css`
      position: relative;
      min-width: 320px;
      max-width: ${maxWidth};
      height: 100%;

      nav {
        user-select: none;
      }
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
  ${doPadding(isOnlySides, top, bottom, _padding.mobile)}
  transition: padding ${_transition.duration} ease-in-out;

  @media (min-width: ${breakpoint.desktop[0]}) {
    ${doPadding(isOnlySides, top, bottom, _padding.desktop)}
  }
`;

const doPadding = (isOnlySides: boolean, top: string, bottom: string, padding: string): SerializedStyles => css`
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
