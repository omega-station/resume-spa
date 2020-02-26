import React from 'react';
import MenuPage from '../../core/MenuPage';
// import { useQuery } from 'react-apollo';
// import { GQL_QUERY } from '../../../utility/graphql';
// import Error from '../../core/Error';
// import Loading from '../../core/Loading';
import StyledPage from './style';

const PageType3 = (): JSX.Element => {
  // const { data, loading, error } = useQuery(GQL_QUERY.MENU);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  return (
    <StyledPage>
      <main>
        <MenuPage />
      </main>
    </StyledPage>
  );
};

export default PageType3;
