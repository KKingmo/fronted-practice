import { useEffect, useRef, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap02(props) {
  const container = useRef(); // 카카오 지도 ref
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
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
          center: new window.kakao.maps.LatLng(props.tradeLat, props.tradeLng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        // 지도 Dom 선택해서 지도 생성
        const map = new window.kakao.maps.Map(container.current, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.tradeLat,
          props.tradeLng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [loading]);

  useEffect(() => {
    if (props.tradeLat !== undefined && props.tradeLng !== undefined) {
      setLoading(true);
    }
  }, [props.tradeLat, props.tradeLng]);

  return <div ref={container} style={{ width: 700, height: 278 }}></div>;
}
