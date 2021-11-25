import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_URL, REACT_APP_API_IMAGE_URL } =
  process.env;
export async function moviesFetch() {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_URL}movie/popular?api_key=${REACT_APP_API_KEY}`,
  });
}
export async function movieImage(imagePath: string) {
  return axios({
    method: "GET",
    url: `${REACT_APP_API_IMAGE_URL}${imagePath}`,
  });
}
