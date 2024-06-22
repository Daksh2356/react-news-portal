import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        {/* <Footer /> */}
      </div>
    );
  };

export default DefaultLayoutHOC;
