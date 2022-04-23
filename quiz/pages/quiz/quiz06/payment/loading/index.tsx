import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function PaymentLoadingPage() {
  const [amount, setAmount] = useState(500);
  const router = useRouter();

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp50989376"); // me: imp50989376 // 가맹점 식별코드
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card", // 가상계좌는 vbank
        // 상품id 중복x, 실무에서는 몇개 팔렸는지 숨기기위해 정직하게 적어놓지는 않음
        // 안적으면 랜덤 생성
        // merchant_uid: "ORD20180131-0000011",
        name: `${amount}원 충전`, // 상품이름
        amount: amount, // 결제금액
        buyer_email: "gildong@gmail.com", // 구매자 이메일
        buyer_name: "오x모", // 구매자 이름
        buyer_tel: "010-4242-4242", // 구매자 hp
        buyer_addr: "서울특별시 강남구 신사동", // 주소
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz/quiz06/payment/complete",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("/quiz/quiz06/payment/complete");
          // 백엔드에 결제관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패 했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onClickAmount = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div style={{ padding: "10px" }}>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        <select onChange={onClickAmount}>
          <option value="" disabled>
            금액을 선택해 주세요
          </option>
          <option value={500}>500원</option>
          <option value={1000}>1000원</option>
          <option value={2000}>2000원</option>
          <option value={5000}>5000원</option>
        </select>
      </div>
      <div>충전하기 버튼을 누르시면 {amount}원이 충전됩니다.</div>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
