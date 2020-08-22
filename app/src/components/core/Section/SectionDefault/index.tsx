import React from 'react';
import { useQuery } from 'react-apollo';
import { getIconProp, getImage } from '../../../../utility';
import { section as _section } from '../../../../utility/constant';
import FontAwesomeIcon from '../../../../utility/font-awesome';
import Error from '../../../core/Error';
import Link from '../../Link';
import Loading from '../../Loading';
import { Props } from '../definition';
import defaults from './defaults';
import { GQL_QUERY } from './graphql';
import StyledSection from './style';

const SectionDefault = (props: Props): JSX.Element => {
  const { pagetype, section, hasListItemCheck, hasResumeImage }: Props = { ...defaults, ...props };
  const { data, loading, error } = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: { [key: string]: string } = data.generalSettings;
  const { aboutIntro, aboutPoints, interestsIntro, interestsPoints, metaCopyIntro, metaCopyOutro, metaCopyPage, referencesIntro, referencesResume }: any = data.options.resume;

  let copy: string = '';
  let points: string[] = [];
  let resume: any;
  let resumeTitle: string = '';

  switch (section) {
    case _section[0]:
      copy = aboutIntro;
      points = aboutPoints;
      break;
    case _section[4]:
      copy = interestsIntro;
      points = interestsPoints;
      break;
    case _section[5]:
      copy = referencesIntro;
      resume = referencesResume[0];
      resumeTitle = `${settings.title} • ${settings.description}`;
      break;
    case _section[6]:
      pagetype && (copy = `${metaCopyIntro}${metaCopyPage[pagetype - 1].copy}${metaCopyOutro}`);
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
                  <span className="item-icon">
                    <FontAwesomeIcon icon={(point.icon && getIconProp(point.icon)) || ['fas', 'check-circle']} />
                  </span>
                )}
                <span>
                  <span>{point.item}</span>
                </span>
              </li>
            )
          )}
        </ul>
      )}
      {hasResumeImage && resume && (
        <Link url={resume.pdf.mediaItemUrl} title={resumeTitle}>
          {getImage(resume.image, resumeTitle)}
        </Link>
      )}
    </StyledSection>
  );
};

export default SectionDefault;
