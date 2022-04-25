import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 1. 더 이상 지원되지 않음!
  // if(process.browser) {
  // } else {
  // }

  // 2. 두번째 방법!!
  // 브라우저에서 실행될 때만 윈도우가 존재하기 때문에 이를 이용한 것.
  // 아래는 윈도우가 없을 때 이니 프론트엔드 서버에서만 작동하는 코드.
  if (typeof window !== "undefined") {
    console.log("여기는 브라우저다!!!");
    // const myLocalStorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(myLocalStorageAccessToken || "");
  } else {
    console.log("여기는 프론트엔드 서버다!!!(yarn dev 다!!!)");
  }

  // 3. 세번째 방법!!
  useEffect(() => {
    // 옛날방식
    // const accessToken = localStorage.getItem("accessToken");
    // // 문자열을 다시 객체로 바꾸어줘야한다.
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // ///////////////////////////////

  // 콜백함수 사용 onError함수에서 요걸 실행시켜줘~
  // {graphQLErrors, operation(실패한쿼리), forward(재요청)}구조 분해 할당
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 catch
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 현재 operation의 Header부분에는 옛날 토큰이 들어 있다. 그래서 헤더만 바꿔치기 할 것이다.
            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // get, setContext로 헤더 주작 가능.
            operation.setContext({
              // 헤더안에는 Authorization외에도 다른 내용이 있으므로
              // 따라서 기존 헤더를 스프레드 시키고 authorization만 바꾼다.
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            // 3-2. 변경된 operation 재요청하기!!
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
