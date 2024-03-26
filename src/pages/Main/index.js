import React from "react";
import { Banner } from "../../component/Banner";
import { Nav } from "../../component/Nav";
import { Row } from "../../component/Row";
import styled from "styled-components";
import requests from "../../api/request";

export const MainPage = () => {
  return (
    <Containner>
      <Banner />
      <Row title="현재 상영작" id="NP" fetchUrl={requests.nowPlaying} />
      <Row title="인기있는 영화" id="PM" fetchUrl={requests.Popular} />
      <Row title="개봉 예정작" id="UC" fetchUrl={requests.Upcoming} />
    </Containner>
  );
};

const Containner = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 100px;

  &:after {
    content: "";
    background: url("./img/Home_background.png") center center / cover no-repeat
      fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
