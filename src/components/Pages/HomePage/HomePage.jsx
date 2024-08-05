import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../../movies-api";
import Loader from "../../Loader/Loader";
import MovieList from "../../MovieList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </div>
  );
};

export default HomePage;