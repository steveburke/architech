import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri = 'http://localhost:8080/graphql'; // URL to the LibraryManagementServer GraphQL API
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');
    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      };
    }
  });

  return {
    link : ApolloLink.from([auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
