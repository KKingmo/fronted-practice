import { useRouter } from "next/router";
import { useEffect } from "react";

const quizLink = "/quiz/quiz06/payment/login";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push(quizLink);
  });

  const onClick = () => {
    router.push(quizLink);
  };

  return (
    <div>
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        클릭하면 갑니다~ gogo "/quiz/quiz06/payment/login"
      </div>
    </div>
  );
}
