import React, { Component } from "react";
import logo from "../logo.svg";
import { main } from "../shareStyles/containersStyles";
import NavMenu from "../components/NavMenu";
import { directorio } from "../configs/Links";
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Header from "../components/Header";
import LogoApp from "../components/Logo";
import InputSearch from "../components/InputSearch";

class Main extends Component {
  getValueSearch = event => {
    event.preventDefault();
    console.log("Buscar: ", event.target.value);
  };

  render() {
    return (
      <Router>
        <div style={{ ...main }}>
          <Header>
            <LogoApp image={logo} />
            <InputSearch getValueInput={this.getValueSearch} />
            <NavMenu type="Horizontal" collection={directorio()} />
          </Header>

          {/** Router here */}
        </div>
      </Router>
    );
  }
}

export default Main;
