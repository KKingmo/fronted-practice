import "antd/dist/antd.css";

import { AppProps } from "next/app";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
