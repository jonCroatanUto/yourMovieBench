import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export default async function moviesFetch() {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}movie/popular?api_key=${REACT_APP_API_KEY}`,
  });
}
