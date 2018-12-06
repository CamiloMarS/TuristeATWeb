import React from "react";
import PropTypes from "prop-types";

const _styles = {
  header: {
    background: "rgba(0,0,0,.3)",
    heaight: "40px",
    width: "100%",
    diplay: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
};

class Header extends React.Component {
  render() {
    return (
      <header key={1} style={_styles.header}>
        {this.props.children}
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.object.isRequired
};

export default Header;
