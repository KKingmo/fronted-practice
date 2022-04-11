import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <a href="http://localhost:3000/quiz/quiz0411A">
          4월11일 Quiz! 1-1 ~ 1-2 주소는 여기입니다.
        </a>
      </div>
      <div>
        <a href="http://localhost:3000/recoil/new">
          4월11일 Quiz! 1-3 recoil/new 주소는 여기입니다.
        </a>
      </div>
      <div>
        <a href="http://localhost:3000/recoil/edit">
          4월11일 Quiz! 1-3 recoil/edit 주소는 여기입니다.
        </a>
      </div>
    </div>
  );
}
