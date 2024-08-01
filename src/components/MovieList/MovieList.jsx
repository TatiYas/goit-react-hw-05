import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();
  if (movies.length === 0) {
    return <p>No movies to display</p>;
  }
  return (
    <ul className={s.lists}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}