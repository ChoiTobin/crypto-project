import * as React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'; // styled-components를 import합니다.
import axios from 'axios';
export default function SignIn() {
  interface propsLogin {
    nickname:string,
    password:string,
  }
  const navigate = useNavigate();

  const [initdata, setinitdata] = useState<propsLogin>({
    nickname: '',
    password: '',
  });

  const idRegEx = /^[a-zA-Z0-9]{8,20}$/;
  const pwRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])[^\s]{8,20}$/;

  const idResult = idRegEx.test(initdata.nickname);
  const pwResult = pwRegEx.test(initdata.password);

  const InputTextHandler = (event:any) => {
    const { name, value } = event.target;
    setinitdata({ ...initdata, [name]: value });
  };
  const IdPwCheckMatch = () => {
    if (idResult === true && pwResult === true) {
      //아이디 비밀번호 체크 - 글자수,양식,대문자,특수문자,공백,내용 미입력 없는지 확인후
      ApiAuthFetch();
    }
  };
  const SubmitHandler = () => {
    IdPwCheckMatch();
  };

  const ApiAuthFetch = async () => {
    const accessToken = localStorage.getItem('access_token');

    try {
      const response = await axios.post(
        'http://localhost:3000/auth/signin',
        {
          Id: initdata.nickname,
          Pw: initdata.password,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const data = response.data;

      if (data.status === 200) {
        navigate('/');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('데이터를 보내는 중 에러가 발생했습니다:', error);
    }
  };

  

  const handleClickSignin = () => {
    // 예: 다른 경로로 이동
    navigate('/signup');
  };
  return (
    <>
      <ContainerBox>
        <Box>
          <div style={{ marginLeft: '30px', marginBottom: '30px' }}>
            <Container>
              <NeonText>Crypto</NeonText>
              <FluxText>SignIn</FluxText>
            </Container>
          </div>
          <InputBox>
            <Input
              placeholder="Username"
              name="nickname"
              value={initdata.nickname}
              onChange={InputTextHandler}
            />
          </InputBox>

          {idResult === true ? null : (
            <IdCheckColor>8-20자 영문 또는 숫자</IdCheckColor>
          )}
          <InputBox>
            <Input
              placeholder="Password"
              name="password"
              value={initdata.password}
              type="password"
              onChange={InputTextHandler}
            />
          </InputBox>
          {pwResult === true ? null : (
            <PwCheckColor>8-20자 소문자,대문자,숫자,특문 포함</PwCheckColor>
          )}

          <ButtonBox>
            <Button onClick={SubmitHandler}>Sign In</Button>
          </ButtonBox>
          <div
            onClick={handleClickSignin}
            style={{
              margin: '10px',
              color: 'white',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            회원가입 아직 안하셨나요?
          </div>
        </Box>
      </ContainerBox>
    </>
  );
}
const ContainerBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  text-align: center;
`;
const InputBox = styled.div`
  margin-bottom: 10px;
`;
const ButtonBox = styled.div``;
const Input = styled.input`
  width: 80%;
  height: 40px;
  border: 2px solid transparent;
  border-bottom: 1px solid gray;
  background-color: transparent;
  color: white;
`;
const Button = styled.button`
  width: 80%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 3px;
  background-color: gray;
  color: white;
  font-size: bold;
  cursor: pointer;
`;
const Container = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const neonAnimation = keyframes`
  0%, 100% {
    transform: translateZ(1px) translate(0, 0) scale(1.01);
    text-shadow: 0 0 1px #FA1C16, 0 0 3px #FA1C16, 0 0 10px #FA1C16, 0 0 10px #FA1C16, 0 0 0.04px #FED128, 0.5px 0.5px 0.1px #806914;
    color: #FED128;
  }
  50% {
    transform: translateZ(1px) translate(0, 0) scale(1.01);
    text-shadow: 0 0 0.05px #800E0B, 0 0 0.15px #800E0B, 0 0 0.5px #800E0B, 0 0 0.5px #800E0B, 0 0 0.02px #800E0B, 0.5px 0.5px 0.1px #40340A;
    color: #806914;
  }
`;


const NeonText = styled.div`
  font-family: neon;
  color: #fb4264;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #f40a35;
  animation: ${neonAnimation} 2s ease infinite;
`;

const fluxAnimation = keyframes`
  0%, 100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
`;

const FluxText = styled.div`
  font-family: neon;
  color: #426dfb;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #2356ff;
  animation: ${fluxAnimation} 2s linear infinite;
`;
const IdCheckColor = styled.div`
  color: orange;
  opacity: 0.6;
  font-size: 11px;
`;

const PwCheckColor = styled.div`
  color: orange;
  opacity: 0.6;
  font-size: 11px;
  margin-bottom: 10px;
`;
