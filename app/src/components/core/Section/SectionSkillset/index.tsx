import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import Error from '../../../core/Error';
import Loading from '../../Loading';
import { Props } from '../definition';
import { GQL_QUERY } from './graphql';

export const getProficiencyString = (percentage: number | string, multiplier: number = 2.5, char: string = '♥'): string => {
  const _percentage = typeof percentage === 'string' ? parseInt(percentage) : percentage;
  return char.repeat(_percentage / multiplier);
};

const SectionSkillset = (props: Props): JSX.Element => {
  const { data, loading, error } = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { skillsetAreas: areas, skillsetProficiency: proficiency } = data.options.resume;

  const getProficiency = (value: number): JSX.Element => {
    return (
      <>
        <i>{getProficiencyString(value)}</i>[{value}%]
      </>
    );
  };

  return (
    <>
      <div className="table">
        {areas.map(
          (item: any, i: number): JSX.Element => (
            <div key={`${item.area}-${i}`}>
              <span>{item.area}</span>
              <span>{item.skills}</span>
            </div>
          )
        )}
      </div>
      <div className="table">
        <div className="head">
          <span>Skill</span>
          <span>Proficiency</span>
        </div>
        {proficiency.map(
          (item: any, i: number): JSX.Element => (
            <Fragment key={i}>
              {item.isVisible && (
                <div>
                  <span>{item.skill}</span>
                  <span className="proficiency">{getProficiency(item.proficiency)}</span>
                </div>
              )}
            </Fragment>
          )
        )}
      </div>
    </>
  );
};

export default SectionSkillset;
