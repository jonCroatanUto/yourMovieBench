const initialState = {
  movieData: [
    {
      id: 0,
      vote_average: 0,
      title: "",
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
  ],
  moviePosition: 0,
  movieDetails: {
    adult: false,
    poster_path: "",
    overview: "",
    genres: [{ name: "string" }],
    release_date: "",
    runtime: 0,
    spoken_languages: [{ name: "string" }],
    production_companies: [{ name: "string" }],
    production_countries: [{ name: "string" }],
  },
};
export default initialState;
