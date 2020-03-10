import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { GQL_QUERY } from '../../../utility/graphql';
import PageType1 from '../../page/PageType1';
import PageType2 from '../../page/PageType2';
import PageType3 from '../../page/PageType3';
import PageType4 from '../../page/PageType4';
import Error from '../Error';
import Loading from '../Loading';

const Router = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.GLOBAL); //GQL_QUERY.PAGE

  if (loading) return <Loading />;
  if (error) return <Error />;

  const pages: any = data && data.options.pages;
  const items: any = data && data.options.pages.items;
  const frontpage: string = items && items[pages.pageFront - 1].name;

  return (
    <BrowserRouter>
      <Redirect exact from="/" to={`/${frontpage}`} />
      <Switch>
        <Route path={`/1984`}>
          <PageType1 data={data} />
        </Route>
        <Route path={`/1996`}>
          <PageType2 data={data} />
        </Route>
        <Route path={`/2008`}>
          <PageType3 data={data} />
        </Route>
        <Route path={`/2020`}>
          <PageType4 data={data} />
        </Route>
        {/* {items.map(
          (item: PropsPage, i: number): JSX.Element => {
            const { name, type }: PropsPage = item;
            return (
              <Route key={i} path={`/${name}`}>
                <Page type={type} data={data} />
              </Route>
            );
          }
        )} */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
