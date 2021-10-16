import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import { shuffleArray } from '../../../../utility';
import Error from 'components/core/Error';
import ChartCircle from '../../ChartCircle';
import Loading from '../../Loading';
import defaults from '../defaults';
import { Props } from '../definition';
import { GQL_QUERY } from './graphql';
import StyledSection from './style';

export const getProficiencyString = (percentage: number | string, multiplier: number = 3.5, char: string = '☻'): string => {
  const _percentage: number = typeof percentage === 'string' ? parseInt(percentage) : percentage;
  return char.repeat(_percentage / multiplier);
};

const SectionSkillset = (props: Props): JSX.Element => {
  const { useSkillsetChart }: Props = { ...defaults, ...props };
  const { data, loading, error } = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { skillsetAreas: areas, skillsetProficiency } = data.options.resume;
  const proficiency = (useSkillsetChart ? shuffleArray(skillsetProficiency) : skillsetProficiency).filter((item: any) => item.isVisible);

  return (
    <StyledSection>
      <div className="skillset">
        {areas.map(
          (item: any, i: number): JSX.Element => (
            <div key={`${item.area}-${i}`} className="body">
              <span>{item.area}</span>
              <span>{item.skills}</span>
            </div>
          )
        )}
      </div>
      <div className="skillset">
        {!useSkillsetChart && (
          <div className="head">
            <span>Skill</span>
            <span>Proficiency</span>
          </div>
        )}
        {proficiency.map(
          (item: any, i: number): JSX.Element => (
            <Fragment key={`${item.skill}-${i}`}>
              {useSkillsetChart ? (
                <ChartCircle index={i} label={item.skill} percent={item.proficiency} />
              ) : (
                <div className="body">
                  <span>{item.skill}</span>
                  <span className="proficiency">
                    <i>{getProficiencyString(item.proficiency)}</i>[{item.proficiency}%]
                  </span>
                </div>
              )}
            </Fragment>
          )
        )}
      </div>
    </StyledSection>
  );
};

export default SectionSkillset;
