import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cle3b9esk0jqj01tbfbj66g5c/master',
  cache: new InMemoryCache(),
})

export default client
