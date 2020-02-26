import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Error from '../Error';
import Loading from '../Loading';
import { GQL_QUERY } from './graphql';
import { heading, subheading } from '../../core/Masthead/ascii';
import { Props } from './definition';

const MenuPage = (props: Props): JSX.Element => {
  const { isAscii = false }: Props = props;
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: any = data.generalSettings;

  return (
    <>
      {isAscii === false ? (
        <>
          <h1>{settings.title}</h1>
          <h2>{settings.description}</h2>
        </>
      ) : (
        <>
          <pre>{heading.desktop}</pre>
          <pre>{subheading.desktop}</pre>
        </>
      )}
    </>
  );
};

export default MenuPage;
