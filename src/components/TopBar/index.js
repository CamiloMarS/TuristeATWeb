import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

class TopBar extends React.Component {
  state = {
    openDrawer: false
  };

  openCloseDrawer = () => {
    const { openDrawer } = this.state;
    this.props.getStatusDrawer({ drawerOpen: !openDrawer });
    this.setState({ openDrawer: !openDrawer });
  };

  render() {
    const { openDrawer } = this.state;
    return (
      <AppBar position="fixed">
        <Toolbar disableGutters={openDrawer}>
          <IconButton
            color="inherit"
            aria-label="Open Drawer"
            onClick={this.openCloseDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
