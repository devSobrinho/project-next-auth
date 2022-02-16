import { gql } from 'graphql-request';
import { GQL_FRAGMENT_USER } from '../fragments/user';

export const GQL_MUTATION_UPDATE_POST = gql`
  ${GQL_FRAGMENT_USER}

  mutation UPDATE_POST($id: ID!, $title: String!, $content: String!) {
    updatePost(
      input: { data: { title: $title, content: $content }, where: { id: $id } }
    ) {
      post {
        ...post
      }
    }
  }
`;

export const GQL_MUTATION_CREATE_POST = gql`
  ${GQL_FRAGMENT_USER}

  mutation CREATE_POST($title: String!, $content: String!) {
    createPost(input: { data: { title: $title, content: $content } }) {
      post {
        ...post
      }
    }
  }
`;

export const GQL_MUTATION_DELETE_POST = gql`
  ${GQL_FRAGMENT_USER}

  mutation DELETE_POST($id: ID!) {
    deletePost(input: { where: { id: $id } }) {
      post {
        ...post
      }
    }
  }
`;
