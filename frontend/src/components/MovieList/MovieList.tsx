import { Col, Row } from "react-bootstrap";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import "./MovieList.css";
import { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import { useAppProvider } from "../../provider/AppProvider";

function MovieList() {
  const [movies, setMovies] = useState([] as Movie[]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/movies`,
        {
          method: "GET",
        }
      );
      const json = await response.json();

      setMovies(json.body);
    })();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Row key={movie.id}>
          <Col md={5}>
            <video className="w-100 h-75" src={movie.link} controls></video>
          </Col>
          <Col md={7}>
            <p className="text-danger">{movie.title}</p>
            <p>Shared by: {movie.user.email}</p>
            <p>
              {movie.like}
              <AiOutlineLike /> {movie.dislike}
              <AiOutlineDislike />
            </p>
            <p>Description:</p>
            <p>{movie.description}</p>
          </Col>
          <hr className="border-1" />
        </Row>
      ))}
    </div>
  );
}

export default MovieList;
