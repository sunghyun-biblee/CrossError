import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 100px;
  p {
    font-size: 30px;
  }
  .Login {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .login_box {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
      padding-bottom: 10px;
      text-align: center;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
    input {
      margin: 10px 0 10px 0;
      height: 25px;
      background-color: #000;
      border: 1px solid #5555;
      color: #aaaaaa;
      border-radius: 5px;
      padding: 10px;
    }
    button {
      cursor: pointer;
      margin-top: 20px;
      height: 40px;
      padding: 5px;
      font-size: 16px;
      font-weight: 600;
      border: none;
    }
    .google_login {
      background-color: #00a7f6;
      color: #eeee;
    }
    .basic_login {
      background-color: #000;
      border: 1px solid #eeee;
      color: #eeee;
      border-radius: 5px;
    }
    .find_box {
      padding-top: 20px;
      display: flex;
      justify-content: center;
      span {
        padding: 5px;
        &:nth-child(2) {
          color: gray;
          font-weight: 700;
        }
      }
    }
  }
`;
export const Login = () => {
  const [user, setUser] = useState();
  // const signUpGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <Container className="container">
      <div className="Login">
        <div className="login_container">
          <div className="login_box">
            <p>OTT Service</p>
            {/* <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" /> */}
            <button className="basic_login"> 로그인</button>
            {/* <button onClick={signUpGoogle} className="google_login">
              구글 아이디로 로그인하기
            </button> */}

            <div className="find_box">
              <div>
                <span>아이디 찾기</span>
                <span>|</span>
                <span>비밀번호 찾기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
