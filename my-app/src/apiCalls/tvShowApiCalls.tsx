import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export async function tvShowsFetch() {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}tv/popular?api_key=${REACT_APP_API_KEY}`,
  });
}
export async function tvShowDetails(id: number) {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}tv/${id}?api_key=${REACT_APP_API_KEY}`,
  });
}
