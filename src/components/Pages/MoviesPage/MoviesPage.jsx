import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../../movies-api";
import MovieList from "../../MovieList/MovieList";
import Loader from "../../components/Loader/Loader"
import NotFoundPage from "../NotFoundPage";
import s from "./MoviesPage.module.css";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        try {
          setIsLoading(true);
          const data = await searchMovies(query);
          setMovies(data.results);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };
      getMovies();
    }
  }, [query]);

  return (
    <div className={s.box}>
      
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;