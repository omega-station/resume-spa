import { MutableRefObject } from 'react';

export type Element = HTMLElement | null;
export type RefNumber = MutableRefObject<number>;
export type RefString = MutableRefObject<string>;

export const setPageKeys = (e: KeyboardEvent, index: RefNumber, mode: RefString): void => {
  setMenuKeys('page', mode, index, e, 'ArrowLeft', 'ArrowRight', 0, 3);
};

export const setSectionKeys = (e: KeyboardEvent, index: RefNumber, mode: RefString, current: number, setCurrent: Function, setIsWindow: Function): void => {
  const key: number = parseInt(e.key);

  if (key >= 1 && key <= 7) {
    index.current = key - 1;
    mode.current = 'section';
    setClass('section', index.current);
  }

  setMenuKeys('section', mode, index, e, 'ArrowUp', 'ArrowDown', 0, 6, current, setCurrent, setIsWindow);
};

export const setClass = (type: string, index: number, isCurrent: boolean = false): void => {
  // console.log('setClass', type, index, isCurrent);
  const selector = `is-${isCurrent ? 'current' : 'selected'}`;
  document.querySelectorAll(`.menu-${type} li`).forEach(el => el.classList.remove(selector));
  document.querySelector(`.menu-${type}-${index}`)?.classList.add(selector);
};

const setMenuKeys = (
  type: string,
  mode: RefString,
  index: RefNumber,
  e: KeyboardEvent,
  key1: string,
  key2: string,
  limitLower: number,
  limitUpper: number,
  current?: number,
  setCurrent?: Function,
  setIsWindow?: Function
): void => {
  //

  // arrow keys
  if (e.key === key1 || e.key === key2) {
    // console.log('setMenuKeys :: arrows', type, index);
    e.key === key1 && --index.current < limitLower && (index.current = limitUpper);
    e.key === key2 && ++index.current > limitUpper && (index.current = limitLower);
    mode.current = type;
    setClass(type, index.current);
  }

  // trigger: enter/13 space/32
  if (type === mode.current && [13, 32].includes(e.keyCode)) {
    // console.log('setMenuKeys :: trigger', type, index.current, current?.current);

    if (type === 'page') {
      const link: Element = document.querySelector('.menu-page li.is-selected a');
      link?.click();
    }

    console.log('setMenuKeys :: trigger', type, index.current, current);
    if (type === 'section' && index.current !== current && setCurrent && setIsWindow) {
      // console.log('setMenuKeys :: trigger', type, index.current, current);
      setCurrent(index.current);
      setIsWindow(false);
      setTimeout((): void => {
        setIsWindow(true);
      }, 0);
    }
  }

  // reset: esc/27 zero/48
  if (type === mode.current && [27, 48].includes(e.keyCode)) {
    if (type === 'page') {
      index.current = 0;
    }

    if (type === 'section' && setCurrent && setIsWindow) {
      setCurrent(-1);
      setIsWindow(false);
    }

    setClass(type, index.current);
  }
};
