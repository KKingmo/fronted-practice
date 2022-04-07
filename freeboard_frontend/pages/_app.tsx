import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";

const firebaseConfig = {
  apiKey: "AIzaSyB72z_1jbnhKYw88_hTy2kq8O76HqehMKY",
  authDomain: "kkingmo-4db35.firebaseapp.com",
  projectId: "kkingmo-4db35",
  storageBucket: "kkingmo-4db35.appspot.com",
  messagingSenderId: "698324227092",
  appId: "1:698324227092:web:8dfc93f89d185b58d88301",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
