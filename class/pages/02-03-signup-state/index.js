import { useState } from 'react'

export default function SignupStatePage(){
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")

    function onChangeEmail(event){
        console.log(event.target.value)
        // event.target       => 태그전체 <input type="text" ...
        // event.target.value => 우리가 입력한 값 a@a.com
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onClickSignup(){
        // 진짜 포장이 잘 됐는지 확인해보기
        console.log(email)
        console.log(password)

        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다!! @가 없음!!")
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
        } else {
            alert("회원가입을 축하합니다!!!")
        }
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )

}