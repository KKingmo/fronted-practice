import {
    Wrapper,
    Container,
    Title,
    Div1,
    Div2,
    Div3,
    Div4,
    Div5,
    Div6,
    Span,
    Yellow,
    Input,
    Search,
    AttachPhoto,
    DivRadio,
    Register,
    Error,
} from "../../../styles/css.js";
import { useState } from "react";

export default function AAAPage() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

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
            alert("게시물 등록에 성공하였습니다!");
        }
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <Title>게시물 등록</Title>
                    <Div1>
                        <Div2>
                            <Span>
                                작성자 <Yellow>*</Yellow>
                            </Span>
                            <Input
                                type="text"
                                placeholder="이름을 적어주세요."
                                onChange={onChangeWriter}
                            />
                            <Error>{writerError}</Error>
                        </Div2>
                        <Div2>
                            <Span>비밀번호</Span>
                            <Input
                                type="text"
                                placeholder="비밀번호를 입력해주세요."
                                onChange={onChangePassword}
                            />
                            <Error>{passwordError}</Error>
                        </Div2>
                    </Div1>
                    <Div1>
                        <Div3>
                            <Span>제목</Span>
                            <Input
                                type="text"
                                placeholder="제목을 작성해주세요."
                                onChange={onChangeTitle}
                            />
                            <Error>{titleError}</Error>
                        </Div3>
                    </Div1>
                    <Div1>
                        <Div4>
                            <Span>내용</Span>
                            <textarea
                                type="text"
                                placeholder="내용을 작성해주세요."
                                onChange={onChangeContents}
                            />
                            <Error>{contentsError}</Error>
                        </Div4>
                    </Div1>
                    <Div1>
                        <Div5>
                            <Span>주소</Span>
                            <div>
                                <input type="text" placeholder="07250" />
                                <Search>우편번호 검색</Search>
                            </div>
                            <Input type="text"></Input>
                            <Input type="text"></Input>
                        </Div5>
                    </Div1>
                    <Div1>
                        <Div3>
                            <Span>유튜브</Span>
                            <Input type="text" placeholder="링크를 복사해주세요." />
                        </Div3>
                    </Div1>

                    <Div1>
                        <AttachPhoto>
                            <Span>사진첨부</Span>
                        </AttachPhoto>
                    </Div1>
                    <Div1>
                        <AttachPhoto>
                            <Div6>
                                <Span>+</Span>
                                <Span>Upload</Span>
                            </Div6>
                            <Div6>
                                <Span>+</Span>
                                <Span>Upload</Span>
                            </Div6>
                            <Div6>
                                <Span>+</Span>
                                <Span>Upload</Span>
                            </Div6>
                        </AttachPhoto>
                    </Div1>
                    <Div1>
                        <Div3>
                            <DivRadio>
                                <Span>메인 설정</Span>
                            </DivRadio>
                            <DivRadio>
                                <input
                                    type="radio"
                                    name="main__setting"
                                    id="radio__youtube"
                                    class="main__setting__radio"
                                    checked
                                />
                                유튜브
                                <input
                                    type="radio"
                                    name="main__setting"
                                    id="radio__photo"
                                    class="main__setting__radio"
                                />
                                사진
                            </DivRadio>
                        </Div3>
                    </Div1>
                    <Div1>
                        <Register>
                            <Span onClick={onClickSubmit}>등록하기</Span>
                        </Register>
                    </Div1>
                </Container>
            </Wrapper>
        </>
    );
}
