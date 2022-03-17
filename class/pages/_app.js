import "../styles/globals.css"; // 나중에 emotion으로 변경.
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
    // 여기에 적용한 셋팅은 하위 페이지가 실행되기 전에, 먼저 셋팅이 실행된다.
    const client = new ApolloClient({
        uri: "http://example.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
