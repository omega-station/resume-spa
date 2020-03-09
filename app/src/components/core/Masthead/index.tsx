import React from 'react';
// import { QueryResult, useQuery } from 'react-apollo';
// import Error from '../Error';
// import Loading from '../Loading';
// import { GQL_QUERY } from './graphql';
import { heading, subheading } from '../../core/Masthead/ascii';
import defaults from './defaults';
import { Props } from './definition';
import StyledMasthead from './style';

const MenuPage = (props: Props): JSX.Element => {
  const { data, isAscii }: Props = { ...defaults, ...props };
  // const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const settings: any = data && data.generalSettings;

  return (
    <StyledMasthead>
      {settings !== null && isAscii === false ? (
        <>
          <h1>{settings.title}</h1>
          <h2>{settings.description}</h2>
        </>
      ) : (
        <>
          <div className="ascii ascii-desktop">
            <pre>{heading.desktop}</pre>
            <pre>{subheading.desktop}</pre>
          </div>
          <div className="ascii ascii-mobile">
            <pre>{heading.mobile}</pre>
            <pre>{subheading.mobile}</pre>
          </div>
        </>
      )}
    </StyledMasthead>
  );
};

export default MenuPage;
