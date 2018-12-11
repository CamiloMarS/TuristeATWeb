import React, { Component } from "react";
import logo from "../logo.svg";
import { main, topHeader, menuOptions } from "../shareStyles/containersStyles";
import NavMenu from "../components/NavMenu";
import { directorio } from "../configs/Links";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "../Route/index";
import { connect } from "react-redux";
import { navigateToPage } from "../redux/reducers/LandingPage";
import TList from "../components/List/index.js";
import TopBar from "../components/TopBar";

//Components
import Header from "../components/Header";
import LogoApp from "../components/Logo";
import InputSearch from "../components/InputSearch";
import { bindActionCreators } from "redux";
import TDrawer from "../components/Drawer";

class Main extends Component {
  state = {
    open: false
  };
  getValueSearch = event => {
    event.preventDefault();
    console.log("Buscar: ", event.target.value);
  };

  changePage = idPage => {
    this.props.setCurrentPage(idPage);
  };

  getStatusDrawer = value => {
    const { drawerOpen } = value;
    this.setState({ open: drawerOpen });
  };

  closeLateralPanel = information => {
    const { close } = information;
    this.setState({ open: close });
  };

  render() {
    return (
      <Router>
        <div style={{ ...main }}>
          <TopBar title="Drawer Title" getStatusDrawer={this.getStatusDrawer} />
          <TDrawer
            open={this.state.open}
            orientation="right"
            closeTDrawer={this.closeLateralPanel}
          >
            <TList collection={directorio()} />
          </TDrawer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    toNavigate: state.landingPageReducer.toJS().currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setCurrentPage: navigateToPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

/**
 * 
 * 
 * 
 * <Header>
            <div>
              <div style={{ ...topHeader }}>
                <LogoApp image={logo} />
                <InputSearch getValueInput={this.getValueSearch} />
              </div>
              <div style={{ ...menuOptions }}>
                <NavMenu
                  type="Horizontal"
                  collection={directorio()}
                  action={this.changePage}
                />
              </div>
            </div>
          </Header>

          {/** Router here 

          <Root link={this.props.toNavigate} />
          <TList
            collection={[
              { id: 0, text: "Primer Elemento" },
              { id: 1, text: "Segundo Elemento" }
            ]}
          />
 * 
 * 
 */
