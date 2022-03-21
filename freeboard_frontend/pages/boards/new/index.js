import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
    Wrapper,
    Container,
    Title,
    ParentDiv,
    ChildDiv1,
    ChildDiv2,
    ChildDiv3,
    ChildDiv4,
    ChildDiv5,
    Span,
    Yellow,
    Input,
    Search,
    AttachPhoto,
    DivRadio,
    Register,
    Error,
} from "../../../styles/boardsNew";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
            youtubeUrl
            images
            boardAddress {
                zipcode
                address
                addressDetail
            }
            createdAt
        }
    }
`;

const NewPage = () => {
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
        <>
            <Wrapper>
                <Container>
                    <Title>게시물 등록</Title>
                    <ParentDiv>
                        <ChildDiv1>
                            <Span>
                                작성자 <Yellow>*</Yellow>
                            </Span>
                            <Input
                                type="text"
                                placeholder="이름을 적어주세요."
                                onChange={onChangeWriter}
                            />
                            <Error>{writerError}</Error>
                        </ChildDiv1>
                        <ChildDiv1>
                            <Span>비밀번호</Span>
                            <Input
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                onChange={onChangePassword}
                            />
                            <Error>{passwordError}</Error>
                        </ChildDiv1>
                    </ParentDiv>
                    <ParentDiv>
                        <ChildDiv2>
                            <Span>제목</Span>
                            <Input
                                type="text"
                                placeholder="제목을 작성해주세요."
                                onChange={onChangeTitle}
                            />
                            <Error>{titleError}</Error>
                        </ChildDiv2>
                    </ParentDiv>
                    <ParentDiv>
                        <ChildDiv3>
                            <Span>내용</Span>
                            <textarea
                                type="text"
                                placeholder="내용을 작성해주세요."
                                onChange={onChangeContents}
                            />
                            <Error>{contentsError}</Error>
                        </ChildDiv3>
                    </ParentDiv>
                    <ParentDiv>
                        <ChildDiv4>
                            <Span>주소</Span>
                            <div>
                                <input
                                    type="text"
                                    placeholder="우편번호"
                                    onChange={onChangeZipcode}
                                />
                                <Search>우편번호 검색</Search>
                            </div>
                            <Input type="text" onChange={onChangeAddress}></Input>
                            <Input type="text" onChange={onChangeAddressDetail}></Input>
                        </ChildDiv4>
                    </ParentDiv>
                    <ParentDiv>
                        <ChildDiv2>
                            <Span>유튜브</Span>
                            <Input
                                type="text"
                                placeholder="링크를 복사해주세요."
                                onChange={onChangeYoutubeUrl}
                            />
                        </ChildDiv2>
                    </ParentDiv>

                    <ParentDiv>
                        <AttachPhoto>
                            <Span>사진첨부</Span>
                        </AttachPhoto>
                    </ParentDiv>
                    <ParentDiv>
                        <AttachPhoto>
                            <ChildDiv5>
                                <Span>+</Span>
                                <Span>Upload</Span>
                            </ChildDiv5>
                            <ChildDiv5>
                                <Span>+</Span>
                                <Span>Upload</Span>
                            </ChildDiv5>
                            <ChildDiv5>
                                <Span>+</Span>
                                <Span>Upload</Span>
                            </ChildDiv5>
                        </AttachPhoto>
                    </ParentDiv>
                    <ParentDiv>
                        <ChildDiv2>
                            <DivRadio>
                                <Span>메인 설정</Span>
                            </DivRadio>
                            <DivRadio>
                                <input type="radio" name="main__setting" id="radio__youtube" />
                                유튜브
                                <input type="radio" name="main__setting" id="radio__photo" />
                                사진
                            </DivRadio>
                        </ChildDiv2>
                    </ParentDiv>
                    <ParentDiv>
                        <Register>
                            <Span onClick={onClickSubmit}>등록하기</Span>
                        </Register>
                    </ParentDiv>
                </Container>
            </Wrapper>
        </>
    );
};

export default NewPage;
