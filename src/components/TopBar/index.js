import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputSearch from "../InputSearch";
import Typography from "@material-ui/core/Typography";
import picure from "../../logo.svg";
import Logo from "../../components/Logo";

const _styles = {
  flex: {
    display: "flex"
  },
  spaceBetween: {
    justifyContent: "space-between"
  }
};

class TopBar extends React.Component {
  state = {
    openDrawer: false
  };

  openCloseDrawer = () => {
    const { openDrawer } = this.state;
    this.setState({ openDrawer: !openDrawer });
    this.props.getStatusDrawer({ drawerOpen: !openDrawer });
  };

  getTextSearching = data => {
    console.log("Input => ", data.target.value);
  };

  render() {
    const { openDrawer } = this.state;
    return (
      <AppBar position="fixed">
        <Toolbar disableGutters={openDrawer} style={_styles.flex}>
          <Logo picture={picure} />
          <Typography variant="h6" color="inherit" noWrap>
            {this.props.title}
          </Typography>
          <div style={{ ..._styles.flex, ..._styles.spaceBetween }}>
            <InputSearch getValueInput={this.getTextSearching} />
            <IconButton
              color="inherit"
              aria-label="Open Drawer"
              onClick={this.openCloseDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
