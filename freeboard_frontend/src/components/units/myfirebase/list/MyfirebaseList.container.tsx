import { useEffect, useState } from "react";
import MyfirebaseListUI from "./MyfirebaseList.presenter";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

export default function MyfirebaseList() {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    }
    fetchBoards();
  }, []);

  function onClickMoveToBoardNew() {
    router.push("/myfirebase/new");
  }

  return (
    <MyfirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
