import React, { Fragment } from 'react';
// import { QueryResult, useQuery } from 'react-apollo';
import { Link, useLocation } from 'react-router-dom';
// import { GQL_QUERY } from '../../../utility/graphql';
// import Error from '../Error';
// import Loading from '../Loading';
import { Page, Props } from './definition';
import StyledNav from './style';

const MenuPage = (props: Props): JSX.Element => {
  const { data }: Props = props;
  // const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.PAGE);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const location: any = useLocation();
  const pages: any = data && data.options.pages.items;
  const visiblePages = pages && pages.filter((item: Page) => item.isVisible);

  return (
    <StyledNav>
      {visiblePages.length > 1 && (
        <ul>
          {pages.map(
            (item: Page, i: number): JSX.Element => {
              const className: string = location.pathname.includes(item.name) ? 'is-current' : '';
              return (
                <Fragment key={i}>
                  {item.isVisible && (
                    <li className={className}>
                      <Link to={`/${item.name}`}>{item.name}</Link>
                    </li>
                  )}
                </Fragment>
              );
            }
          )}
        </ul>
      )}
    </StyledNav>
  );
};

export default MenuPage;
