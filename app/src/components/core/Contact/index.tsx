import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Error from '../../core/Error';
import Loading from '../../core/Loading';
import { gqlContact, gqlSettings, Props } from './definition';
import { GQL_QUERY } from './graphql';
import StyledContact from './style';

const Contact = (props: Props): JSX.Element => {
  const { hasTitle = true }: Props = props;
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const resume: gqlContact = data.options.resume;
  const settings: gqlSettings = data.generalSettings;

  return (
    <StyledContact>
      {hasTitle && <span>{settings.title}</span>}
      <span>{resume.contactAddress1}</span>
      <span>{resume.contactAddress2}</span>
      <span>{resume.contactPhone}</span>
      <span>
        <a href={`mailto:${resume.contactEmail}`}>{resume.contactEmail}</a>
      </span>
    </StyledContact>
  );
};

export default Contact;
