import React, { useEffect, useRef } from 'react';
import { color } from '../../../utility/constant';
import GitHubCorner from '../../core/GitHubCorner';
import MenuSection from '../../core/MenuSection';
import defaults from '../Page/defaults';
import { PropsPageType as Props } from '../Page/definition';
import Footer from './Footer';
import Header from './Header';
import StyledPage from './style';
import { RefMenu, RefMode, setPageKeys, setSectionKeys } from './utility';
import Window from './Window';
import Typed from './Typed';

const PageType1 = (props: Props): JSX.Element => {
  const { data }: Props = { ...defaults, ...props };
  const resume = data && data.options.resume;

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
  }, []);

  const aboutPoints = resume.aboutPoints.map((point: { item: string }) => `<li>${point.item}</li>`).join('');
  const interestsPoints = resume.interestsPoints.map((point: { item: string }) => `<li>${point.item}</li>`).join('');

  return (
    <StyledPage>
      <GitHubCorner color={color.pagetype[1].solid.green} fill={color.alpha.black} />
      <Header data={data} />
      <main>
        <MenuSection data={data} isIndexed={true} onMenuClick={onMenuClick} />
        <Window heading={resume.aboutHeading}>
          <Typed strings={[`<p>${resume.aboutIntro}</p>\n${aboutPoints}`]} />
        </Window>
        <Window heading={resume.interestsHeading}>
          <Typed strings={[`<p>${resume.interestsIntro}</p>\n${interestsPoints}`]} />
        </Window>
        <Window heading={resume.referencesHeading}>
          <Typed strings={[`<p>${resume.referencesIntro}</p>`]} />
        </Window>
        <Window heading={resume.metaHeading}>
          <Typed strings={[`<p>${resume.metaCopy}</p>`]} />
        </Window>
      </main>
      <Footer data={data} />
    </StyledPage>
  );
};

export default PageType1;
