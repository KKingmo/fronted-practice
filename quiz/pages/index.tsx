import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <a href="http://localhost:3000/quiz/quiz0414-1">
          4-1. react-hook-form 적용하기
        </a>
      </div>
      <div>
        <a href="http://localhost:3000/quiz/quiz0414-2">4-2. yup 적용하기</a>
      </div>
      <div>
        <a href="http://localhost:3000/quiz/quiz0414-3">
          4-3. 공통 컴포넌트 만들기
        </a>
      </div>
    </div>
  );
}
