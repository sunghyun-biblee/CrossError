import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import "./Search.css";

export const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  useQuery();
  const searchNotion = query.get("q");
  console.log(searchNotion);

  const debounceSearchNotion = useDebounce(searchNotion, 500);

  useEffect(() => {
    if (debounceSearchNotion) {
      fetchSearchMovie(debounceSearchNotion);
    }
  }, [debounceSearchNotion]);

  const fetchSearchMovie = async (searchNotion) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchNotion}`
      );
      console.log("!");
      setSearchResult(response.data.results);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (searchResult.length > 0) {
    return (
      <section className="search_container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieIMG =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  className="movie_poster_column"
                  onClick={() => {
                    navigate(`/${movie.id}`);
                  }}
                >
                  <img src={movieIMG} alt="movie" className="movie_poster" />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <div className="no_results">
        <div className="no_result_text">
          <p>검색하신 검색어 "{searchNotion}"에 맞는 영화가 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!searchNotion && "검색결과가 없습니다"}
      {searchNotion &&
        searchResult?.length >= 1 &&
        searchResult.map((items) => (
          <div key={items.id}>
            <p>{items.title}</p>
            <p>{items.release_date}</p>
            <img
              style={{ width: "100px", height: "100px" }}
              src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
              alt="movie"
            />
          </div>
        ))}
      {searchNotion && searchResult?.length == 0 && "영화가 없습니다"}
    </div>
  );
};
