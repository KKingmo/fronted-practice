import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <a href="http://localhost:3000/example/hoc/login">
          3-1. HOC로 권한분기로직 withAuth로 분리하기
        </a>
      </div>
      <div>
        <a href="http://localhost:3000/quiz/quiz0413">
          3-2. event.target.id 방식에서 HOF 방식으로 변경하기
        </a>
      </div>
    </div>
  );
}
