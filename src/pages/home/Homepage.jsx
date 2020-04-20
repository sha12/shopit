import React from "react";
import "./HomePageStyle.scss";
import Directory from "../../components/directory/Directory";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
);

export default Homepage;
