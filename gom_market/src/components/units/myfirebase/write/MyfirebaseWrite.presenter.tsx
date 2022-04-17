import * as S from "./MyfirebaseWrite.styles";
import { IMyfirebaseWriteUIProps } from "./MyfirebaseWrite.types";

export default function MyfirebaseWriteUI(props: IMyfirebaseWriteUIProps) {
  return (
    <S.Wrapper>
      <div>
        <S.MyInput
          type="text"
          onChange={props.onChangeWriter}
          placeholder="작성자를 입력하세요"
        />
      </div>
      <div>
        <S.MyInput
          type="text"
          onChange={props.onChangeTitle}
          placeholder="제목을 입력하세요"
        />
      </div>
      <div>
        <S.Contents
          onChange={props.onChangeContents}
          placeholder="내용을 입력하세요"
        />
      </div>
      <div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </div>
    </S.Wrapper>
  );
}
