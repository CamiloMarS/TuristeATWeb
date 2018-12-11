import React from "react";
import Search from "@material-ui/icons/Search";

const _styls = {
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 4px"
  },
  input: {
    border: "none",
    height: "4vh",
    width: "100%"
  }
};

const InputSearch = ({ getValueInput }) => {
  return (
    <div style={_styls.div}>
      <input
        type="text"
        placeholder="Busque desde aquí..."
        onKeyUp={getValueInput}
        style={_styls.input}
      />
      <span>
        <Search style={{ fontSize: "28px" }} />
      </span>
    </div>
  );
};

export default InputSearch;
