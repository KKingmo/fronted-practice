import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  useAuth();

  return <div>철수의 프로필 페이지입니다!!</div>;
}

export default CustomHooksUseAuthPage;
