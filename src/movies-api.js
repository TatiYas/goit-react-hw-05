
import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const apiToken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWNhN2I5NjNjMzA4ODBjZjNkOWJiMTI1N2IxZTIwYiIsIm5iZiI6MTcyMjg1Njg5NS42NzU4MTksInN1YiI6IjY2YWU0MmVkZWVlNjQwYjA1NWEzNDdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJFSoZOWBrwm-N7uxXYtqnlgn5UKe9pTI7263eupzYk";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return response.data.results;
};

export const fetchSearchMovies = async (searchValue) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      params: {
        query: searchValue,
      },
    }
  );
  return response.data.results;
};

export const fetchMoviesById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US `,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};

export const fetchCastById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data.cast;
};

export const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};