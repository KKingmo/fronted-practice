import Link from "next/link";
import { useRouter } from "next/router";
// Link 태그는 a태그가 아닌 router.push와 같은 역할을 한다.
export default function KakaoMapPage() {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/quiz/quiz06/map1");
  };

  return (
    <div>
      <button onClick={onClickButton}>이동하기</button>
    </div>
  );
}
