import { useAuth } from "../../commons/hooks/useAuth";

function MyPage() {
  useAuth();
  return <div>마이 페이지 입니다!</div>;
}

export default MyPage;
