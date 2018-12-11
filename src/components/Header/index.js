import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return <header key={1}>{this.props.children}</header>;
  }
}

Header.propTypes = {
  children: PropTypes.object.isRequired
};

export default Header;
