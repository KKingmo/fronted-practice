import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/quiz/quiz06/boards");
  });

  return (
    <div>
      <div>gogo quiz0418 folder</div>
    </div>
  );
}
