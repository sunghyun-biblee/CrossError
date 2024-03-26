import React from "react";
import "./Moviemodal.css";
export const Moviemodal = ({
  setModal,
  title,
  overview,
  name,
  release_date,
  vote_average,
  backdrop_path,
  first_air_date,
}) => {
  return (
    <div className="presentaition_modal" role="presentation">
      <div className="wrapper_modal">
        <div className="modal">
          <span
            className="modal_close"
            onClick={() => {
              setModal(false);
            }}
          >
            ❌
          </span>
          <div style={{ position: "relative" }}>
            <img
              className="modal_poster"
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt="modalImg"
            />
            <div className="modal_background"></div>
          </div>
          <div className="modal_content">
            <p className="modal_details">
              <span style={{ color: "#00AA4D" }}>99% 취향일치 </span>
              <span style={{ color: "#838B92" }}>
                {release_date ? release_date : first_air_date}
              </span>
            </p>
            <h2 className="modal_title">{title ? title : name}</h2>
            <p>평점 : {vote_average}</p>
            <p>개요 : {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
