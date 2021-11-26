const initialState = {
  tvShowData: [
    {
      id: 0,
      vote_average: 0,
      title: "",
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
  ],
  tvShowPosition: 0,
  tvShowDetails: {
    in_production: false,
    poster_path: "",
    overview: "",
    created_by: [],

    spoken_languages: [],
    seasons: [],
    production_companies: [],
    name: "",
  },
  TVshowDetailsShow: false,
};
export default initialState;
