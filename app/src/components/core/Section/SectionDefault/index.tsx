import React from 'react';
import { useQuery } from 'react-apollo';
import Error from '../../../core/Error';
import Loading from '../../../core/Loading';
import { Props } from '../definition';
import { GQL_QUERY } from './graphql';

const SectionDefault = (props: Props): JSX.Element => {
  const { type }: Props = props;
  const { data, loading, error } = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { aboutIntro, aboutPoints, interestsIntro, interestsPoints, referencesIntro, metaCopy } = data.options.resume;
  let copy: string = '';
  let points: string[] = [];

  switch (type) {
    case 'about':
      copy = aboutIntro;
      points = aboutPoints;
      break;
    case 'interests':
      copy = interestsIntro;
      points = interestsPoints;
      break;
    case 'references':
      copy = referencesIntro;
      break;
    case 'meta':
      copy = metaCopy;
      break;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: copy }}></div>
      {points && (
        <ul>
          {points.map(
            (point: any, i: number): JSX.Element => (
              <li key={i}>{point.item}</li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default SectionDefault;
