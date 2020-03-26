import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Contact from '../../../../core/Contact';
import Error from '../../../../core/Error';
import Loading from '../../../../core/Loading';
import { GQL_QUERY } from './graphql';
import StyledFooter from './style';

const Footer = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const image: any = data.options.pageContent.pagetype4Images[1];

  return (
    <StyledFooter>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: image.mediaItemUrl,
              amount: 0.4,
              children: null,
            },
          ]}
          style={{
            height: '300px',
          }}
        >
          <div className="content">
            <Contact hasDescription={true} />
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </StyledFooter>
  );
};

export default Footer;
