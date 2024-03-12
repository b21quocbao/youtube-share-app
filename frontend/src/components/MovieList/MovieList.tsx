import { Col, Row } from 'react-bootstrap';
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import './MovieList.css';
import { useState } from 'react';
import { Movie } from '../../types/Movie';

function MovieList() {
  const [movies, setMovies] = useState([] as Movie[]);

  return (
    <div>
      {movies.map(movie => <>
        <Row>
          <Col md={5}>
            <video src={movie.link}></video>
          </Col>
          <Col md={7}>
            <p className='text-danger'>{movie.title}</p>
            <p>Shared by: {movie.sharedBy}</p>
            <p>{movie.like}<AiOutlineLike />   {movie.dislike}<AiOutlineDislike /></p>
            <p>Description:</p>
            <p>
              {movie.description}
            </p>
          </Col>
        </Row>
      </>)}
    </div>
  );
}

export default MovieList;
