import { gql } from 'graphql-request';
import { GQL_FRAGMENT_USER } from '../fragments/user';

export const GQL_FRAGMENT_POST = gql`
  ${GQL_FRAGMENT_USER}

  mutation AUTHENTICATE_USER($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        ...user
      }
    }
  }
`;
