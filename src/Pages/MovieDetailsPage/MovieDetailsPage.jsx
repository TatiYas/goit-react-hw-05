
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const prevLocation = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWNhN2I5NjNjMzA4ODBjZjNkOWJiMTI1N2IxZTIwYiIsIm5iZiI6MTcyMjg1Njg5NS42NzU4MTksInN1YiI6IjY2YWU0MmVkZWVlNjQwYjA1NWEzNDdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJFSoZOWBrwm-N7uxXYtqnlgn5UKe9pTI7263eupzYk",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.container}>
      <Link to={prevLocation.current} className={s.buttonBack}>
        Go back
      </Link>
      <div className={s.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={s.poster}
        />
        <div className={s.info}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
      <div className={s.additionalInfo}>
        <Link to={`cast`} className={s.link}>
          Cast
        </Link>
        <Link to={`reviews`} className={s.link}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;