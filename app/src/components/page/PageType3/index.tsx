import React, { useEffect, useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { TagCloud } from 'react-tagcloud';
import { getIconProp } from '../../../utility';
import FontAwesomeIcon from '../../../utility/font-awesome';
import Error from '../../core/Error';
import GitHubCorner from '../../core/GitHubCorner';
import Link from '../../core/Link';
import Loading from '../../core/Loading';
import Section from '../../core/Section';
import Footer from './components/Footer';
import Header from './components/Header';
import { gqlAside, gqlResume, GQL_QUERY } from './graphql';
import StyledPage from './style';

const PageType3 = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);
  const [section, setSection] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const width = window.screen.width;
  const height = window.screen.height;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [section]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.screen.width !== width || window.screen.height !== height) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, width, height]);

  const handleClickMenuToogle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  const pageContent: gqlAside = data.options.pageContent;
  const sections: gqlResume = data.options.resume.metaSections;
  const resume: gqlResume = data.options.resume.referencesResume[0];
  const skillset: gqlResume = data.options.resume.skillsetProficiency;

  const cloud = {
    colorOptions: { hue: 'white', luminosity: 'dark' },
    maxSize: 23,
    minSize: 14,
    tags: skillset.filter((x: any) => x.isTagcloud),
  };

  return (
    <StyledPage>
      <GitHubCorner />
      <div>
        <Header section={section} isMenuOpen={isMenuOpen} onClickMenuItem={setSection} onClickMenuToggle={handleClickMenuToogle} />
        <main>
          <aside>
            <div>
              <h4>{pageContent.pagetype3AsideHeading[0].heading}</h4>
              <TagCloud minSize={cloud.minSize} maxSize={cloud.maxSize} shuffle={true} tags={cloud.tags} colorOptions={cloud.colorOptions} />
            </div>
            <div>
              <h4>{pageContent.pagetype3AsideHeading[1].heading}</h4>
              <Link url={resume.pdf.mediaItemUrl} title={pageContent.pagetype3AsideHeading[1].heading}>
                <>
                  <FontAwesomeIcon icon={getIconProp(pageContent.pagetype3AsideIcon[0].icon)} />
                  <FontAwesomeIcon icon={getIconProp(pageContent.pagetype3AsideIcon[1].icon)} />
                </>
              </Link>
            </div>
          </aside>
          <div>
            <Section pagetype={3} section={sections[section].name} />
          </div>
        </main>
        <Footer />
      </div>
    </StyledPage>
  );
};

export default PageType3;
