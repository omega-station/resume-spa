import React from 'react';
import { useQuery, QueryResult } from 'react-apollo';
import { GQL_QUERY } from './graphql';
import Error from '../../core/Error';
import Loading from '../../core/Loading';
import { Props } from './definition';

const Contact = (props: Props): JSX.Element => {
  const { hasTitle = true }: Props = props;
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data);
  const contact: any = data.options.contact;
  const settings: any = data.generalSettings;

  return (
    <>
      {hasTitle && <span>{settings.title}</span>}
      <span>{contact.address1}</span>
      <span>{contact.address2}</span>
      <span>{contact.phone}</span>
      <span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </span>
    </>
  );
};

export default Contact;
