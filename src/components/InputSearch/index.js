import React from "react";
import Search from "@material-ui/icons/Search";

const _styls = {
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    padding: "10px !important",
    border: "none"
  }
};

const InputSearch = ({ getValueInput }) => {
  return (
    <div style={_styls.div}>
      <span>
        <Search size="high" />
      </span>
      <input
        type="text"
        placeholder="Busque desde aquí..."
        onKeyUp={getValueInput}
        style={_styls.input}
      />
    </div>
  );
};

export default InputSearch;
