import { gql } from 'graphql-request'

export const myFirstQuery = gql`
  query Query {
  countries {
    name
    currency
    emoji
    languages {
      name
      native
    }
    native
  }
}`