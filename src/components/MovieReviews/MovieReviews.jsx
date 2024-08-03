import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import Loader from "../Loader/Loader";
import NotFoundPage from "../Pages/NotFoundPage";
import s from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      {reviews.length === 0 ? (
        <p>We havn`t any reviews for this movie</p>
      ) : (
        <div className={s.mainDiv}>
          <h2>Reviews</h2>
          <ul className={s.list}>
            {reviews.map((review) => (
              <li key={review.id} className={s.item}>
                <div>
                  <p className={s.name}>{review.author}</p>
                  <p className={s.description}>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}