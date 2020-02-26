import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { getHeadings } from '../../../utility';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../Error';
import Loading from '../Loading';
import { getSlug } from '../MenuSection';
import { Props } from './definition';
import SectionDefault from './SectionDefault';
import SectionHistory from './SectionHistory';
import SectionSkillset from './SectionSkillset';
import StyledSection from './style';

const Section = (props: Props): JSX.Element => {
  const { type }: Props = props;
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.SECTION_HEADING);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const heading: string = getHeadings(data)[type];

  let Component: (props: Props) => JSX.Element = SectionDefault;
  if (type === 'education' || type === 'work') {
    Component = SectionHistory;
  } else if (type === 'skillset') {
    Component = SectionSkillset;
  }

  return (
    <StyledSection id={getSlug(heading)} className={`section-${heading}`}>
      <h2>{heading}</h2>
      <Component type={type} />
    </StyledSection>
  );
};

export default Section;
