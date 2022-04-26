import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    // document.getElementById("aaa")?.appendChild(imgTag)
  };

  const onClickLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 프리로드</button>
      ============================
      {isLoaded && (
        <img src="https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg" />
      )}
      <button onClick={onClickLoad}>이미지 일반로드</button>
    </div>
  );
}
