import React, { RefObject, useEffect, useRef, useState } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { Waypoint } from 'react-waypoint';
import { getHeadings } from '../../../utility';
import { section } from '../../../utility/constant';
import { GQL_QUERY } from '../../../utility/graphql';
import Error from '../Error';
import Loading from '../Loading';
import defaults from './defaults';
import { Props } from './definition';
import SectionDefault from './SectionDefault';
import SectionHistory from './SectionHistory';
import SectionSkillset from './SectionSkillset';
import StyledSection from './style';

const Section = (props: Props): JSX.Element => {
  const { type, hasEnhancedHeading, hasListItemCheck }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY.HEADINGS);
  const refSection: RefObject<HTMLDivElement> = useRef() as RefObject<HTMLDivElement>;
  const [isWaypoint, setWaypoint] = useState(false);

  useEffect(() => {
    if (hasEnhancedHeading) {
      const handleScroll = (): void => {
        if (refSection && refSection.current) {
          const element: HTMLDivElement = refSection.current;
          const position: number = element.getBoundingClientRect().y > 0 ? element.getBoundingClientRect().y : 0;
          if (position <= window.innerHeight) {
            const OFFSET: number = 150;
            const percent: number = (position - OFFSET) / window.innerHeight;
            const span: NodeListOf<HTMLElement> = element.querySelectorAll('h2 span');
            span[0].style.opacity = (percent <= 0 ? 0 : 1).toString();
            span[1].style.opacity = (1 - percent).toString();
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [type, refSection, hasEnhancedHeading]);

  const handleWaypointEnter = (): void => {
    refSection.current?.classList.add('waypoint');
    setWaypoint(true);
    // console.log('handleWaypointEnter', refSection.current?.classList);
  };

  const handleWaypointLeave = (): void => {
    refSection.current?.classList.remove('waypoint');
    setWaypoint(false);
    // console.log('handleWaypointLeave', refSection.current?.classList);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  const heading: string = getHeadings(data)[type as string];

  let Component: (props: Props) => JSX.Element = SectionDefault;
  if (type === section[2] || type === section[3]) {
    Component = SectionHistory;
  } else if (type === section[1]) {
    Component = SectionSkillset;
  }

  return (
    <Waypoint bottomOffset={`${window.innerHeight / 2}px`} fireOnRapidScroll={true} onEnter={() => handleWaypointEnter()} onLeave={() => handleWaypointLeave()}>
      <StyledSection id={type} className={`section-${type}`} ref={refSection}>
        {hasEnhancedHeading ? (
          <h2>
            <span>{heading}</span>
            <span>{heading}</span>
          </h2>
        ) : (
          <h2>{heading}</h2>
        )}
        <Component type={type} isWaypoint={isWaypoint} hasEnhancedHeading={hasEnhancedHeading} hasListItemCheck={hasListItemCheck} />
      </StyledSection>
    </Waypoint>
  );
};

export default Section;
