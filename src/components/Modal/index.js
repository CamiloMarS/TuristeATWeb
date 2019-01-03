import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  let top, left;
  top = 50 + rand();
  left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}; //end getModalStyle

class GModal extends Component {
  render() {
    //Props
    const { isOpen } = this.props;

    return (
      <Modal open={isOpen} color="red">
        <div style={getModalStyle()}>
          <Typography>Modal Test</Typography>
        </div>
      </Modal>
    );
  }
}

export default GModal;
