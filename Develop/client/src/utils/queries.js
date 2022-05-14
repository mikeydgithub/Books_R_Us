import { gql } from '@apollo/client';

// get a single user
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
      }
    }
  }
`;

// get me
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      books {
        _id
      }
    }
  }
`;

// get a book
export const QUERY_BOOK = gql`
  query book($bookname: String!) {
    book(bookname: $bookname) {
      _id
    }
  }
`;