import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization:
            'https://api.themoviedb.org/3/movie/550?api_key=1eca7b963c30880cf3d9bb1257b1e20b',
    },
};

export const getTrendingMovies = async () => {
    const url = '/trending/movie/day';

    const response = await axios.get(url, options);
    return response.data.results;
};
export const getMovieDetails = async (movieId) => {
    const url = `/movie/${movieId}`;

    const response = await axios.get(url, options);
    return response.data;
};
export const searchMovies = async (searchQuery) => {
    const url = `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieCredits = async (movieId) => {
    const url = `/movie/${movieId}/credits`;

    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieReviews = async (movieId) => {
    const url = `/movie/${movieId}/reviews`;

    const response = await axios.get(url, options);
    return response.data;
};

















