import { ApolloClient, InMemoryCache } from '@apollo/client'



const client = () => {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
        cache: new InMemoryCache(),
        headers: {
            Accept: 'application/json',
        },

        defaultOptions: {
            query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
            },
        },
    })
    return client
}
export default client
