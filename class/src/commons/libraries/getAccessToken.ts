import { GraphQLClient, gql } from "graphql-request";

// restoreAccessToken mutation 하기
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// useMutation을 사용하지않고 graphQl을 rest형식으로 mutation할 것이다.
// endpoint를 아래와 같이 설정 여기서 https로 꼭 바꿔야한다.
export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
