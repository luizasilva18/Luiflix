import axios from "axios";
const moviesapi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=4e281bf0f3ee03cccebaa515d3d6613d&language=en-US&page=1"
});

export default moviesapi;
