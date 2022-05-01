import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      createdAt
      user {
        _id
        name
        email
      }
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

// 유저정보 가져오기
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      _id
      userPoint {
        _id
        amount
      }
    }
  }
`;
