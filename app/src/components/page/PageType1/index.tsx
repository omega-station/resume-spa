import React, { useEffect, useRef, useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
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
import { resetSection, setClass, setPageKeys, setSection, setSectionKeys } from './utility/keydown';
import { getTyped } from './utility/typed';

const PageType1 = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.GLOBAL);

  const mode: RefString = useRef('section');
  const page: RefNumber = useRef(0);
  const section: RefNumber = useRef(0);
  const [sectionIndex, setSectionIndex] = useState<number>(-1);
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isWindowOpen) {
        const el: Element = document.querySelector('.window-section');
        el?.contains(e.target as Node) === false && setIsWindowOpen(false);
      }
    };

    const handleResize = (): void => {
      resetSection(-1, setSectionIndex, setIsWindowOpen);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isWindowOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      [32, 37, 38, 39, 40].includes(e.keyCode) && e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setClass('section', sectionIndex, true);

    const handleKeyDown = (e: KeyboardEvent): void => {
      setPageKeys(e, page, mode);
      setSectionKeys(e, section, mode, sectionIndex, setSectionIndex, setIsWindowOpen);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sectionIndex]);

  const onClickMenu = (index: number): void => {
    setSection(index, section, mode, setSectionIndex, setIsWindowOpen);
  };

  const onClickWindow = (): void => {
    resetSection(-1, setSectionIndex, setIsWindowOpen);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  const typed = getTyped(sectionIndex, data.options.resume);

  return (
    <StyledPage>
      <GitHubCorner color={color.pagetype[1].green.medium} />
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
