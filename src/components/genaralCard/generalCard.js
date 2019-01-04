import React from "react";
import PropTypes from "prop-types";
import "./generalCard.css";

function GeneralCard(WrappedComponent) {
  return class extends React.Component {
    showDetailsCard = event => {
      console.log("GeneralCard ", event.target.nodeName);
    };

    render() {
      return (
        <div className="CardActionArea" onClick={this.showDetailsCard}>
          <div>
            <p>{this.props.title}</p>
            {this.props.description}
          </div>
          <WrappedComponent className="ocultar" {...this.props} />
        </div>
      );
    }
  };
}

GeneralCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default GeneralCard;
