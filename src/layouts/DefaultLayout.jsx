import React from "react";
import Navbar from "../components/Navbar";

const DefaultLayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    );
  };

export default DefaultLayoutHOC;
