import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  const initialUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {};
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [serachValue, setSearchValue] = useState("");
  const navi = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [currentUser, setCurrentUser] = useState([]);

  const user = auth.currentUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === "/") {
          navi("/main");
        }
      } else {
        navi("/");
      }
    });
  }, [auth, provider]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(serachValue);
    navi(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result.user);
        setCurrentUser(result.user);
        localStorage.setItem("userData", JSON.stringify(result.user));
      })
      .catch((error) => alert(error.message));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser([]);
        navi("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <NavWrap show={show}>
        <Logo>
          <img
            src="/img/logo.webp"
            alt="Coupang Play Logo"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </Logo>
        {pathname === "/" ? (
          <Login onClick={handleAuth}>로그인</Login>
        ) : (
          <>
            <SearchBar
              type="text"
              placeholder="검색"
              value={serachValue}
              onChange={handleChange}
            />
            <Logut>
              <UserImg
                src={currentUser.photoURL}
                alt={currentUser.displayName}
              ></UserImg>
              <Dropbox>
                <span onClick={handleLogout}>로그아웃</span>
              </Dropbox>
            </Logut>
          </>
        )}
      </NavWrap>
    </>
  );
};

// 로그인 성공 -> 인증된 사용자면 메인페이지로
// 로그인이 안되어있으면 login page로 이동
const Dropbox = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  font-size: 15px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const Logut = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${Dropbox} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #fff;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #fff;
    color: gray;
    border-color: transparent;
  }
`;
const SearchBar = styled.input`
  width: 70px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  color: black;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.582);
  transition: width 0.2s ease-in 0s;
  &:focus {
    outline: none;
    width: 130px;
  }
`;

const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: ${(props) => (props.show ? "#090b13" : "transparent")};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;
