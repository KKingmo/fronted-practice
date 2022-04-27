import { gql } from "@apollo/client";

// 로그아웃
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
