import { useEffect, useRef, useState } from "react";

export default function LazyLoadPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://cdn.pixabay.com/index/2022/04/25/12-08-59-434_1920x550.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload} style={{ color: "#ff2900" }}>
        이미지 보여주기
      </button>
    </div>
  );
}
