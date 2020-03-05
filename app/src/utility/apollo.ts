// import { BatchHttpLink } from '@apollo/link-batch-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const uri: string = `${process.env.REACT_APP_ENDPOINT_GRAPHQL_API}/graphql`;
const link: ApolloLink = createHttpLink({ uri });
// const batchLink: BatchHttpLink = new BatchHttpLink({ uri, headers: { batch: 'true ' } });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  // connectToDevTools: true,
});

// const client: ApolloClient<unknown> = new ApolloClient({
//   uri: `${process.env.REACT_APP_ENDPOINT_GRAPHQL_API}/graphql`,
//   cache: new InMemoryCache(),
// });

export { client, ApolloProvider };
