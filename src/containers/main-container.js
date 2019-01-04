import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//My Imports
import { rootContent } from "../shareStyles/containersStyles";
import { directorio } from "../configs/Links";
import Root from "../Route/index";
import { navigateToPage } from "../redux/reducers/LandingPage";

//My Components
import TList from "../components/List/index.js";
import TopBar from "../components/TopBar";
import TDrawer from "../components/Drawer";

class Main extends Component {
  //Estado del contanedor
  state = {
    open: false
  };

  //Busquedad del usuario
  getValueSearch = event => {
    event.preventDefault();
    console.log("Buscar: ", event.target.value);
  };
  //Cambiar de vista
  changePage = dataPage => {
    const { setCurrentPage } = this.props;
    if (dataPage.hasOwnProperty("cod")) {
      setCurrentPage(dataPage.cod); //Accion redux
      return;
    }
    setCurrentPage("TUR-INO");
  };
  //Abrir menu lateral
  openLateralMenu = value => {
    const { drawerOpen } = value;
    this.setState({ open: drawerOpen });
  };
  //Cerrar menu lateral
  closeLateralPanel = information => {
    const { close } = information;
    this.setState({ open: close });
  };

  render() {
    return (
      <Router>
        <div>
          <TopBar title="T" getStatusDrawer={this.openLateralMenu} />
          <TDrawer
            open={this.state.open}
            orientation="right"
            closeTDrawer={this.closeLateralPanel}
          >
            <TList collection={directorio()} itemAction={this.changePage} />
          </TDrawer>

          {/** Route **/}
          <div style={{ ...rootContent }}>
            <Root link={this.props.toNavigate} />
          </div>
        </div>
      </Router>
    );
  } //end render
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
