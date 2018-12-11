import React from "react";
import PropTypes from "prop-types";

const hocStyles = {
  padding: "10px",
  boder: "2px groove #bbb",
  boxShadow: "0px 0px 2px #bbb"
};

const HOCARD = component => {
  return class extends React.Component {
    handledClick = value => {
      this.props.cardClicked({ id: 0, data: value });
    };

    render() {
      return (
        <component
          {...this.props}
          onClick={this.handledClick}
          style={{ ...hocStyles }}
        />
      );
    }
  };
};

HOCARD.propTypes = {
  component: PropTypes.element.isRequired
};
export default HOCARD;
