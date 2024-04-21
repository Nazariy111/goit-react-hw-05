import axios from "axios";

const options = (url, query) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/${url}`,
    params: { query: `${query}`, include_adult: "false", language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWIyYTVjNGNjODEzMTY4OTYxNDNiYmYxOWYwNjEwNiIsInN1YiI6IjY2MjRmYjhiMjIxYmE2MDE0OTEyOGJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2jUVte11zmBZNmzcnjUZpz-3Dh2khhaI09tReSvGTxE",
    },
  };
};

export const requestMovies = async (query) => {
  const data = await axios.request(options(`3/search/multi`, query));

  return data;
};

export const requestTrendMovies = async (query) => {
  const data = await axios.request(options("3/trending/movie/day", query));

  return data;
};

export const requestMovieDetails = async (id) => {
  const data = await axios.request(options(`3/movie/${id}`));
  return data;
};

export const requestMovieCast = async (id) => {
  const data = await axios.request(options(`3/movie/${id}/credits`));
  return data;
};

export const requestMovieReviews = async (id) => {
  const data = await axios.request(options(`3/movie/${id}/reviews`));
  return data;
};