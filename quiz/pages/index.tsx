import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <a href="http://localhost:3000/one">
          3주차-3 Quiz! one 영역 주소는 여기입니다.
        </a>
      </div>
      <div>
        <a href="http://localhost:3000/two">
          3주차-3 Quiz! two 영역 주소는 여기입니다.
        </a>
      </div>
      <div>
        {" "}
        <a href="http://localhost:3000/three">
          3주차-3 Quiz! three 영역 주소는 여기입니다.
        </a>
      </div>
    </div>
  );
}
