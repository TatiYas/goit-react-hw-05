import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";


// eslint-disable-next-line react/prop-types
const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link
              className={s.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {" "}
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;



