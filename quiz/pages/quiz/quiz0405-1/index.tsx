import axios from "axios";
import { useEffect, useState } from "react";

export default function Quiz04051() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);

  return (
    <div>
      <div>Quiz 04월 05일 2-1</div>
      <img src={dogUrl} height={460} />
    </div>
  );
}
