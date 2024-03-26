import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/request";
import styled from "styled-components";
import "./banner.css";

export const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.nowPlaying);
    console.log(response.data.results);
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  const cut = (str, n) => {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  };
  console.log(movie?.videos);
  if (click) {
    return (
      <Container>
        <InnerContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640px"
            height="360px"
            frameBorder="0"
            allow="autoplay:fullscreen"
          ></Iframe>
          <CloseBox onClick={() => setClick(false)}>❌</CloseBox>
        </InnerContainer>
      </Container>
    );
  }
  return (
    <header
      className="banner"
      style={
        {
          // backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          // backgroundPosition: "top center",
          // backgroundSize: "cover",
        }
      }
    >
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="movie"
      />
      <div className="banner_content">
        <h1 className="banner_title">
          {movie.original_title || movie.title || movie.name}
        </h1>
        <p className="banner_overview">
          {/* {movie.overview && movie.overview.length >= 100
            ? `${movie.overview.slice(0, 100)}...`
            : movie.overview} */}
          {cut(movie.overview, 100)}
        </p>
        <div className="banner_buttons">
          <button className="banner-btn play" onClick={() => setClick(true)}>
            PLAY
          </button>
          {/* <button className="banner-btn info">상세정보</button> */}
        </div>
      </div>
    </header>
  );
};

const CloseBox = styled.button`
  position: absolute;
  margin-top: 50px;
  top: 30;
  left: 0;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.7;
  border: none;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
