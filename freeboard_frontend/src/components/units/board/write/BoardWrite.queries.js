import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
            youtubeUrl
            images
            boardAddress {
                zipcode
                address
                addressDetail
            }
            createdAt
        }
    }
`;
