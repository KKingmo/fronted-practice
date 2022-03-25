import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            createdAt
        }
    }
`;
