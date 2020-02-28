import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Error from '../Error';
import Loading from '../Loading';
import { getHeadings, Headings } from '../../../utility';
import { GQL_QUERY } from '../../../utility/graphql';
import StyledNav from './style';
import { Props } from './definition';

export const getSlug = (value: string): string => value.toLowerCase().replace(/ /g, '-');

const MenuSection = (props: Props): JSX.Element => {
  const { items }: Props = props;
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SECTION_HEADING);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const headings: Headings = getHeadings(data);

  return (
    <StyledNav>
      <ul>
        {Object.values(headings).map(
          (value: string, i: number): JSX.Element => {
            return (
              <li key={i}>
                <a href={`#${getSlug(value)}`}>{value}</a>
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
