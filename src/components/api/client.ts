import {
    ApolloClient,
    createHttpLink,
    from,
    InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from './token';

const uri = `/graphql`;

const httpLink = createHttpLink({
    uri,
});

let refreshTokenRefresh: any = null;

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    refreshTokenRefresh = refreshTokenRefresh
        ? refreshTokenRefresh
        : getAccessToken();

    const token = await refreshTokenRefresh;

    refreshTokenRefresh = null;
  
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
});

export { client };
