import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useWindowWidth } from '../../../../../utility/hook';
import Error from '../../../../core/Error';
import Loading from '../../../../core/Loading';
import Masthead from '../../../../core/Masthead';
import MenuPage from '../../../../core/MenuPage';
import { GQL_QUERY } from './graphql';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);
  const width = useWindowWidth();

  if (loading) return <Loading />;
  if (error) return <Error />;

  const height = `${width <= 1080 ? 300 : 240}px`;
  const image: any = data.options.pageContent.pagetype4Images[0];

  return (
    <StyledHeader height={height}>
      <ParallaxBanner
        layers={[
          {
            amount: -0.65,
            image: image.mediaItemUrl,
          },
        ]}
        style={{
          height,
        }}
      >
        <div className="content">
          <Masthead />
          <MenuPage items={[<span></span>]} />
        </div>
      </ParallaxBanner>
    </StyledHeader>
  );
};

export default Header;
