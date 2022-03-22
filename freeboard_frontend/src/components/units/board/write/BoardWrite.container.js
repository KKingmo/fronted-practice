import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    const router = useRouter();
    const [callApi] = useMutation(CREATE_BOARD);

    // 게시글 입력 내용
    const [writer, setWriter] = useState("오창모");
    const [password, setPassword] = useState("1234");
    const [title, setTitle] = useState("게시글 제목입니다.");
    const [contents, setContents] = useState(
        "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하"
    );
    const [youtubeUrl, setYoutubeUrl] = useState("yLZMeesKbJo");
    const [zipcode, setZipcode] = useState("07250");
    const [address, setAddress] = useState("서울특별시 영등포구 양산로 200");
    const [addressDetail, setAddressDetail] = useState(
        "(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층"
    );
    const [images, setImages] = useState(
        "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_1280.jpg"
    ); // 이미지 청부하는 기능 필요

    // 에러 메세지
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if (event.target.value !== "") {
            setWriterError("");
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if (event.target.value !== "") {
            setPasswordError("");
        }
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if (event.target.value !== "") {
            setTitleError("");
        }
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if (event.target.value !== "") {
            setContentsError("");
        }
    };

    const onChangeZipcode = (event) => {
        setZipcode(event.target.value);
    };
    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const onChangeYoutubeUrl = (event) => {
        setYoutubeUrl(event.target.value);
    };
    const onChangeAddressDetail = (event) => {
        setAddressDetail(event.target.value);
    };

    const callRestApi = async () => {
        try {
            const result = await callApi({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents,
                        youtubeUrl: youtubeUrl,
                        boardAddress: {
                            zipcode: zipcode,
                            address: address,
                            addressDetail: addressDetail,
                        },
                        images: [images],
                    },
                },
            });
            console.log(result);
            router.push(`/boards/${result.data.createBoard._id}`);
        } catch (error) {
            alert(error.message);
        }
    };

    const onClickSubmit = () => {
        if (writer === "") {
            setWriterError("작성자를 입력해주세요.");
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (title === "") {
            setTitleError("제목을 입력해주세요.");
        }
        if (contents === "") {
            setContentsError("내용을 입력해주세요.");
        }
        if (writer !== "" && password !== "" && title !== "" && contents !== "") {
            callRestApi();
            alert("게시물 등록에 성공하였습니다!");
        }
    };

    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeZipcode={onChangeZipcode}
            onChangeAddress={onChangeAddress}
            onChangeYoutubeUrl={onChangeYoutubeUrl}
            onChangeAddressDetail={onChangeAddressDetail}
            onClickSubmit={onClickSubmit}
        />
    );
}
