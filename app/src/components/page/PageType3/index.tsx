import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { TagCloud } from 'react-tagcloud';
import '../../../utility/font-awesome';
import Error from '../../core/Error';
import GitHubCorner from '../../core/GitHubCorner';
import Link from '../../core/Link';
import Loading from '../../core/Loading';
import Section from '../../core/Section';
import Footer from './components/Footer';
import Header from './components/Header';
import { GQL_QUERY } from './graphql';
import StyledPage from './style';

const PageType3 = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);
  const [section, setSection] = useState<number>(0);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: any = data.generalSettings;
  const resume: any = data.options.aside;
  const images: any = data.options.images.header;
  const sections: any = data.options.resume.metaSections;

  const cloud = {
    colorOptions: { hue: 'red', luminosity: 'dark' },
    tags: data.options.resume.skillsetProficiency.filter((x: any) => x.isTagcloud),
  };
  console.log(cloud);

  return (
    <StyledPage>
      <GitHubCorner />
      <div>
        <Header settings={settings} images={images} section={section} sections={sections} onClick={setSection} />
        <main>
          <aside>
            <div>
              <h4>{resume.tagcloudHeading}</h4>
              <TagCloud minSize={14} maxSize={24} shuffle={true} tags={cloud.tags} colorOptions={cloud.colorOptions} />
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
