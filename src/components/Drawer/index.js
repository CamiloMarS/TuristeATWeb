import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { IconButton, Divider } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const getIconClose = type => {
  if (type === "right") {
    return <ChevronRightIcon />;
  }
  return <ChevronLeftIcon />;
};

class TDrawer extends React.Component {
  handleClose = () => {
    console.log("Cerrando oh yeah!");
  };

  render() {
    return (
      <div>
        <Drawer
          variant="persistent"
          anchor={this.props.orientation}
          open={this.props.open}
        >
          <div className="drawerHeader">
            <IconButton onClick={this.handleClose}>
              {getIconClose("right")}
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
