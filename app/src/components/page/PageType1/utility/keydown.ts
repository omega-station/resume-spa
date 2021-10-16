import { Element, RefNumber, RefString } from 'utility/definition';

export const resetSection = (index: number, setSectionIndex: Function, setIsWindowOpen: Function): void => {
  setSectionIndex(index);
  setIsWindowOpen(false);
};

export const setClass = (type: string, index: number, isCurrent: boolean = false): void => {
  // console.log('setClass', type, index, isCurrent);
  const selector = `is-${isCurrent ? 'current' : 'selected'}`;
  document.querySelectorAll(`.menu-${type} li`).forEach(el => el.classList.remove(selector));
  document.querySelector(`.menu-${type}-${index}`)?.classList.add(selector);
};

export const setSection = (index: number, section: RefNumber, mode: RefString, setSectionIndex: Function, setIsWindowOpen: Function): void => {
  section.current = index;
  mode.current = 'section';
  resetSection(index, setSectionIndex, setIsWindowOpen);
  setClass('section', index);
  setTimeout((): void => {
    setIsWindowOpen(true);
  }, 0);
};

export const setPageKeys = (e: KeyboardEvent, page: RefNumber, mode: RefString): void => {
  setMenuKeys('page', mode, page, e, 'ArrowLeft', 'ArrowRight', 0, 3);
};

export const setSectionKeys = (e: KeyboardEvent, section: RefNumber, mode: RefString, sectionIndex: number, setSectionIndex: Function, setIsWindowOpen: Function): void => {
  const key: number = parseInt(e.key);

  if (key >= 1 && key <= 7) {
    setSection(key - 1, section, mode, setSectionIndex, setIsWindowOpen);
  }

  setMenuKeys('section', mode, section, e, 'ArrowUp', 'ArrowDown', 0, 6, sectionIndex, setSectionIndex, setIsWindowOpen);
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
  sectionIndex?: number,
  setSectionIndex?: Function,
  setIsWindowOpen?: Function
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
    // console.log('setMenuKeys :: trigger', type, index.current, sectionIndex?.current);

    if (type === 'page') {
      const link: Element = document.querySelector('.menu-page li.is-selected a');
      link?.click();
    }

    // console.log('setMenuKeys :: trigger', type, index.current, sectionIndex);
    if (type === 'section' && index.current !== sectionIndex && setSectionIndex && setIsWindowOpen) {
      // console.log('setMenuKeys :: trigger', type, index.current, sectionIndex);
      resetSection(index.current, setSectionIndex, setIsWindowOpen);
      setTimeout((): void => {
        setIsWindowOpen(true);
      }, 0);
    }
  }

  // reset: esc/27 zero/48
  if (type === mode.current && [27, 48].includes(e.keyCode)) {
    if (type === 'page') {
      index.current = 0;
    }

    if (type === 'section' && setSectionIndex && setIsWindowOpen) {
      resetSection(-1, setSectionIndex, setIsWindowOpen);
    }

    setClass(type, index.current);
  }
};
