import { css, SerializedStyles } from '@emotion/core';
import { viewport, color, padding as _padding, transition as _transition } from '../constant';

export const backgroundStriped = (stripe: string = 'green'): SerializedStyles => css`
  ${stripe === 'black' &&
    css`
      background-image: linear-gradient(
        0deg,
        ${color.green.dark2} 25%,
        ${color.black} 25%,
        ${color.black} 50%,
        ${color.green.dark2} 50%,
        ${color.green.dark2} 75%,
        ${color.black} 75%,
        ${color.black} 100%
      );
    `}

  ${stripe === 'green' &&
    css`
      background-image: linear-gradient(
        0deg,
        ${color.green.medium} 25%,
        ${color.black} 25%,
        ${color.black} 50%,
        ${color.green.medium} 50%,
        ${color.green.medium} 75%,
        ${color.black} 75%,
        ${color.black} 100%
      );
    `}

  ${stripe === 'light-green' &&
    css`
      background-image: linear-gradient(
        0deg,
        ${color.green.light} 25%,
        ${color.black} 25%,
        ${color.black} 50%,
        ${color.green.light} 50%,
        ${color.green.light} 75%,
        ${color.black} 75%,
        ${color.black} 100%
      );
    `}

  background-size: 4px 4px;
`;

export const border = (width: number = 1, isInverse: boolean = false): SerializedStyles => css`
  border: ${`${width}px solid ${color.black}`};
  padding: 2px;

  ${isInverse === false &&
    css`
      border-bottom-color: ${color.grey.medium2};
      border-right-color: ${color.grey.medium2};
    `}

  ${isInverse === true &&
    css`
      border-top-color: ${color.grey.medium2};
      border-left-color: ${color.grey.medium2};
    `}
`;

export const boxShadow = (
  offsetX: number = 0,
  offsetY: number = 0,
  radiusBlur: number = 3,
  radiusSpread: number = 0,
  alpha: number = 0.3,
  isInset: boolean = false
): SerializedStyles => css`
  box-shadow: ${`${offsetX}px ${offsetY}px ${radiusBlur}px ${radiusSpread}px rgba(0, 0, 0, ${alpha}) ${isInset ? 'inset' : ''}`};
`;

export const defaults = (type: string = 'page', maxWidth: string = 'none'): SerializedStyles => css`
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

export const hover = (padding: number = 2, border: number = 2): SerializedStyles => css`
  padding-bottom: ${`${padding}px`};
  border-bottom: ${`${border}px solid transparent`};
  transition: border-bottom ${_transition.duration} ease-in-out;

  &:hover {
    border-bottom-color: inherit;
  }
`;

type Padding = null | number | string | (number | string)[];
export const padding = (top: Padding = 0, bottom: Padding = null, sides: Padding = null): SerializedStyles => {
  const getArray = (value: Padding): null | (number | string)[] => (typeof value === 'number' || typeof value === 'string' ? Array(2).fill(value) : value);
  const _top = getArray(top);
  const _bottom = getArray(bottom);
  const _sides = getArray(sides);

  return css`
    padding: ${_top && _top[0]} ${_sides && _sides[0] !== 0 ? _sides[0] : _padding.mobile} ${_bottom && _bottom[0]};
    transition: padding ${_transition.duration} ease-in-out;

    @media (min-width: ${viewport.tablet.landscape[0]}) {
      padding: ${_top && _top[1]} ${_sides && _sides[1] !== 0 ? _sides[1] : _padding.desktop} ${_bottom && _bottom[1]};
    }
  `;
};

export const transition = (property: string, duration: number = _transition.duration, ease: string = 'ease-in-out'): SerializedStyles => css`
  transition: ${`${property} ${duration}ms ${ease}`};
`;
