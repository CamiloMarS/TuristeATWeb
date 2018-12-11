import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { IconButton, Divider } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./style.css";

const getIconClose = type => {
  if (type === "right") {
    return <ChevronRightIcon />;
  }
  return <ChevronLeftIcon />;
};

class TDrawer extends React.Component {
  handleClose = () => {
    //Cerrar el Drawer
    this.props.closeTDrawer({ close: false });
  };

  iconCloseOrientation = orientation => {
    return orientation === "left" ? "right" : "left";
  };

  render() {
    return (
      <div>
        <Drawer
          variant="persistent"
          anchor={this.props.orientation}
          open={this.props.open}
        >
          <div
            className={`drawerHeader icon${this.iconCloseOrientation(
              this.props.orientation
            )}`}
          >
            <IconButton onClick={this.handleClose}>
              {getIconClose(this.props.orientation)}
            </IconButton>
          </div>
          <Divider />
          {this.props.children}
        </Drawer>
      </div>
    );
  }
}

export default TDrawer;
