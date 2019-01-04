import React, { Component } from "react";
import { Form } from "react-bootstrap";
import InputText, {
  InputPassword,
  BtnCancel,
  BtnSuccess
} from "./FormControls.js";
import "../../shareStyles/LoginContainer.css";

class FormLogin extends Component {
  cancelLogin = () => {
    console.log("Cancelando Login");
  };

  render() {
    return (
      <Form id="formL">
        <h4>Iniciar Sessión</h4>
        <InputText placehold="email address" />
        <InputPassword />
        <div>
          <BtnSuccess message="Sign in" action={this.props.loginClick} />
          <BtnCancel message="Cancel" action={this.cancelLogin} />
        </div>
      </Form>
    );
  }
}

export default FormLogin;
