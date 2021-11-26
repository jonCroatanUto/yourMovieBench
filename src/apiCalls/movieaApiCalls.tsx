import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export async function moviesFetch() {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}movie/popular?api_key=${REACT_APP_API_KEY}`,
  });
}
export async function movieDetails(id: number) {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}movie/${id}?api_key=${REACT_APP_API_KEY}`,
  });
}
