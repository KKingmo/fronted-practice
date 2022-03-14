import { MyTitle, MyEmail, MyLabel } from "../../styles/emotion";

export default function AAAPage() {
    return (
        <MyTitle>
            로그인
            <MyLabel>아이디</MyLabel>
            <MyEmail type="text" />
            <MyLabel>비밀번호</MyLabel>
            <MyEmail type="text" />
        </MyTitle>
    );

    // return (
    //     <MyTitle>
    //         로그인
    //         <MyEmail type="text" />
    //         <img src="/aaa/lotto.png" />
    //     </MyTitle>
    // );
}
