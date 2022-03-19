import "../styles/globals.css"; // 나중에 emotion으로 변경.
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { globalStyles } from "../styles/reset";

function MyApp({ Component, pageProps }) {
    // 여기에 적용한 셋팅은 하위 페이지가 실행되기 전에, 먼저 셋팅이 실행된다.
    const client = new ApolloClient({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            {globalStyles}
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
