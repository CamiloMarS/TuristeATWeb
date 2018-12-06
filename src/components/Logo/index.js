import React from "react";
import PropTypes from "prop-types";

const _styles = {
  div: {
    padding: "2px",
    display: "flex",
    alignItems: "center"
  },
  img: {
    width: "70px"
  }
};

const LogoApp = ({ image, title }) => {
  return (
    <div style={_styles.div}>
      <img src={image} alt={"Logo App"} style={_styles.img} />
      {title ? <h3>{title}</h3> : null}
    </div>
  );
};

LogoApp.propTypes = {
  image: PropTypes.string.isRequired
};
export default LogoApp;
