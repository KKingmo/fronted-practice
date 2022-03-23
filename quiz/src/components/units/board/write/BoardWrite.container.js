import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);

    const callGraphqlApi = async () => {
        try {
            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents },
            }); // graphql-api 방식
            console.log(result);
            console.log(result.data.createBoard.message);
            alert("게시글 등록에 성공했어요!");
            alert("상세 페이지로 이동해 볼까요?!");
            router.push(`/quiz/quiz2-1/DynamicBoardRead/${result.data.createBoard.number}`);
        } catch (error) {
            alert(error.message);
        }
    };

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value);
        if (event.target.value !== "" && myTitle !== "" && myContents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);
        if (myWriter !== "" && event.target.value !== "" && myContents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeContents = (event) => {
        setMyContents(event.target.value);
        if (myWriter !== "" && myTitle !== "" && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    useEffect(() => {
        console.log(myWriter);
    }, [myWriter]);

    useEffect(() => {
        console.log(myTitle);
    }, [myTitle]);

    useEffect(() => {
        console.log(myContents);
    }, [myContents]);

    return (
        <BoardWriteUI
            callGraphqlApi={callGraphqlApi}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isActive={isActive}
        />
    );
}
