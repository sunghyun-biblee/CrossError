import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./Deatile.css";
export const Detaile = () => {
  const [movieDetail, setMovieDetaile] = useState([]);
  const [popular, setPopular] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname) {
      fetchSearchDeatil(pathname);
    }
  }, [pathname]);
  useEffect(() => {
    if (movieDetail.vote_count && movieDetail.vote_average) {
      setPopular();
    }
  }, [movieDetail]);
  const fetchSearchDeatil = async (pathname) => {
    try {
      const response = await axios.get(`/movie${pathname}`);

      setMovieDetaile(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movieDetail);
  return (
    <Conatiner>
      {movieDetail && (
        <div className="detail_wrap">
          <div className="detail_box">
            <span></span>
            <div style={{ position: "relative" }}>
              <img
                className="detail_img"
                src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
                alt="detailIMG"
              />
              <div className="detail_background"></div>
              <h1 className="title">
                {movieDetail.title ? movieDetail.title : movieDetail.name}
              </h1>
              <span className="close_btn" onClick={() => window.history.back()}>
                ❌
              </span>
            </div>
            <div className="info">
              <div className="infobox one">
                <p className="date">출시일 : {movieDetail.release_date}</p>
                <p className="video">
                  예고편 : {movieDetail.video ? "지원" : "지원하지않음"}
                </p>
              </div>
              <div className="infobox two">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className="popular">인기도 : {movieDetail.popularity}</p>
                  <span className="slice">|</span>
                  <p className="vote_average">
                    평점 : {movieDetail.vote_average}
                  </p>
                  <span className="slice">|</span>
                  <p className="runtime">{movieDetail.runtime}분</p>
                </div>
                <p className="status">{movieDetail.status}</p>
              </div>
              <div className="infobox three">
                <p className="overview">{movieDetail.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Conatiner>
  );
};

const Conatiner = styled.div`
  padding-top: 100px;
  max-width: 1300px;
  margin: 0 auto;
  transition: max-width 0.5s;
  @media screen and (max-width: 1315px) {
    max-width: 900px;
  }
  @media screen and (max-width: 950px) {
    max-width: 700px;
  }
  @media screen and (max-width: 768px) {
    max-width: 550px;
  }
`;
