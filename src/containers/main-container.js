import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { bindActionCreators } from "redux";

//My Imports
import { main, topHeader, menuOptionsm, rootContent  } from "../shareStyles/containersStyles";
import { directorio } from "../configs/Links";
import Root from "../Route/index";
import { connect } from "react-redux";
import { navigateToPage } from "../redux/reducers/LandingPage";

//My Components
import NavMenu from "../components/NavMenu";
import TList from "../components/List/index.js";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import LogoApp from "../components/Logo";
import InputSearch from "../components/InputSearch";
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
     if(dataPage.hasOwnProperty('cod')){
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
          <TopBar title="Drawer Title" getStatusDrawer={this.openLateralMenu} />
          <TDrawer open={this.state.open} orientation="right" closeTDrawer={this.closeLateralPanel}>
            <TList collection={directorio()} itemAction={this.changePage}/>
          </TDrawer>

          {/** Route **/}
          <div style={{...rootContent}}>
            <Root link={this.props.toNavigate}></Root>
          </div>
        </div>
      </Router>
    );
  }; //end render
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
