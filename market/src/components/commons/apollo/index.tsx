import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });

    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserInfo(userInfo);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

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
    link: ApolloLink.from([uploadLink, errorLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
