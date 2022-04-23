import { useEffect, useRef } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map1Page() {
  const container = useRef(); // 카카오 지도 ref

  useEffect(() => {
    // 스크립트를 먼저 받은 후에 dom요소를 그리기
    const script = document.createElement("script");
    // 쿼리 스트링 autoload=false추가
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=e02808b7ea7cba14f46cd97d75203140&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.290891, 127.445535), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        // 지도 Dom 선택해서 지도 생성
        const map = new window.kakao.maps.Map(container.current, options); // 지도 생성 및 객체 리턴

        // ❗️quiz 5-1-5. 카카오 지도에 마커를 표시해주세요.
        // => 마커의 위치는 자신이 좋아하는 장소를 표시하면 됩니다. (5번문제 주석처리)
        // const markerPosition1 = new window.kakao.maps.LatLng(
        //   37.290891,
        //   127.445535
        // );

        // 마커 이미지 생성
        const imageSrc = "/img/myMarker.png";
        const imageSize = new window.kakao.maps.Size(60, 60);
        const image = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
          image: image,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <div>
      <div ref={container} style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
