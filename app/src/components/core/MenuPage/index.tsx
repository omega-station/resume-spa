import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { Link, useLocation } from 'react-router-dom';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../Error';
import Loading from '../Loading';
import { Page } from './definition';
import StyledNav from './style';

const MenuPage = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.PAGE);
  const location: any = useLocation();

  if (loading) return <Loading />;
  if (error) return <Error />;

  const pages: any = data.options.pages.items;
  const visiblePages = pages.filter((item: Page) => item.isVisible);

  return (
    <StyledNav>
      {visiblePages.length > 1 && (
        <ul>
          {pages.map(
            (item: Page, i: number): JSX.Element => {
              const className: string = location.pathname.includes(item.name) ? 'is-current' : '';
              return (
                <>
                  {item.isVisible && (
                    <li key={i} className={className}>
                      <Link to={`/${item.name}`}>{item.name}</Link>
                    </li>
                  )}
                </>
              );
            }
          )}
        </ul>
      )}
    </StyledNav>
  );
};

export default MenuPage;
