import axios from 'axios';

const API_KEY = '223c40237b96b8e8efdd24f8c78d187e'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const options = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjNjNDAyMzdiOTZiOGU4ZWZkZDI0ZjhjNzhkMTg3ZSIsIm5iZiI6MTczMjMyNDU4Ny44MDkyMjAzLCJzdWIiOiI2NzNkNzIwODg3OTE3MDc4ZDAxMDgzMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WgX4-C6cLH5VsGLFXfI9d-43Nvs03ICJCxXd1maXKds';

const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${options}` }
  });
  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query, api_key: API_KEY, language: 'en-US' },
  });
  return response.data.results;
};

const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

const getMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });
  return response.data.cast;
};

const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export { fetchTrendingMovies, searchMovies, getMovieDetails, getMovieCast, getMovieReviews };
