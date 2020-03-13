import React, { useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { TagCloud } from 'react-tagcloud';
import Error from '../../core/Error';
import GitHubCorner from '../../core/GitHubCorner';
import Link from '../../core/Link';
import Loading from '../../core/Loading';
import Section from '../../core/Section';
import { PropsPageType as Props } from '../Page/definition';
import Footer from './components/Footer';
import Header from './components/Header';
import { GQL_QUERY } from './graphql';
import StyledPage from './style';

const PageType3 = (props: Props): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);
  const [section, setSection] = useState<number>(0);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: any = data.generalSettings;
  const resume: any = data.options.aside;
  const images: any = data.options.images.header;
  const sections: any = data.options.resume.metaSections;

  const cloud = {
    tags: [],
    colorOptions: { hue: '#ad2a24', luminosity: 'dark' },
  };

  return (
    <StyledPage>
      <GitHubCorner />
      <div>
        <Header settings={settings} images={images} section={section} sections={sections} onClick={setSection} />
        <main>
          <aside>
            <div>
              <h4>{resume.resumeHeading}:</h4>
              <Link url={resume.resumeUrl.mediaItemUrl} title={resume.resumeHeading}>
                <img
                  src={resume.resumeImage.mediaItemUrl}
                  srcSet={resume.resumeImage.srcSet}
                  sizes={resume.resumeImage.sizes}
                  alt={`${settings.title} • ${settings.description}`}
                />
              </Link>
            </div>
            {cloud && <TagCloud minSize={14} maxSize={24} shuffle={true} tags={cloud.tags} colorOptions={cloud.colorOptions} />}
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
