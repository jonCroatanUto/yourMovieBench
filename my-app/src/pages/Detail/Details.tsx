import React from "react";
import "./details.css";
function Details() {
  return (
    <>
      <div className="detailsBox container">
        <div className="row">
          <div className="col-8">
            <img
              src="https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
              alt="..."
              className="imageDetail"
            />
          </div>
          <div className="col-4">
            <ul className="list-group ">
              <li className="list-group-item bg-warning">Adult content</li>
              <li className="list-group-item bg-warning">
                Overview: "Shang-Chi must confront the past he thought he left
                behind when he is drawn into the web of the mysterious Ten Rings
                organization.",
              </li>
              <li className="list-group-item bg-warning">
                Genres:{" "}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-warning">Action</li>
                  <li className="list-group-item bg-warning">Drama</li>
                  <li className="list-group-item bg-warning">Comedia</li>
                </ul>
              </li>
              <li className="list-group-item bg-warning">
                Release_date: "2021-09-01"
              </li>
              <li className="list-group-item bg-warning">Runtime: 132</li>
              <li className="list-group-item bg-warning">
                Lenguatges:{" "}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-warning">Adult content</li>
                  <li className="list-group-item bg-warning">english</li>
                  <li className="list-group-item bg-warning">Mandarin</li>
                  <li className="list-group-item bg-warning">spanish</li>
                </ul>
              </li>
              <li className="list-group-item bg-warning">
                Productors:{" "}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-warning">Marvel Studios</li>
                  <li className="list-group-item bg-warning">other</li>
                  <li className="list-group-item bg-warning">other</li>
                </ul>
              </li>
              <li className="list-group-item bg-warning">
                Productors Countries:{" "}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-warning">United States</li>
                  <li className="list-group-item bg-warning">China</li>
                  <li className="list-group-item bg-warning">other</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
