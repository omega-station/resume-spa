import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { heading, subheading } from '../../core/Masthead/ascii';
import Error from '../Error';
import Loading from '../Loading';
import defaults from './defaults';
import { Props } from './definition';
import GQL_QUERY from '../../../utility/graphql/query';
import StyledMasthead from './style';

const MenuPage = (props: Props): JSX.Element => {
  const { isAscii }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SETTINGS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: any = data.generalSettings;

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
