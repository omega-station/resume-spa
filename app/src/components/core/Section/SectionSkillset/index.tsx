import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import Error from '../../../core/Error';
import ChartCircle from '../../ChartCircle';
import Loading from '../../Loading';
import { GQL_QUERY } from './graphql';
import StyledSection from './style';
import { Props } from '../definition';
import defaults from '../defaults';
import { shuffleArray } from '../../../../utility';

export const getProficiencyString = (percentage: number | string, multiplier: number = 3.5, char: string = '☻'): string => {
  const _percentage: number = typeof percentage === 'string' ? parseInt(percentage) : percentage;
  return char.repeat(_percentage / multiplier);
};

const SectionSkillset = (props: Props): JSX.Element => {
  const { isWaypoint }: Props = { ...defaults, ...props };
  const { data, loading, error } = useQuery(GQL_QUERY);
  const useChart: boolean = true; // add as prop

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { skillsetAreas: areas, skillsetProficiency } = data.options.resume;
  const proficiency = useChart ? shuffleArray(skillsetProficiency) : skillsetProficiency;

  return (
    <StyledSection>
      <div className="skillset">
        {areas.map(
          (item: any, i: number): JSX.Element => (
            <div key={`${item.area}-${i}`}>
              <span>{item.area}</span>
              <span>{item.skills}</span>
            </div>
          )
        )}
      </div>
      <div className="skillset">
        {!useChart && (
          <div className="head">
            <span>Skill</span>
            <span>Proficiency</span>
          </div>
        )}
        {proficiency.map(
          (item: any, i: number): JSX.Element => (
            <Fragment key={i}>
              {item.isVisible && (
                <>
                  {!useChart ? (
                    <div>
                      <span>{item.skill}</span>
                      <span className="proficiency">
                        <i>{getProficiencyString(item.proficiency)}</i>[{item.proficiency}%]
                      </span>
                    </div>
                  ) : (
                    <ChartCircle isWaypoint={isWaypoint} index={i} label={item.skill} percent={item.proficiency} />
                  )}
                </>
              )}
            </Fragment>
          )
        )}
      </div>
    </StyledSection>
  );
};

export default SectionSkillset;
