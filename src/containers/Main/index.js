import React, { Component } from "react";
import GModal from "../../components/Modal/index.js";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <GModal isOpen={false} />
      </div>
    );
  }
}

export default MainContainer;
