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
                    <li className="list-group-item bg-warning">
                      {spoken_languages[0]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {spoken_languages[1]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {spoken_languages[2]}
                    </li>
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Productors:{" "}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-warning">
                      {production_companies[0]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {production_companies[1]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {production_companies[2]}
                    </li>
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Productors Countries:{" "}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-warning">
                      {production_countries[0]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {production_countries[1]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {production_countries[2]}
                    </li>
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
                    <li className="list-group-item bg-warning">
                      {created_by[0]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {created_by[1]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {created_by[2]}
                    </li>
                  </ul>
                </li>

                <li className="list-group-item bg-warning">
                  Lenguatges:{" "}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-warning">
                      {spoken_languages[0]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {spoken_languages[1]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {spoken_languages[2]}
                    </li>
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Seasons:{" "}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-warning">{seasons[0]}</li>
                    <li className="list-group-item bg-warning">{seasons[1]}</li>
                    <li className="list-group-item bg-warning">{seasons[2]}</li>
                  </ul>
                </li>
                <li className="list-group-item bg-warning">
                  Productors Countries:{" "}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-warning">
                      {production_companies[0]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {production_companies[1]}
                    </li>
                    <li className="list-group-item bg-warning">
                      {production_companies[2]}
                    </li>
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
