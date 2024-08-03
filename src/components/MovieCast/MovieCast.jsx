import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../movies-api";
import Loader from "../Loader/Loader";
import NotFoundPage from "../Pages/NotFoundPage";
import s from "./MovieCast.module.css";

const defaultImg =
  "https://i.pinimg.com/originals/57/67/7a/57677a3925b3e43538a3f13a70d0307d.jpg";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <div className={s.mainDiv}>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      <ul className={s.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.item}>
            <img
              className={s.img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w450${actor.profile_path}`
                  : defaultImg
              }
              width={300}
              alt={actor.name}
            />
            <p className={s.name}>{actor.name}</p>
            <p className={s.description}>
              <span className={s.accent}> Role:</span> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}