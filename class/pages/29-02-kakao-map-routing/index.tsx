import Link from "next/link";
// Link 태그는 a태그가 아닌 router.push와 같은 역할을 한다.
export default function KakaoMapPage() {
  return (
    <div>
      <Link href="/29-03-kakao-map-routed">이동하기</Link>
    </div>
  );
}
