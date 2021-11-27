import React from "react";
import { useSelector } from "react-redux";
import "./details.css";
import { RootState } from "../../redux/reducers";

function Details() {
  const { REACT_APP_API_IMAGE_URL } = process.env;
  const { movieDetails, movieDetailsShow } = useSelector(
    (state: RootState) => state.moviesReducer
  );
  const { tvShowDetails, TVshowDetailsShow } = useSelector(
    (state: RootState) => state.tvShowsReducer
  );

  if (movieDetailsShow) {
    const {
      adult,
      poster_path,
      overview,
      genres,
      release_date,
      runtime,
      spoken_languages,
      production_companies,
      production_countries,
    } = movieDetails;

    return (
      <>
        <div className="detailsBox container">
          <div className="row">
            <div className="col-8">
              <img
                src={`${REACT_APP_API_IMAGE_URL}${poster_path}`}
                alt="..."
                className="imageDetail"
              />
            </div>
            <div className="col-4">
              <ul className="list-group ">
                <li className="list-group-item bg-warning">
                  {adult ? "Adullt content" : "All public"}
                </li>
                <li className="list-group-item bg-warning">{overview}</li>
                <li className="list-group-item bg-warning">
                  Genres:{" "}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-warning">{genres[0]}</li>
                    <li className="list-group-item bg-warning">{genres[1]}</li>
                    <li className="list-group-item bg-warning">{genres[2]}</li>
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Release_date: {release_date}
                </li>
                <li className="list-group-item bg-warning">
                  Runtime: {runtime} min
                </li>
                <li className="list-group-item bg-warning">
                  Lenguatges:{" "}
                  <ul className="list-group list-group-flush">
                    {[spoken_languages].map((lenguatge: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {lenguatge}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Productors:{" "}
                  <ul className="list-group list-group-flush">
                    {[production_companies].map((company: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {company}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Productors Countries:{" "}
                  <ul className="list-group list-group-flush">
                    {[production_countries].map((country: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {country}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    const {
      in_production,
      poster_path,
      overview,
      created_by,
      spoken_languages,
      seasons,
      production_companies,
      name,
    } = tvShowDetails;
    return (
      <>
        <div className="detailsBox container">
          <div className="row">
            <div className="col-8">
              <img
                src={`${REACT_APP_API_IMAGE_URL}${poster_path}`}
                alt="..."
                className="imageDetail"
              />
            </div>
            <div className="col-4">
              <ul className="list-group ">
                <li className="list-group-item bg-warning">
                  {in_production ? "Is in production" : "not in production"}
                </li>
                <li className="list-group-item bg-warning">{overview}</li>
                <li className="list-group-item bg-warning">
                  created by:{" "}
                  <ul className="list-group list-group-flush">
                    {[created_by].map((creator: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {creator}
                        </li>
                      );
                    })}
                  </ul>
                </li>

                <li className="list-group-item bg-warning">
                  Lenguatges:{" "}
                  <ul className="list-group list-group-flush">
                    {[spoken_languages].map((lenguatge: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {lenguatge}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Seasons:{" "}
                  <ul className="list-group list-group-flush">
                    {[seasons].map((season: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {season}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Productors Countries:{" "}
                  <ul className="list-group list-group-flush">
                    {[production_companies].map((comapany: string, index) => {
                      return (
                        <li key={index} className="list-group-item bg-warning">
                          {comapany}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Details;
