
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../movies-api";

const MovieCast = () => {
  const defaultImg =
    "https://i.pinimg.com/originals/97/da/61/97da61ddaa18f29e11eded6554822d37.jpg";

  const params = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(params.movieId).then((data) => setCast(data));
  }, [params.movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <p>
            {actor.name} as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;