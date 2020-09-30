import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Helmet from 'react-helmet';
import GQL_QUERY from '../../../utility/graphql/query';
import Error from '../../core/Error';
import Loading from '../../core/Loading';
import PageType1 from '../PageType1';
import PageType2 from '../PageType2';
import PageType3 from '../PageType3';
import PageType4 from '../PageType4';
import defaults from './defaults';
import { Props } from './definition';

const Page = (props: Props) => {
  const { name, type }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SETTINGS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const PageType: (props: {}) => JSX.Element = [PageType1, PageType2, PageType3, PageType4][type - 1];
  const settings = data.generalSettings;
  const path = `/favicon/type-${type}/`;
  const title = `${settings.title} • ${settings.description} • ${name}`;

  return (
    <>
      <Helmet>
        <meta name="description" content={title} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <title>{title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href={`${path}apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${path}favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${path}favicon-16x16.png`} />
        <link rel="manifest" href={`${path}site.webmanifest`} />
        <link rel="mask-icon" href={`${path}safari-pinned-tab.svg`} color="#ffffff" />

        <body className={`pagetype-${type}`} />
      </Helmet>
      <PageType />
    </>
  );
};

export default Page;
