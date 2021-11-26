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
    next_episode_to_air: {
      air_date: "",
      episode_number: 0,
      name: "",
      overview: "",
      season_number: 0,
    },

    spoken_languages: [],
    seasons: [],
    production_companies: [],
    name: "",
  },
  TVshowDetalisShow: false,
};
export default initialState;
