import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWNhN2I5NjNjMzA4ODBjZjNkOWJiMTI1N2IxZTIwYiIsIm5iZiI6MTcyMjg1Njg5NS42NzU4MTksInN1YiI6IjY2YWU0MmVkZWVlNjQwYjA1NWEzNDdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJFSoZOWBrwm-N7uxXYtqnlgn5UKe9pTI7263eupzYk",
            },
          }
        );
        setReviews(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) {
    return <p className={s.error}>Error: {error}</p>;
  }

  return (
    <div className={s.reviews}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default MovieReviews;