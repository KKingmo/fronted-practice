import { useEffect, useRef, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import * as S from "./styles";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap01(props) {
  const container = useRef(null); // 카카오 지도 ref

  const [mapLatLng, setMapLatLng] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchAddress, setSearchAddress] = useState({
    address: "",
    zipcode: "",
  });

  useEffect(() => {
    // 스크립트를 먼저 받은 후에 dom요소를 그리기
    const script = document.createElement("script");
    // 쿼리 스트링 autoload=false추가
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=e02808b7ea7cba14f46cd97d75203140&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      if (!searchAddress.address) return;
      window.kakao.maps.load(() => {
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.290891, 127.445535), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
          draggable: false, // 확대 축소 막기
          disableDoubleClick: false, // 더블클릭 이벤트 막기
        };
        // 지도 Dom 선택해서 지도 생성
        const map = new window.kakao.maps.Map(container.current, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          searchAddress.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
              setMapLatLng([coords.Ma, coords.La]);
            }
          }
        );
      });
    };
  }, [searchAddress]);

  // 우편번호검색 Toggle
  const onToggleModal = (data) => {
    setIsOpen((prev) => !prev);
    setSearchAddress((prev) => ({
      ...searchAddress,
      address: data.address,
      zipcode: data.zonecode,
    }));
  };

  return (
    <S.Wrapper>
      <S.ContainerLeft>
        <h3>거래위치</h3>
        {isOpen && (
          <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcode onComplete={onToggleModal} />
          </Modal>
        )}
        {searchAddress.address ? (
          <S.MapContainer
            ref={container}
            style={{ width: 390, height: 260 }}
          ></S.MapContainer>
        ) : (
          <S.MapContainer>
            <img src="/img/map-image.png" alt="주소를 검색해주세요." />
          </S.MapContainer>
        )}
      </S.ContainerLeft>
      <S.ContainerRight>
        <div>
          <h3>GPS</h3>
          위도(LAT)
          <input
            type="text"
            onChange={props.setValue("lat", mapLatLng[0])}
            value={mapLatLng[0] || ""}
            readOnly
          />
        </div>
        <div>
          경도(LNG)
          <input
            type="text"
            onChange={props.setValue("lng", mapLatLng[1])}
            value={mapLatLng[1] || ""}
            readOnly
          />
        </div>

        <S.AddressHead>
          <h3>주소</h3>
          <S.SearchAddress onClick={onToggleModal}>주소 검색</S.SearchAddress>
        </S.AddressHead>
        <input
          type="text"
          onChange={props.setValue("address", searchAddress?.address)}
          value={searchAddress?.address || ""}
          readOnly
        />
        <input
          type="text"
          onChange={props.setValue("zipcode", searchAddress?.zipcode)}
          value={searchAddress?.zipcode || ""}
          readOnly
        />
        <input
          type="text"
          {...props.register("addressDetail")}
          placeholder="상세주소를 입력해주세요."
        />
      </S.ContainerRight>
    </S.Wrapper>
  );
}
