import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { Helmet } from 'react-helmet';
import Error from '../../core/Error';
import Loading from '../../core/Loading';
import PageType1 from '../PageType1';
import PageType2 from '../PageType2';
import PageType3 from '../PageType3';
import PageType4 from '../PageType4';
import defaults from './defaults';
import { Props } from './definition';
import GQL_QUERY from '../../../utility/graphql/query';

const Page = (props: Props) => {
  const { type }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SETTINGS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings = data.generalSettings;

  const getPage = (type: number): JSX.Element => {
    const PageType: (props: {}) => JSX.Element = [PageType1, PageType2, PageType3, PageType4][type - 1];
    return (
      <>
        <Helmet>
          <meta name="description" content={`${settings.title} • ${settings.description}`} />
          <title>
            {settings.title} • {settings.description}
          </title>
          <body className={`pagetype-${type}`} />
        </Helmet>
        <PageType />
      </>
    );
  };

  return getPage(type as number);
};

export default Page;
