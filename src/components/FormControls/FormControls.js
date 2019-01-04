import React from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

/**
 * @param {string} placehold - text for input placeholder
 */
const InputText = ({ placehold }) => {
  return (
    <FormGroup bsSize="small" className="DivinputG">
      <FormControl type="text" placeholder={placehold} className="ctrlInput" />
    </FormGroup>
  );
};

export const InputPassword = ({ getText }) => {
  return (
    <FormGroup bsSize="small" className="DivinputG">
      <FormControl
        type="password"
        placeholder="***********"
        className="ctrlInput"
      />
    </FormGroup>
  );
};

/**
 * @param {string} message - text for value buttom
 * @param {function} action - function for button onclick
 */
export const BtnSuccess = ({ message, action }) => {
  return (
    <Button
      bsSize="small"
      bsStyle="success"
      onClick={action}
      className="buttomG"
    >
      {message}
    </Button>
  );
};

/**
 *
 * @param {string} message
 * @param {function} action
 */
export const BtnCancel = ({ message, action }) => {
  return (
    <Button
      bsSize="small"
      bsStyle="danger"
      onClick={action}
      className="buttomG"
    >
      {message}
    </Button>
  );
};

export default InputText;
