import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { getHeadings, Headings } from '../../../utility';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../Error';
import Loading from '../Loading';
import defaults from './defaults';
import { Props } from './definition';
import StyledNav from './style';

export const getSlug = (value: string): string => value.toLowerCase().replace(/ /g, '-');

const MenuSection = (props: Props): JSX.Element => {
  const { items, isIndexed, onClickMenu }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.HEADINGS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const headings: Headings = getHeadings(data);

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
                  <a href={url} onClick={() => onClickMenu && onClickMenu(i)}>
                    <span>Press &lt;{i + 1}&gt; or &lt;↑/↓&gt;</span>
                    <span>{value}</span>
                  </a>
                ) : (
                  <a href={url}>{value}</a>
                )}
              </li>
            );
          }
        )}
        {items &&
          items.map(
            (item: JSX.Element, i: number): JSX.Element => (
              <li key={i} className="list-item-extra">
                {item}
              </li>
            )
          )}
      </ul>
    </StyledNav>
  );
};

export default MenuSection;
