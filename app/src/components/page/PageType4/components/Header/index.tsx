import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { ParallaxBanner } from 'react-scroll-parallax';
import Error from '../../../../core/Error';
import Loading from '../../../../core/Loading';
import Masthead from '../../../../core/Masthead';
import MenuPage from '../../../../core/MenuPage';
import { GQL_QUERY } from './graphql';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const image: any = data.options.pageContent.pagetype4Images[0];

  return (
    <StyledHeader>
      <ParallaxBanner
        layers={[
          {
            image: image.mediaItemUrl,
            amount: -0.7,
            children: null,
          },
        ]}
        style={{
          height: '600px',
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
