import { Element, RefNumber, RefString } from '../../../../utility/definition';

export const setClass = (type: string, index: number, isCurrent: boolean = false): void => {
  // console.log('setClass', type, index, isCurrent);
  const selector = `is-${isCurrent ? 'current' : 'selected'}`;
  document.querySelectorAll(`.menu-${type} li`).forEach(el => el.classList.remove(selector));
  document.querySelector(`.menu-${type}-${index}`)?.classList.add(selector);
};

export const setCurrentSection = (index: number, section: RefNumber, mode: RefString, setCurrentSectionIndex: Function, setIsWindowOpen: Function): void => {
  section.current = index;
  mode.current = 'section';
  setClass('section', index);
  setCurrentSectionIndex(index);
  setIsWindowOpen(false);
  setTimeout((): void => {
    setIsWindowOpen(true);
  }, 0);
};

export const setPageKeys = (e: KeyboardEvent, page: RefNumber, mode: RefString): void => {
  setMenuKeys('page', mode, page, e, 'ArrowLeft', 'ArrowRight', 0, 3);
};

export const setSectionKeys = (
  e: KeyboardEvent,
  section: RefNumber,
  mode: RefString,
  currentSectionIndex: number,
  setCurrentSectionIndex: Function,
  setIsWindowOpen: Function
): void => {
  const key: number = parseInt(e.key);

  if (key >= 1 && key <= 7) {
    setCurrentSection(key - 1, section, mode, setCurrentSectionIndex, setIsWindowOpen);
  }

  setMenuKeys('section', mode, section, e, 'ArrowUp', 'ArrowDown', 0, 6, currentSectionIndex, setCurrentSectionIndex, setIsWindowOpen);
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
  currentSectionIndex?: number,
  setCurrentSectionIndex?: Function,
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
    // console.log('setMenuKeys :: trigger', type, index.current, currentSectionIndex?.current);

    if (type === 'page') {
      const link: Element = document.querySelector('.menu-page li.is-selected a');
      link?.click();
    }

    console.log('setMenuKeys :: trigger', type, index.current, currentSectionIndex);
    if (type === 'section' && index.current !== currentSectionIndex && setCurrentSectionIndex && setIsWindowOpen) {
      // console.log('setMenuKeys :: trigger', type, index.current, currentSectionIndex);
      setCurrentSectionIndex(index.current);
      setIsWindowOpen(false);
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

    if (type === 'section' && setCurrentSectionIndex && setIsWindowOpen) {
      setCurrentSectionIndex(-1);
      setIsWindowOpen(false);
    }

    setClass(type, index.current);
  }
};
