import React from 'react';
// import { useQuery } from 'react-apollo';
// import Error from '../../../core/Error';
// import Loading from '../../Loading';
import { Props } from '../definition';
// import { GQL_QUERY } from './graphql';
import StyledSection from './style';

const SectionHistory = (props: Props): JSX.Element => {
  const { data, type }: Props = props;
  // const { data, loading, error } = useQuery(GQL_QUERY);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const { work, education } = data.options.resume;
  let history: any;

  switch (type) {
    case 'work':
      history = work;
      break;
    case 'education':
      history = education;
      break;
  }

  return (
    <StyledSection>
      {history.map(
        (item: any, i: number): JSX.Element => (
          <div key={i} className="history">
            <div>
              <span>
                {item.title && <span>{item.title},</span>}
                {item.company && <span>{item.company},</span>}
                {item.school && <span>{item.school},</span>}
                {item.campus && <span>{item.campus},</span>}
                <span>{item.location}</span>
              </span>
              <span>{item.dates}</span>
            </div>
            {item.intro && (
              <div>
                <span>{item.intro}</span>
              </div>
            )}
            <ul>
              {item.points.map(
                (point: any, j: number): JSX.Element => (
                  <li key={j}>{point.item}</li>
                )
              )}
            </ul>
            {item.skillset && (
              <ul>
                {item.skillset.map(
                  (skillset: any, j: number): JSX.Element => (
                    <li key={j}>
                      <span>{skillset.area}:</span>
                      <span>{skillset.skills}</span>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        )
      )}
    </StyledSection>
  );
};

export default SectionHistory;
