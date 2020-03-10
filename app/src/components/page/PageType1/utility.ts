import { MutableRefObject } from 'react';

type Element = HTMLElement | null;

export type RefMenu = MutableRefObject<number>;
export type RefMode = MutableRefObject<string>;

export const setPageKeys = (e: KeyboardEvent, refMenu: RefMenu, refMode: RefMode): void => {
  setMenuKeys('page', e, refMenu, refMode, 'ArrowLeft', 'ArrowRight', 0, 3);
};

export const setSectionKeys = (e: KeyboardEvent, refMenu: RefMenu, refMode: RefMode): void => {
  const key: number = parseInt(e.key);

  if (key >= 1 && key <= 7) {
    refMenu.current = key - 1;
    setSelected('section', refMenu, refMode);
  }

  setMenuKeys('section', e, refMenu, refMode, 'ArrowUp', 'ArrowDown', 0, 6);
};

const getElement = (type: string, refMenu: RefMenu): Element => {
  const selector: string = `.menu-${type}-${refMenu.current}`;
  return document.querySelector(selector);
};

const setSelected = (type: string, refMenu: RefMenu, refMode: RefMode, isReset: boolean = false): void => {
  // console.log('setSelected', `.menu-${type} li`, refMenu && refMenu.current);
  document.querySelectorAll(`.menu-${type} li`).forEach(el => el.classList.remove('is-selected'));
  if (isReset === false) {
    const el: Element = getElement(type, refMenu);
    el && el.classList.add('is-selected');
  }
  refMode.current = type;
};

const setMenuKeys = (
  type: string,
  e: KeyboardEvent,
  refMenu: RefMenu,
  refMode: RefMode,
  key1: string,
  key2: string,
  limitLower: number,
  limitUpper: number
): void => {
  const key: number = parseInt(e.key);

  // arrow keys
  if (e.key === key1 || e.key === key2) {
    console.log('setMenuKeys :: arrows', type, refMenu.current);
    e.key === key1 && --refMenu.current < limitLower && (refMenu.current = limitUpper);
    e.key === key2 && ++refMenu.current > limitUpper && (refMenu.current = limitLower);
    setSelected(type, refMenu, refMode);
  }

  // trigger event
  if (type === refMode.current && e.keyCode === 13) {
    console.log('setMenuKeys :: trigger', type, refMenu.current);

    if (type === 'page') {
      const link: Element = document.querySelector('.menu-page li.is-selected a');
      link && link.click && link.click();
    }
  }

  // reset menu
  if (type === refMode.current && (key === 0 || e.key === 'Esc' || e.key === 'Escape' || e.keyCode === 27)) {
    refMenu.current = type === 'page' ? 0 : -1;
    setSelected(type, refMenu, refMode, type !== 'page');
    console.log('setMenuKeys :: reset', type, refMenu.current);
  }
};
