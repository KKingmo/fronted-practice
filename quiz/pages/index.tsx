import styled from "@emotion/styled";

const Button = styled.button`
  margin: 20px;
`;

export default function Home() {
  return (
    <div>
      <div>
        <a href="http://localhost:3000/quiz/quiz07/image-upload">
          이미지 성능 높이기
        </a>
      </div>

      <div>
        <a href="http://localhost:3000/quiz/quiz07/image-lazyload">LazyLoad</a>
      </div>

      <div>
        <a href="http://localhost:3000/quiz/quiz07/image-preload">PreLoad</a>
      </div>

      <div>
        <a href="http://localhost:3000/quiz/quiz07/image-webP">
          이미지 확장자 변경하기
        </a>
      </div>
    </div>
  );
}
