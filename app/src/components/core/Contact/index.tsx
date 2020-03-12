import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Error from '../../core/Error';
import Loading from '../Loading';
import defaults from './defaults';
import { gqlContact, gqlSettings, Props } from './definition';
import { GQL_QUERY } from './graphql';
import StyledContact from './style';

const Contact = (props: Props): JSX.Element => {
  const { hasContainer, hasTitle, hasDescription }: Props = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const resume: gqlContact = data.options.resume;
  const settings: gqlSettings = data.generalSettings;

  const contact: JSX.Element = (
    <>
      <span>{resume.contactAddress1}</span>
      <span>{resume.contactAddress2}</span>
      <span>{resume.contactPhone}</span>
      <span>
        <a href={`mailto:${resume.contactEmail}`}>{resume.contactEmail}</a>
      </span>
    </>
  );

  return (
    <StyledContact>
      {hasTitle && (
        <span>
          {settings.title}
          {hasDescription && ` • ${settings.description}`}
        </span>
      )}
      {hasContainer ? <span>{contact}</span> : contact}
    </StyledContact>
  );
};

export default Contact;
