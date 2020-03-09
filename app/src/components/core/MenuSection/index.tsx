import React from 'react';
// import { QueryResult, useQuery } from 'react-apollo';
import { getHeadings, Headings } from '../../../utility';
// import { GQL_QUERY } from '../../../utility/graphql';
// import Error from '../Error';
// import Loading from '../Loading';
import { Props } from './definition';
import StyledNav from './style';
import defaults from './defaults';

export const getSlug = (value: string): string => value.toLowerCase().replace(/ /g, '-');

const MenuSection = (props: Props): JSX.Element => {
  const { data, items, isIndexed, onMenuClick }: Props = { ...defaults, ...props };
  // const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SECTION_HEADING);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const headings: Headings = data && getHeadings(data);

  return (
    <StyledNav>
      <ul className="menu-section">
        {Object.values(headings).map(
          (value: string, i: number): JSX.Element => {
            const url: string = `#${getSlug(value)}`;
            const isSelected: string = i === 0 ? 'is-selected' : '';
            return (
              <li key={i} className={`menu-section-${i} ${isSelected}`}>
                {isIndexed ? (
                  <a href={url} onClick={() => onMenuClick && onMenuClick(i)}>
                    <span>&lt;Press {i + 1} or ↑/↓&gt;</span>
                    <span>{value}</span>
                  </a>
                ) : (
                  <a href={url}>{value}</a>
                )}
              </li>
            );
          }
        )}
        {items && items.map((item: JSX.Element, i: number): JSX.Element => <li key={i}>{item}</li>)}
      </ul>
    </StyledNav>
  );
};

export default MenuSection;
