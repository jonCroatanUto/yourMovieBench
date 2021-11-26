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
    genres: [],
    release_date: "",
    runtime: 0,
    spoken_languages: [],
    production_companies: [],
    production_countries: [],
  },
  movieDetailsShow: false,
};
export default initialState;
