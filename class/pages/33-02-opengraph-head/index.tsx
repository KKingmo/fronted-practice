import Head from "next/head";

export default function OpengraphPage() {
  return (
    <div>
      <Head>
        {/* og는 오픈 그래프의 약자이다. */}
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신 것을 환영합니다."
        />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2022/04/24/08/08/park-7153125__340.png"
        />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </div>
  );
}
