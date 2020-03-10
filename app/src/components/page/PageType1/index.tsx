import React, { useEffect, useRef } from 'react';
import { color } from '../../../utility/constant';
import GitHubCorner from '../../core/GitHubCorner';
import MenuSection from '../../core/MenuSection';
import defaults from '../Page/defaults';
import { PropsPageType as Props } from '../Page/definition';
import Footer from './components/Footer';
import Header from './components/Header';
import Typed from './components/Typed';
import Window from './components/Window';
import StyledPage from './style';
import { getTyped } from './utility/typed';
import { RefMenu, RefMode, setPageKeys, setSectionKeys } from './utility/useeffect';

const PageType1 = (props: Props): JSX.Element => {
  const { data }: Props = { ...defaults, ...props };
  const resume = data && data.options.resume;

  const mode: RefMode = useRef('section');
  const page: RefMenu = useRef(0);
  const section: RefMenu = useRef(0);

  section.current = 1;
  const typed = getTyped(section, resume);

  const onMenuClick = (i: number): any => {
    // console.log('onMenuClick', i);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      setPageKeys(e, page, mode);
      setSectionKeys(e, section, mode);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <StyledPage>
      <GitHubCorner color={color.pagetype[1].solid.green} fill={color.alpha.black} />
      <Header data={data} />
      <main>
        <MenuSection data={data} isIndexed={true} onMenuClick={onMenuClick} />
        <Window heading={typed.heading}>
          <Typed strings={[typed.strings]} />
        </Window>
      </main>
      <Footer data={data} />
    </StyledPage>
  );
};

export default PageType1;
