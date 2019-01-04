import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Main from "./containers/main-container.js";
import LoginContainer from "./containers/LoginContainer.js";
import Loading from "./components/Loading/index.js";
import { CheckSession } from "./configs/checkInitialSession.js";

class App extends Component {
  componentDidMount() {
    console.log("Current Session ", CheckSession());
  }

  render() {
    const { logged, loading } = this.props;
    return (
      <div>
        {loading ? <Loading loaderState="loading" /> : ""}
        {logged ? <Main /> : <LoginContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.loginReducer.toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps)(App);
