import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export default async function tvShowsFetch() {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}tv/popular?api_key=${REACT_APP_API_KEY}`,
  });
}
