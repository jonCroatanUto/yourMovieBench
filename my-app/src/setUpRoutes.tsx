import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Detail/Details";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "component2", element: <Details /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
