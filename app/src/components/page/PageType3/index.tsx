import React, { useEffect, useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { TagCloud } from 'react-tagcloud';
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

  const resume: gqlAside = data.options.aside;
  const sections: gqlResume = data.options.resume.metaSections;

  const cloud = {
    colorOptions: { hue: 'white', luminosity: 'dark' },
    maxSize: 24,
    minSize: 14,
    tags: data.options.resume.skillsetProficiency.filter((x: any) => x.isTagcloud),
  };

  return (
    <StyledPage>
      <GitHubCorner isLeft={true} />
      <div>
        <Header section={section} isMenuOpen={isMenuOpen} onClickMenuItem={setSection} onClickMenuToggle={handleClickMenuToogle} />
        <main>
          <aside>
            <div>
              <h4>{resume.tagcloudHeading}</h4>
              <TagCloud minSize={cloud.minSize} maxSize={cloud.maxSize} shuffle={true} tags={cloud.tags} colorOptions={cloud.colorOptions} />
            </div>
            <div>
              <h4>{resume.resumeHeading}</h4>
              <Link url={resume.resumeUrl.mediaItemUrl} title={resume.resumeHeading}>
                <>
                  <FontAwesomeIcon icon={['far', 'file-pdf']} />
                  <FontAwesomeIcon icon={['fas', 'file-pdf']} />
                </>
              </Link>
            </div>
          </aside>
          <div>
            <Section type={sections[section].name} />
          </div>
        </main>
        <Footer />
      </div>
    </StyledPage>
  );
};

export default PageType3;
