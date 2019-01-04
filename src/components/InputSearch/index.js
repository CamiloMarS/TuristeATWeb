import React from "react";
import Radium from "radium";
import Search from "@material-ui/icons/Search";
import { FormGroup, FormControl } from "react-bootstrap";

const _styls = {
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0 4px"
  },
  input: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "3px",
    minHeight: "3vh",
    maxHeight: "4vh",
    width: "100%"
  },
  bntSearch: {
    width: "25px",
    height: "25px",
    padding: "5px",
    marginLeft: "5px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(0,0,0,.4)",
      borderRadius: "50%",
      color: "#fff"
    }
  }
};

const InputSearch = ({ getValueInput }) => {
  return (
    <div style={_styls.div}>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Busque desde aquí..."
          onKeyUp={getValueInput}
          style={_styls.input}
        />
      </FormGroup>
      <span style={_styls.bntSearch}>
        <Search />
      </span>
    </div>
  );
};

export default Radium(InputSearch);
