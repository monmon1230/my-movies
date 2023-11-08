import React from "react";
import { Col } from "react-bootstrap";

const CardMovie = ({mov}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
     
        <div className="card">
          <img src={`https:image.tmdb.org/t/p/w500/`+mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title}</p>
              <p>  {mov.release_date}:date</p>
              <p> عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم:{mov.vote_average} </p>
            </div>
          </div>
        </div>
     
    </Col>
  );
};

export default CardMovie;