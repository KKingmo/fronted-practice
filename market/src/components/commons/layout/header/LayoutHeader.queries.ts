import { gql } from "@apollo/client";

// ๋ก๊ทธ์์
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
