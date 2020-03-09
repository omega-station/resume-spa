import React, { MutableRefObject, useEffect, useRef } from 'react';
import { color } from '../../../utility/constant';
import GitHubCorner from '../../core/GitHubCorner';
import MenuSection from '../../core/MenuSection';
import { PropsPageType as Props } from '../Page/definition';
import Footer from './Footer';
import Header from './Header';
import StyledPage from './style';

const PageType1 = (props: Props): JSX.Element => {
  const { data }: Props = props;
  const refPage: MutableRefObject<number> = useRef(0);
  const refSection: MutableRefObject<number> = useRef(0);

  const getElement = (type: string, i: number): HTMLElement | null => {
    const selector: string = `.menu-${type}-${i}`;
    const el: HTMLElement | null = document.querySelector(selector);
    return el;
  };

  const setArrowKeys = (
    type: string,
    key: string,
    ref: MutableRefObject<number>,
    key1: string,
    key2: string,
    limitLower: number,
    limitUpper: number,
    setSelected: Function
  ): void => {
    if (key === key1 && --ref.current < limitLower) {
      ref.current = limitUpper;
    }
    if (key === key2 && ++ref.current > limitUpper) {
      ref.current = limitLower;
    }
    setSelected(type, ref);
  };

  const onMenuClick = (i: number): any => {
    // console.log('onMenuClick', i);
  };

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      const key: number = parseInt(e.key);
      // console.log(e.key, e.keyCode);

      const setSelected = (type: string, ref: MutableRefObject<number>): void => {
        console.log('setSelected', type, `.menu-${type} li`, ref);
        document.querySelectorAll(`.menu-${type} li`).forEach(el => el.classList.remove('is-selected'));
        const el: HTMLElement | null = getElement(type, ref.current);
        el && el.classList.add('is-selected');
      };

      setArrowKeys('page', e.key, refPage, 'ArrowLeft', 'ArrowRight', 1, 3, setSelected);
      setArrowKeys('section', e.key, refSection, 'ArrowUp', 'ArrowDown', 0, 6, setSelected);

      if (key >= 1 && key <= 7) {
        // console.log('onKeyDown', key);
        refSection.current = key - 1;
        const el: HTMLElement | null = getElement('section', key - 1);
        el && el.click && el.click();
        setSelected('section', refSection);
      }

      if (key === 0 || e.key === 'Esc' || e.key === 'Escape' || e.keyCode === 27) {
        // console.log('onKeyDown', key, e.key, e.keyCode);
      }
    });
  }, [refPage, refSection]);

  return (
    <StyledPage>
      <GitHubCorner color={color.pagetype[1].solid.green} fill={color.alpha.black} />
      <Header data={data} />
      <main>
        <MenuSection data={data} isIndexed={true} onMenuClick={onMenuClick} />
      </main>
      <Footer data={data} />
    </StyledPage>
  );
};

export default PageType1;
