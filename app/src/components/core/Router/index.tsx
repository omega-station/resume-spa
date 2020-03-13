import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { GQL_QUERY } from '../../../utility/graphql';
import Page from '../../page/Page';
import { PropsPage } from '../../page/Page/definition';
import Error from '../Error';
import Loading from '../Loading';

const Router = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.PAGE);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const pages: any = data && data.options.pages;
  const items: any = data && data.options.pages.items;
  const frontpage: string = items && items[pages.pageFront - 1].name;

  return (
    <BrowserRouter>
      <Switch>
        {items.map(
          (item: PropsPage, i: number): JSX.Element => {
            const { name, type }: PropsPage = item;
            return (
              <Route key={i} path={`/${name}`}>
                <Page type={type} />
              </Route>
            );
          }
        )}
        <Route render={() => <Redirect exact from="/" to={`/${frontpage}`} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
