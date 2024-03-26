import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";
import { Moviemodal } from "./Moviemodal";
export const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [seletedMovie, setSeletedMovie] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);
    setMovies(response.data.results);
  }, [fetchUrl]);
  // 의존성 배열의 변수중 값이 하나라도 변경된다면 callback함수를 반환한다
  // callback 함수 => 함수가 끝난뒤에 다시 실행
  // 값의 하나라도 변화가 있다면 callback 함수가 재요청해서 값을 받아옴
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModal(true);
    setSeletedMovie(movie);
    return;
  };
  return (
    <div style={{ padding: "0 calc(3.5vw + 5px)" }}>
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row_poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => {
                handleClick(movie);
              }}
            />
          ))}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>
      {modal && <Moviemodal {...seletedMovie} setModal={setModal} />}
    </div>
  );
};
