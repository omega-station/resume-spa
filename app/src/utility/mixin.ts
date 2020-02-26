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

export const backgroundStriped = (color1: string = color.pagetype[1].solid.green, color2: string = color.solid.black): SerializedStyles => css`
  background-image: linear-gradient(0deg, ${color1} 25%, ${color2} 25%, ${color2} 50%, ${color1} 50%, ${color1} 75%, ${color2} 75%, ${color2} 100%);
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
