import { gql } from 'graphql-request';
import { GQL_FRAGMENT_USER } from './user';

export const GQL_FRAGMENT_POST = gql`
  ${GQL_FRAGMENT_USER}

  fragment post on Post {
    id
    title
    content
    createdAt
    user {
      ...user
    }
  }
`;
