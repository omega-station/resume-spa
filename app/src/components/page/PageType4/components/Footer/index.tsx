import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useWindowWidth } from 'utility/hook';
import Contact from 'components/core/Contact';
import Error from 'components/core/Error';
import Loading from 'components/core/Loading';
import { GQL_QUERY } from './graphql';
import StyledFooter from './style';

const Footer = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);
  const width = useWindowWidth();

  if (loading) return <Loading />;
  if (error) return <Error />;

  const height = `${width <= 800 ? 280 : 200}px`;
  const image: any = data.options.pageContent.pagetype4Images[1];

  return (
    <StyledFooter height={height}>
      <div className="overlay"></div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              amount: 0.5,
              image: image.mediaItemUrl,
            },
          ]}
          style={{
            height,
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
