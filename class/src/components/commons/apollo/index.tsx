import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
    const myLocalStorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(myLocalStorageAccessToken || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
