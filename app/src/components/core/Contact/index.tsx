import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { gqlDefault } from '../../../utility/graphql/definition';
import Error from '../../core/Error';
import Loading from '../Loading';
import defaults from './defaults';
import { Props } from './definition';
import { GQL_QUERY } from './graphql';
import StyledContact from './style';

const Contact = (props: Props): JSX.Element => {
  const { hasDescription, hasTitle, isPostalWithCity, pageType = 0 }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const resume: gqlDefault = data.options.resume;
  const settings: gqlDefault = data.generalSettings;

  return (
    <StyledContact pageType={pageType}>
      {hasTitle && (
        <ul className="contact-0">
          <li>{settings.title}</li>
          {hasDescription && (
            <>
              <li>•</li>
              <li>{settings.description}</li>
            </>
          )}
        </ul>
      )}
      <ul className="contact-1">
        <li>{resume.contactAddress}</li>
        <li>
          {resume.contactCity}
          {isPostalWithCity && <>&nbsp;&nbsp;{resume.contactPostal}</>}
        </li>
        {isPostalWithCity === false && <li>{resume.contactPostal}</li>}
        <li>{resume.contactPhone}</li>
        <li>
          <a href={`mailto:${resume.contactEmail}`}>{resume.contactEmail}</a>
        </li>
      </ul>
    </StyledContact>
  );
};

export default Contact;
