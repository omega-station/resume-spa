import React from 'react';
import { section } from '../../../../utility/constant';
// import { useQuery } from 'react-apollo';
// import Error from '../../../core/Error';
// import Loading from '../../Loading';
import { Props } from '../definition';
// import { GQL_QUERY } from './graphql';

const SectionDefault = (props: Props): JSX.Element => {
  const { data, type }: Props = props;
  // const { data, loading, error } = useQuery(GQL_QUERY);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const { aboutIntro, aboutPoints, interestsIntro, interestsPoints, referencesIntro, metaCopy } = data.options.resume;
  let copy: string = '';
  let points: string[] = [];

  switch (type) {
    case section[0]:
      copy = aboutIntro;
      points = aboutPoints;
      break;
    case section[4]:
      copy = interestsIntro;
      points = interestsPoints;
      break;
    case section[5]:
      copy = referencesIntro;
      break;
    case section[6]:
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
