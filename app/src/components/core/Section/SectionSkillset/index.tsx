import React from 'react';
import { useQuery } from 'react-apollo';
import Error from '../../../core/Error';
import Loading from '../../../core/Loading';
import { GQL_QUERY } from './graphql';
import { Props } from '../definition';

const SectionSkillset = (props: Props): JSX.Element => {
  const { data, loading, error } = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { skillsetAreas: areas, skillsetProficiency: proficiency } = data.options.resume;

  const getProficiency = (value: number): string => {
    return `${'♥'.repeat(value / 2.25)} [${value}%]`;
  };

  return (
    <>
      <div className="table">
        {areas.map((item: any, i: number) => {
          return (
            <div key={i}>
              <span>{item.area}</span>
              <span>{item.skills}</span>
            </div>
          );
        })}
      </div>
      <div className="table">
        <div className="head">
          <span>Skill</span>
          <span>Proficiency</span>
        </div>
        {proficiency.map((item: any, i: number) => {
          return (
            <>
              {item.isVisible === 'true' && (
                <div key={i}>
                  <span>{item.skill}</span>
                  <span className="bold">{getProficiency(item.proficiency)}</span>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default SectionSkillset;
