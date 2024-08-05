import SearchBar from "../../SearchBar/SearchBar";
import MovieList from "../../MovieList/MoviesList";
import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../../../movies-api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get("query") ?? "";

  const onSubmit = (newValue) => {
    setSearchParams({ query: newValue });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSearchMovies(filterValue);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [filterValue]);
  return (
    <div>
      <SearchBar filterValue={filterValue} onSubmit={onSubmit} />

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;