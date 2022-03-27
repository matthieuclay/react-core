import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h2>Error 404</h2>
        <NavLink to="/">
          <h3>Back to home page</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
