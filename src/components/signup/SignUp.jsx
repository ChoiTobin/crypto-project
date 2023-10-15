import './SignUp.css';
import { useState } from 'react';
export default function SignUp() {
  const [initdata, setinitdata] = useState({
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const InputTextHandler = (event) => {
    const { name, value } = event.target;
    setinitdata({ ...initdata, [name]: value });
  };
  const SubmitHandler = () => {
    PasswordMatch();
  };

  const PasswordMatch = () => {
    if (initdata.password === initdata.passwordCheck) {
      setinitdata({
        nickname: '',
        password: '',
        passwordCheck: '',
      });
    } else {
      setinitdata({
        password: '',
        passwordCheck: '',
      });
      alert('비밀번호 재확인');
    }
  };

  const idRegEx = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
  const idResult = idRegEx.test(initdata.nickname);
  console.log(idResult, 'idResult'); // true

  const pwRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])[^\s]{8,20}$/;
  const pwResult = pwRegEx.test(initdata.password);
  console.log(pwResult, 'pwResult');

  const pwCheckRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])[^\s]{8,20}$/;
  const pwCheckResult = pwCheckRegEx.test(initdata.passwordCheck);
  console.log(pwCheckResult, 'pwCheck');

  if (idResult === true && pwResult === true && pwCheckResult === true) {
    console.log(
      '정규식은 통과 서버에서 아이디 중복 및 아이디 패스워드 맞는지 확인후 login으로',
    );
  }

  /*
    ING.....
    nickname pw pwc auth
    가능한 특수문자 @#$%^&+=!
    아이디 비밀번호 맞는지 서버에서
    
    id 중복검사
    CLIENT
    아이디 8자 이상 되야함 +특수문자 빼고 영어+숫자만, 20자 이내 --완료
    패스워드 8자 이상 20자 이내 모두 특수문자등 다 혼합 해야함 반드시, 공백 제거 --완료
    패스워드 체크 8자리 이상 20자 이내 모두 혼합 해야함 반드시  --완료
    위에 비밀번호랑 맞는지 , 공백제거 --완료
    
    나머지 서버에서 받아서 알려주는것.
    SERVER
    아이디 중복체크
    비밀번호 틀렸는지
    패스워드체크 틀렸는지
    비밀번호 해싱: 서버는 비밀번호를 안전하게 저장하기 위해 해싱과 솔팅(Salt)을 사용해야 합니다. 비밀번호를 평문으로 저장하지 않도록 주의해야 합니다.
    인증 및 권한 확인
    세션 및 토큰 관리
    IP 블랙리스트
    비밀번호 재설정

  */

  return (
    <>
      <input
        name="nickname"
        value={initdata.nickname}
        onChange={InputTextHandler}
      />
      <input
        name="password"
        value={initdata.password}
        type="password"
        onChange={InputTextHandler}
      />
      <input
        name="passwordCheck"
        value={initdata.passwordCheck}
        type="password"
        onChange={InputTextHandler}
      />
      <button onClick={SubmitHandler}>test버튼</button>
    </>
  );
}
