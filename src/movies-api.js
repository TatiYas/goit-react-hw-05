import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWNhN2I5NjNjMzA4ODBjZjNkOWJiMTI1N2IxZTIwYiIsIm5iZiI6MTcyMjg1Njg5NS42NzU4MTksInN1YiI6IjY2YWU0MmVkZWVlNjQwYjA1NWEzNDdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJFSoZOWBrwm-N7uxXYtqnlgn5UKe9pTI7263eupzYk";
const BASIC_URL = "https://api.themoviedb.org/3";
const END_POINT_TRENDS = "/trending/movie/day";
const END_POINT_SEARCH = "/search/movie";
const END_POINT_ID = "/movie/";
const END_POINT_REVIEWS = "/reviews";

export const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  params: {
    query: "",
    include_adult: false,
    language: "en-US",
    page: 1,
  },
};

export const getMovieDetails = async (id) => {
  const url = `${BASIC_URL}${END_POINT_ID}${id}`;

  const { data } = await axios.get(url, options);
  return data;
};

export const fetchTrendingMovies = async () => {
  const url = `${BASIC_URL}${END_POINT_TRENDS}`;

  const { data } = await axios.get(url, options);
  return data.results;
};

export const fetchMoviesSearch = async (searchQuery) => {
  const url = `${BASIC_URL}${END_POINT_SEARCH}`;

  const { data } = await axios.get(url, {
    ...options,
    params: { query: searchQuery },
  });
  return data.results;
};

export const fetchMoviesById = async (id) => {
  const url = `${BASIC_URL}${END_POINT_ID}${id}`;

  const { data } = await axios.get(url, options);
  return data;
};

export const fetchReviewsById = async (id) => {
  const url = `${BASIC_URL}${END_POINT_ID}${id}${END_POINT_REVIEWS}`;

  const { data } = await axios.get(url, options);
  return data;
};