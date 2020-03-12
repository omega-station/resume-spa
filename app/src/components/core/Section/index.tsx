import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { getHeadings } from '../../../utility';
import { section } from '../../../utility/constant';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../Error';
import Loading from '../Loading';
import { getSlug } from '../MenuSection';
import defaults from './defaults';
import { Props } from './definition';
import SectionDefault from './SectionDefault';
import SectionHistory from './SectionHistory';
import SectionSkillset from './SectionSkillset';
import StyledSection from './style';

const Section = (props: Props): JSX.Element => {
  const { type }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SECTION_HEADING);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const heading: any = getHeadings(data)[type as string];

  let Component: (props: Props) => JSX.Element = SectionDefault;
  if (type === section[2] || type === section[3]) {
    Component = SectionHistory;
  } else if (type === section[1]) {
    Component = SectionSkillset;
  }

  return (
    <StyledSection id={getSlug(heading)} className={`section-${getSlug(heading)}`}>
      <h2>{heading}</h2>
      <Component type={type} />
    </StyledSection>
  );
};

export default Section;
