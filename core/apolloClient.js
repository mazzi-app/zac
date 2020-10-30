import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

let apolloClient

// const graphqlURI_PROD = "https://management.50m.mn/backend/graphql"
const graphqlURI_DEV = "http://localhost:30002/graphql"

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: graphqlURI_DEV,
            credentials: 'same-origin'
        }),
        cache: new InMemoryCache(),
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (initialState) {
        _apolloClient.cache.restore(initialState)
    }

    if (typeof window === 'undefined') return _apolloClient

    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}