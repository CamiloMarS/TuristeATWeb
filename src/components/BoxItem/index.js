import React from "react";
import PropTypes from "prop-types";
import Slideshow from "@material-ui/icons/Slideshow";
import "../../shareStyles/effectsComponents.css";

const BoxItem = ({ itemData }) => {
  return (
    <div className="boxItem" id={itemData.cod}>
      <span className="boxItem-title">{itemData.name}</span>
      <span className="boxItem-icon">
        <Slideshow />
      </span>
    </div>
  );
};

BoxItem.propTypes = {
  itemData: PropTypes.object.isRequired
};
export default BoxItem;
