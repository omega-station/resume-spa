import React, { useEffect, useRef, useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { getRGBA } from '../../../utility';
import { color } from '../../../utility/constant';
import { Element, RefNumber, RefString } from '../../../utility/definition';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../../core/Error';
import GitHubCorner from '../../core/GitHubCorner';
import Loading from '../../core/Loading';
import MenuSection from '../../core/MenuSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Typed from './components/Typed';
import Window from './components/Window';
import StyledPage from './style';
import { getTyped } from './utility/typed';
import { setClass, setCurrentSection, setPageKeys, setSectionKeys } from './utility/keydown';

const PageType1 = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.GLOBAL);

  const mode: RefString = useRef('section');
  const page: RefNumber = useRef(0);
  const section: RefNumber = useRef(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(-1);
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isWindowOpen) {
        const el: Element = document.querySelector('.window-section');
        el?.contains(e.target as Node) === false && setIsWindowOpen(false);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isWindowOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      [32, 37, 38, 39, 40].includes(e.keyCode) && e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setClass('section', currentSectionIndex, true);

    const handleKeyDown = (e: KeyboardEvent): void => {
      setPageKeys(e, page, mode);
      setSectionKeys(e, section, mode, currentSectionIndex, setCurrentSectionIndex, setIsWindowOpen);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSectionIndex]);

  useEffect(() => {
    const handleResize = (): void => {
      setCurrentSectionIndex(-1);
      setIsWindowOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isWindowOpen]);

  const onClickMenu = (index: number): void => {
    console.log('onClickMenu', index);
    setCurrentSection(index, section, mode, setCurrentSectionIndex, setIsWindowOpen);
  };

  const onClickWindow = (): void => {
    setCurrentSectionIndex(-1);
    setIsWindowOpen(false);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  const typed = getTyped(currentSectionIndex, data.options.resume);

  return (
    <StyledPage>
      <GitHubCorner color={color.pagetype[1].green.medium} fill={getRGBA(color.core.black, 0.35)} />
      <Header />
      <main>
        <MenuSection isIndexed={true} onClickMenu={onClickMenu} />
        {isWindowOpen && (
          <Window heading={typed.heading} onClickClose={onClickWindow}>
            <Typed strings={[typed.strings]} />
          </Window>
        )}
      </main>
      <Footer />
    </StyledPage>
  );
};

export default PageType1;
