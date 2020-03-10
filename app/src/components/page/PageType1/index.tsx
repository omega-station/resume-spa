import React, { useEffect, useRef } from 'react';
import { color } from '../../../utility/constant';
import GitHubCorner from '../../core/GitHubCorner';
import MenuSection from '../../core/MenuSection';
import { PropsPageType as Props } from '../Page/definition';
import Footer from './Footer';
import Header from './Header';
import StyledPage from './style';
import { RefMenu, RefMode, setPageKeys, setSectionKeys } from './utility';

const PageType1 = (props: Props): JSX.Element => {
  const { data }: Props = props;

  const mode: RefMode = useRef('section');
  const page: RefMenu = useRef(0);
  const section: RefMenu = useRef(0);

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
  }, [page, section, mode]);

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
