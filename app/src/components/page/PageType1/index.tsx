import React, { useEffect, useRef, useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { color } from '../../../utility/constant';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../../core/Error';
import GitHubCorner from '../../core/GitHubCorner';
import Loading from '../../core/Loading';
import MenuSection from '../../core/MenuSection';
import { PropsPageType as Props } from '../Page/definition';
import Footer from './components/Footer';
import Header from './components/Header';
import Typed from './components/Typed';
import Window from './components/Window';
import StyledPage from './style';
import { getTyped } from './utility/typed';
import { Element, RefNumber, RefString, setPageKeys, setSectionKeys, setClass } from './utility/useeffect';

const PageType1 = (props: Props): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.GLOBAL);

  const mode: RefString = useRef('section');
  const page: RefNumber = useRef(0);
  const section: RefNumber = useRef(0);
  const [current, setCurrent] = useState(-1);
  const [isWindow, setIsWindow] = useState(false);

  const onMenuClick = (index: number): void => {
    console.log('onMenuClick', index);
    mode.current = 'section';
    section.current = index;
    setClass('section', index);
    setCurrent(index);
    setIsWindow(false);
    setTimeout((): void => {
      setIsWindow(true);
    }, 0);
  };

  useEffect(() => {
    // console.log('useEffect firing... current:', current);
    setClass('section', current, true);

    const handleKeyDown = (e: KeyboardEvent): void => {
      setPageKeys(e, page, mode);
      setSectionKeys(e, section, mode, current, setCurrent, setIsWindow);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current]);

  useEffect(() => {
    const handlerClick = (e: MouseEvent) => {
      if (isWindow) {
        const el: Element = document.querySelector('.window-section');
        el?.contains(e.target as Node) === false && setIsWindow(false);
      }
    };

    window.addEventListener('click', handlerClick);
    return () => window.removeEventListener('click', handlerClick);
  }, [isWindow]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const typed = getTyped(current, data.options.resume);

  return (
    <StyledPage>
      <GitHubCorner color={color.pagetype[1].solid.green} fill={color.alpha.black} />
      <Header />
      <main>
        <MenuSection isIndexed={true} onMenuClick={onMenuClick} />
        {isWindow && (
          <Window heading={typed.heading}>
            <Typed strings={[typed.strings]} />
          </Window>
        )}
      </main>
      <Footer />
    </StyledPage>
  );
};

export default PageType1;
