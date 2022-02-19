import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GQL_QUERY } from 'utility/graphql';
import Page from '../../page/Page';
import { Props as PropsPage } from '../../page/Page/definition';
import Error from '../Error';
import Loading from '../Loading';

const Router = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.PAGES);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const pages: any = data && data.options.pages;
  const items: any = data && data.options.pages.items;
  const frontpage: any = items && items[pages.pageFront - 1];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page name={frontpage.name} type={frontpage.type} />} />
        {items.map(
          (item: PropsPage, i: number): JSX.Element => (
            <Route key={i} path={`/${item.name}`} element={<Page name={item.name} type={item.type} />} />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
