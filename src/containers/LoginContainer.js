import React from "react";

import "../shareStyles/LoginContainer.css";
import FormLogin from "../components/FormControls/FormLogin.js";
import { connect } from "react-redux";
import { setNormalLogin } from "../redux/reducers/Login";
import { bindActionCreators } from "redux";

class LoginContainer extends React.Component {
  setCurrentLogin = () => {
    this.props.userLoggin();
  };

  render() {
    return (
      <div className="contentLogin">
        <div className="contentChildLogin">
          {/** React */}

          <FormLogin loginClick={this.setCurrentLogin} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      userLoggin: setNormalLogin
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
