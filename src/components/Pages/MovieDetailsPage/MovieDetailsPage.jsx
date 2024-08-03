import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../../movies-api";
import Loader from "../../Loader/Loader";
import NotFoundPage from "../NotFoundPage";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const defaultImg =
  "https://i.pinimg.com/originals/e8/ed/99/e8ed9918064b3f6e6b2b205d4e4584b8.jpg";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  const makeLinksClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.isActive);
  };

  return (
    <div className={s.main}>
      <Link to={backLink.current}>Go back</Link>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}

      {movie && (
        <div className={s.box}>
          <img
            className={s.poster}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div className={s.boxAbout}>
            <h2 className={s.title}>{movie.title}</h2>
            <p className={s.description}>{movie.overview}</p>
            <p className={s.span}>
              Popularity: <span>{Math.round(movie.popularity)}</span>
            </p>
            <p className={s.span}>
              Genres:{" "}
              <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
            </p>
          </div>
        </div>
      )}
      <h2>Additional Information</h2>
      <ul className={s.list}>
        <li className={s.linka}>
          <NavLink to="cast" className={makeLinksClass}>
            Cast
          </NavLink>
        </li>
        <li className={s.linka}>
          <NavLink to="reviews" className={makeLinksClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default MovieDetailsPage;