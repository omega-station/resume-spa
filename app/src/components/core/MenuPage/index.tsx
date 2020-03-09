import React, { Fragment } from 'react';
// import { QueryResult, useQuery } from 'react-apollo';
import { Link, useLocation } from 'react-router-dom';
import defaults from './defaults';
// import { GQL_QUERY } from '../../../utility/graphql';
// import Error from '../Error';
// import Loading from '../Loading';
import { PageProps, Props } from './definition';
import StyledNav from './style';

const MenuPage = (props: Props): JSX.Element => {
  const { data, items }: Props = { ...defaults, ...props };
  // const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.PAGE);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const location: any = useLocation();
  const pages: any = data && data.options.pages.items;
  const visiblePages = pages && pages.filter((item: PageProps) => item.isVisible);

  return (
    <StyledNav>
      {visiblePages.length > 1 && (
        <ul className="menu-page">
          {pages.map(
            (item: PageProps, i: number): JSX.Element => {
              const isCurrent: string = location.pathname.includes(item.name) ? 'is-current' : '';
              const isSelected: string = i === 0 ? 'is-selected' : '';
              return (
                <Fragment key={i}>
                  {item.isVisible && (
                    <li className={`menu-page-${i} ${isCurrent} ${isSelected}`}>
                      <Link to={`/${item.name}`}>{item.name}</Link>
                    </li>
                  )}
                </Fragment>
              );
            }
          )}
          {items && items.map((item: JSX.Element, i: number): JSX.Element => <li key={i}>{item}</li>)}
        </ul>
      )}
    </StyledNav>
  );
};

export default MenuPage;
