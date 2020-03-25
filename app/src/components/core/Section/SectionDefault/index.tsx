import React from 'react';
import { useQuery } from 'react-apollo';
import { getIconProp } from '../../../../utility';
import { section } from '../../../../utility/constant';
import FontAwesomeIcon from '../../../../utility/font-awesome';
import Error from '../../../core/Error';
import Loading from '../../Loading';
import { Props } from '../definition';
import defaults from './defaults';
import { GQL_QUERY } from './graphql';
import StyledSection from './style';
import Link from '../../Link';
import image from '../../../../images/2020/resume_paul-kevin-koehler.jpg';

const SectionDefault = (props: Props): JSX.Element => {
  const { type, hasListItemCheck }: Props = { ...defaults, ...props };
  const { data, loading, error } = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { aboutIntro, aboutPoints, interestsIntro, interestsPoints, referencesIntro, metaCopy }: any = data.options.resume;
  const resume: any = data.options.aside;
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
    <StyledSection hasListItemCheck={hasListItemCheck}>
      <div dangerouslySetInnerHTML={{ __html: copy }}></div>
      {points && (
        <ul>
          {points.map(
            (point: any, i: number): JSX.Element => (
              <li key={i}>
                {hasListItemCheck && (
                  <span className="item-check">
                    <FontAwesomeIcon icon={(point.icon && getIconProp(point.icon)) || ['fas', 'check-circle']} />
                  </span>
                )}
                <span>{point.item}</span>
              </li>
            )
          )}
        </ul>
      )}
      {type === section[5] && resume && (
        <Link url={resume.resumeUrl.mediaItemUrl} title={resume.resumeHeading}>
          <img src={image} alt={resume.resumeHeading} />
        </Link>
      )}
    </StyledSection>
  );
};

export default SectionDefault;
