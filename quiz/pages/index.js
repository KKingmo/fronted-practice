import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <br />
                    <a href="http://localhost:3000/quiz/quiz2-highLevel">
                        2주차-고난도 Quiz! 주소는 여기입니다.
                    </a>
                </h1>
            </main>
        </div>
    );
}
