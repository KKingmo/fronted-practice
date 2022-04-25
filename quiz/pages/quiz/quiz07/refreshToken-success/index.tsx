import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function Quiz07RefreshTokenSuccess() {
  // 이 요청을 수행할 때 백엔드에서 인가가 이루어진다
  // 만료되었다면 restoreAccessToken이 수행되면서 토큰을 갱신한다.
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
}
